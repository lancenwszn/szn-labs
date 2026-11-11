"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/config/site";
import { Reveal } from "./Reveal";

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

export function Contact() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const { contactEmail, contactFormEndpoint } = site;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (contactFormEndpoint) {
      setState({ kind: "sending" });
      try {
        const res = await fetch(contactFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error();
        form.reset();
        setState({ kind: "sent" });
      } catch {
        setState({
          kind: "error",
          message: "Your message couldn't be sent. Please try again in a moment.",
        });
      }
      return;
    }

    if (contactEmail) {
      const body = `${data.message}\n\n— ${data.name} (${data.email})`;
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        data.subject,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState({
      kind: "error",
      message:
        "This form isn't connected yet. Our contact address will be published here shortly.",
    });
  }

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
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow">
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
          <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Name</span>
              <input name="name" required autoComplete="name" className="field" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="field"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium">Subject</span>
              <input name="subject" required className="field" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium">Message</span>
              <textarea name="message" required rows={6} className="field resize-y" />
            </label>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={state.kind === "sending"}
                className="btn btn-primary group disabled:opacity-60"
              >
                {state.kind === "sending" ? "Sending…" : "Send Message"}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
              <p role="status" aria-live="polite" className="text-sm text-ink-soft">
                {state.kind === "sent" && "Thanks — your message has been sent."}
                {state.kind === "error" && state.message}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
