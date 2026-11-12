"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-colors duration-300 ${
        scrolled || open ? "border-mist" : "border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo onClick={close} />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary h-10 px-5">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        inert={!open}
        className={`absolute inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-paper transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="container-x flex h-full flex-col pb-8 pt-6"
        >
          <ul>
            {site.nav.map((item, i) => (
              <li
                key={item.href}
                className={`border-b border-mist transition-[opacity,transform] duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-5 text-2xl font-semibold tracking-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onClick={close}
            className="btn btn-primary mt-auto w-full"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
