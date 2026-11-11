import { validateContact } from "@/lib/contact";

/**
 * Contact form delivery.
 * Validates the submission, then sends it as an email through Resend's HTTP
 * API (no SDK needed). Required server-side environment variables:
 *   RESEND_API_KEY      API key from resend.com
 *   CONTACT_TO_EMAIL    inbox that receives messages
 *   CONTACT_FROM_EMAIL  sender on a domain verified in Resend,
 *                       e.g. "SZN Labs Website <website@your-domain>"
 */

/**
 * Lightweight rate limit: at most RATE_LIMIT messages per IP per window.
 * Counts are held in this server instance's memory, so the limit is
 * best-effort — instances don't share counts and a cold start resets them.
 * It stops casual abuse without extra infrastructure; if spam becomes a real
 * problem, move to a shared store or the hosting platform's firewall rules.
 */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_TRACKED_IPS = 5000;
const recent = new Map<string, number[]>();

/** Returns seconds until the caller may retry, or 0 if the request is allowed. */
function rateLimit(ip: string, now = Date.now()): number {
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_LIMIT) {
    recent.set(ip, hits);
    return Math.max(1, Math.ceil((hits[0] + RATE_WINDOW_MS - now) / 1000));
  }
  hits.push(now);
  recent.delete(ip);
  recent.set(ip, hits);
  // Bound memory: drop expired entries, then the oldest ones if still too many.
  if (recent.size > MAX_TRACKED_IPS) {
    for (const [key, times] of recent) {
      if (now - times[times.length - 1] >= RATE_WINDOW_MS) recent.delete(key);
    }
    for (const key of recent.keys()) {
      if (recent.size <= MAX_TRACKED_IPS) break;
      recent.delete(key);
    }
  }
  return 0;
}

function clientIp(request: Request): string {
  // On Vercel, x-forwarded-for is set by the platform and cannot be spoofed.
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success.
  if (
    body &&
    typeof body === "object" &&
    typeof (body as Record<string, unknown>).company === "string" &&
    (body as Record<string, string>).company !== ""
  ) {
    return Response.json({ ok: true });
  }

  const { values, errors } = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "validation", errors }, { status: 400 });
  }

  const retryAfter = rateLimit(clientIp(request));
  if (retryAfter > 0) {
    return Response.json(
      { error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(retryAfter) } },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form: email delivery is not configured.");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `[SZN Labs] ${values.subject}`,
        text: `${values.message}\n\n—\n${values.name}\n${values.email}\nSent from the SZN Labs website contact form.`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("Contact form: delivery failed", res.status, await res.text());
      return Response.json({ error: "delivery_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form: delivery failed", err);
    return Response.json({ error: "delivery_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
