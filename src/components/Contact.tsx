"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/config/site";
import {
  contactFields,
  validateContact,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact";
import { Reveal } from "./Reveal";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const labels: Record<ContactField, string> = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

function Label({ name }: { name: ContactField }) {
  return (
    <label htmlFor={`contact-${name}`} className="mb-2 block text-sm font-medium">
      {labels[name]}
    </label>
  );
}

function Problem({ name, errors }: { name: ContactField; errors: ContactErrors }) {
  return errors[name] ? (
    <p id={`contact-${name}-error`} className="mt-2 text-sm font-medium">
      <span aria-hidden="true" className="mr-1.5 inline-block h-2 w-2 bg-yellow" />
      {errors[name]}
    </p>
  ) : null;
}

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const { contactEmail } = site;

  const fallback = contactEmail
    ? `Your message couldn't be sent. Please try again, or email ${contactEmail}.`
    : "Your message couldn't be sent. Please try again in a moment.";

  function showErrors(form: HTMLFormElement, next: ContactErrors) {
    setErrors(next);
    const first = contactFields.find((f) => next[f]);
    if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const { values, errors: found } = validateContact(data);

    if (Object.keys(found).length > 0) {
      setStatus({ kind: "idle" });
      showErrors(form, found);
      return;
    }

    setErrors({});
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company: data.company ?? "" }),
      });
      if (res.ok) {
        form.reset();
        setStatus({ kind: "sent" });
        return;
      }
      const body = await res.json().catch(() => null);
      if (res.status === 400 && body?.errors) {
        setStatus({ kind: "idle" });
        showErrors(form, body.errors);
        return;
      }
      setStatus({
        kind: "error",
        message:
          res.status === 429
            ? "You've sent several messages in a short time. Please try again in a few minutes."
            : fallback,
      });
    } catch {
      setStatus({ kind: "error", message: fallback });
    }
  }

  const field = (name: ContactField) => ({
    id: `contact-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    onChange: () =>
      errors[name] && setErrors((prev) => ({ ...prev, [name]: undefined })),
    className: "field",
  });

  return (
    <section id="contact" className="border-t border-mist">
      <div className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-32">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="h2 mt-5">Have an Idea? Let&rsquo;s Connect.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Whether you&rsquo;re interested in our products, exploring a
            collaboration, or simply want to connect, we&rsquo;d love to hear
            from you.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-yellow">
              <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow">Email</p>
              {contactEmail ? (
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-1 block font-medium underline decoration-yellow decoration-2 underline-offset-4"
                >
                  {contactEmail}
                </a>
              ) : (
                <p className="mt-1 font-medium">Contact address coming soon</p>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5 sm:grid-cols-2"
          >
            <div>
              <Label name="name" />
              <input {...field("name")} autoComplete="name" maxLength={100} />
              <Problem name="name" errors={errors} />
            </div>
            <div>
              <Label name="email" />
              <input
                {...field("email")}
                type="email"
                autoComplete="email"
                maxLength={254}
              />
              <Problem name="email" errors={errors} />
            </div>
            <div className="sm:col-span-2">
              <Label name="subject" />
              <input {...field("subject")} maxLength={150} />
              <Problem name="subject" errors={errors} />
            </div>
            <div className="sm:col-span-2">
              <Label name="message" />
              <textarea
                {...field("message")}
                rows={6}
                maxLength={5000}
                className="field resize-y"
              />
              <Problem name="message" errors={errors} />
            </div>

            {/* Honeypot for bots; hidden from people and assistive tech. */}
            <div aria-hidden="true" className="hidden">
              <label>
                Company
                <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status.kind === "sending"}
                className="btn btn-primary group shrink-0 disabled:opacity-60"
              >
                {status.kind === "sending" ? "Sending…" : "Send Message"}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
              <p role="status" aria-live="polite" className="text-sm text-ink-soft">
                {status.kind === "sent" &&
                  "Thanks — your message has been sent. We'll be in touch."}
                {status.kind === "error" && status.message}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
