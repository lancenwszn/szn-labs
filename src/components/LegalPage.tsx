import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main id="main" className="container-x py-20 lg:py-28">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
        {children}
      </div>
    </main>
  );
}
