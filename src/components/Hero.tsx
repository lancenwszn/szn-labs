import type { CSSProperties } from "react";
import Link from "next/link";
import { AppWindow, ArrowRight, Lightbulb, Rocket } from "lucide-react";

const delay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

const pillars = [
  { icon: AppWindow, title: "Software & Applications", note: "Apps built to solve real problems" },
  { icon: Lightbulb, title: "Digital Innovation", note: "New ideas and technologies" },
  { icon: Rocket, title: "Product Development", note: "From concept to launch" },
];

export function Hero() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-[#060606] text-paper">
        {/* Artwork sits on the right; the gradient keeps the copy readable. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/hero.webp"
          alt=""
          width={1672}
          height={941}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[78%_center] opacity-45 xl:opacity-100 xl:object-right"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/70 to-transparent xl:via-[#060606]/40"
        />

        <div className="container-x relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-xl">
            <p className="rise text-xs font-semibold uppercase tracking-[0.2em] text-yellow">
              Independent software company
            </p>

            <h1
              className="rise mt-6 text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
              style={delay(80)}
            >
              Ideas Become <span className="text-yellow">Products.</span>
            </h1>

            <p
              className="rise mt-6 text-lg font-medium leading-snug sm:text-xl"
              style={delay(160)}
            >
              We build apps and digital products for what&rsquo;s next.
            </p>
            <p
              className="rise mt-3 max-w-md leading-relaxed text-stone"
              style={delay(220)}
            >
              SZN Labs is an independent software company focused on turning
              ideas into meaningful tools.
            </p>

            <div
              className="rise mt-10 flex flex-col gap-3 sm:flex-row"
              style={delay(300)}
            >
              <Link href="/#products" className="btn btn-primary group">
                Explore Our Products
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <Link href="/#contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-yellow text-ink">
        <ul className="container-x grid gap-6 py-8 sm:grid-cols-3 sm:gap-8 sm:py-9">
          {pillars.map(({ icon: Icon, title, note }) => (
            <li key={title} className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-yellow">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold">{title}</span>
                <span className="block text-sm text-ink/80">{note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
