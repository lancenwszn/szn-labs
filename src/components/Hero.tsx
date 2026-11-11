import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const delay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

/**
 * Abstract accent: a loose field of outlined cells (ideas) resolving into
 * solid blocks (products). Pure geometry — deliberately not the logo.
 */
function HeroGraphic() {
  // o = outline, g = gray, k = black, y = yellow, . = empty
  const rows = ["o..o.", ".og..", "o.gkg", ".gkyk", "..gky"];
  const fill: Record<string, string> = {
    o: "border border-stone",
    g: "bg-mist",
    k: "bg-ink",
    y: "bg-yellow",
    ".": "",
  };
  return (
    <div
      aria-hidden="true"
      className="grid w-full max-w-[240px] grid-cols-5 gap-2 sm:max-w-[420px] sm:gap-3"
    >
      {rows.flatMap((row, r) =>
        row.split("").map((c, i) => (
          <div
            key={`${r}-${i}`}
            className={`rise aspect-square rounded-md ${fill[c]}`}
            style={delay(250 + (r + i) * 55)}
          />
        )),
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid items-center gap-14 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-10 lg:pb-32 lg:pt-32">
        <div>
          <p className="eyebrow rise flex items-center gap-3">
            <span className="h-2 w-2 bg-yellow" />
            Independent software company
          </p>

          <h1
            className="rise mt-6 text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.045em]"
            style={delay(80)}
          >
            Ideas Become{" "}
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute inset-x-[-0.04em] bottom-[0.08em] top-[0.52em] bg-yellow"
              />
              <span className="relative">Products.</span>
            </span>
          </h1>

          <p
            className="rise mt-8 max-w-xl text-xl font-medium leading-snug sm:text-2xl"
            style={delay(160)}
          >
            We build apps and digital products for what&rsquo;s next.
          </p>
          <p
            className="rise mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
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
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link href="/#contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end">
          <HeroGraphic />
        </div>
      </div>

      <div className="container-x hidden pb-8 lg:block">
        <Link
          href="/#about"
          className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-ink"
        >
          <ArrowDown size={14} /> Scroll
        </Link>
      </div>
    </section>
  );
}
