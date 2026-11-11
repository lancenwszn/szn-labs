/**
 * Central site configuration.
 * Everything that is expected to change (contact address, logo assets,
 * public URL) lives here.
 */
export const site = {
  name: "SZN Labs",
  tagline: "Ideas Become Products.",
  description:
    "SZN Labs is an independent software company focused on turning ideas into meaningful tools. We build apps and digital products for what's next.",
  shortDescription:
    "An independent software company building apps and digital products for what's next.",

  /** Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL in production. */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, ""),

  /**
   * Official contact address. Not provided yet, so it stays empty and the UI
   * shows a neutral placeholder. Set NEXT_PUBLIC_CONTACT_EMAIL (or edit here).
   * Contact form delivery is configured separately — see .env.example.
   */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  /**
   * Shows a "Draft for review" notice on the Privacy Policy and Terms pages.
   * Set to false once the legal text has been reviewed and approved.
   */
  legalDraft: true,

  /**
   * Approved logo lockup: the supplied high-resolution symbol plus the
   * wordmark taken from the brand styleboard. Replace the files in
   * /public/brand with vector (SVG) masters when available and update the
   * paths and intrinsic size here.
   * The favicon / app icon lives in src/app/icon.png and apple-icon.png.
   */
  logo: {
    onLight: "/brand/szn-labs-logo.png",
    onDark: "/brand/szn-labs-logo-on-dark.png",
    symbol: "/brand/szn-labs-symbol.png",
    width: 1324,
    height: 310,
  },

  nav: [
    { label: "About", href: "/#about" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Products", href: "/#products" },
    { label: "Philosophy", href: "/#philosophy" },
  ],
} as const;
