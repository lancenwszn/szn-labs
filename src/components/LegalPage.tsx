import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/config/site";

type LegalPageProps = {
  title: string;
  /** Human-readable date of the last revision. */
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <main id="main" className="container-x py-20 lg:py-28">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 text-sm text-ink-soft">Last updated: {updated}</p>

      {site.legalDraft ? (
        <p className="mt-8 max-w-2xl border-l-4 border-yellow bg-mist/60 px-5 py-4 text-[15px] leading-relaxed">
          <strong>Draft for review.</strong> This document is a working draft
          and has not yet been reviewed by legal counsel. Items in [square
          brackets] are still to be confirmed.
        </p>
      ) : null}

      <div className="prose-legal mt-10 max-w-2xl leading-relaxed text-ink-soft">
        {children}
      </div>
    </main>
  );
}

/** How to reach SZN Labs: the official address once set, otherwise the contact form. */
export function ContactRoute() {
  return site.contactEmail ? (
    <>
      by email at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or
      through the <Link href="/#contact">contact form</Link> on this website
    </>
  ) : (
    <>
      through the <Link href="/#contact">contact form</Link> on this website
    </>
  );
}
