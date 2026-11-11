import Link from "next/link";
import { site } from "@/config/site";

type LogoProps = {
  /** "dark" = for use on black backgrounds. */
  tone?: "light" | "dark";
  className?: string;
  onClick?: () => void;
};

/**
 * SZN Labs logo lockup: approved symbol (when supplied in site.logo) + wordmark.
 * The symbol is rendered untouched at its native aspect ratio.
 */
export function Logo({ tone = "light", className = "", onClick }: LogoProps) {
  const symbol =
    tone === "dark"
      ? site.logo.symbolOnDark || site.logo.symbol
      : site.logo.symbol;

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.name} — home`}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      {symbol ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={symbol} alt="" className="h-7 w-auto" />
      ) : null}
      <span
        className={`text-[19px] font-bold tracking-tight ${
          tone === "dark" ? "text-paper" : "text-ink"
        }`}
      >
        SZN Labs
      </span>
    </Link>
  );
}
