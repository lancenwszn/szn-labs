import Link from "next/link";
import { site } from "@/config/site";

type LogoProps = {
  /** "dark" = for use on black backgrounds. */
  tone?: "light" | "dark";
  className?: string;
  onClick?: () => void;
};

/**
 * Approved SZN Labs lockup (symbol + wordmark), rendered untouched at its
 * native aspect ratio. Asset paths live in site.logo.
 */
export function Logo({ tone = "light", className = "", onClick }: LogoProps) {
  const { width, height } = site.logo;
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.name} — home`}
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tone === "dark" ? site.logo.onDark : site.logo.onLight}
        alt={site.name}
        width={width}
        height={height}
        className="h-9 w-auto"
      />
    </Link>
  );
}
