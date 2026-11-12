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
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />

        <div className="container-x relative flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
          <p className="rise text-xs font-semibold uppercase tracking-[0.2em] text-yellow">
            Independent software company
          </p>

          <h1
            className="rise mt-6 max-w-4xl text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
            style={delay(80)}
          >
            Ideas Become <span className="text-yellow">Products.</span>
          </h1>

          <p
            className="rise mt-6 max-w-xl text-lg font-medium leading-snug sm:text-xl"
            style={delay(160)}
          >
            We build apps and digital products for what&rsquo;s next.
          </p>
          <p
            className="rise mt-3 max-w-xl leading-relaxed text-stone"
            style={delay(220)}
          >
            SZN Labs is an independent software company focused on turning
            ideas into meaningful tools.
          </p>

          <div
            className="rise mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
            style={delay(300)}
          >
            <Link href="/#contact" className="btn btn-secondary">
              Get in Touch
            </Link>
            <Link href="/#products" className="btn btn-primary group">
              Explore Our Products
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
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
