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
