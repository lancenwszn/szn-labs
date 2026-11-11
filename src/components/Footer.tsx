import Link from "next/link";
import { site } from "@/config/site";
import { Logo } from "./Logo";

const columns = [
  { title: "Company", links: [...site.nav.filter((n) => n.label !== "Products")] },
  {
    title: "Explore",
    links: [
      { label: "Products", href: "/#products" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs leading-relaxed text-stone">
              {site.shortDescription}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-yellow">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-stone">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[15px] transition-colors duration-200 hover:text-yellow"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-16 border-t border-paper/15 pt-6 text-sm text-stone">
          © 2026 SZN Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
