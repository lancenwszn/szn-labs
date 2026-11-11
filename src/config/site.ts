/**
 * Central site configuration.
 * Everything that is expected to change (contact address, logo assets,
 * form endpoint, public URL) lives here.
 */
export const site = {
  name: "SZN Labs",
  tagline: "Ideas Become Products.",
  description:
    "SZN Labs is an independent software company focused on turning ideas into meaningful tools. We build apps and digital products for what's next.",
  shortDescription:
    "An independent software company building apps and digital products for what's next.",

  /** Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL in production. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  /**
   * Official contact address. Not provided yet, so it stays empty and the UI
   * shows a neutral placeholder. Set NEXT_PUBLIC_CONTACT_EMAIL (or edit here).
   */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  /**
   * Optional endpoint the contact form POSTs JSON to (e.g. a form service or
   * your own API route). When empty, the form falls back to opening the
   * visitor's mail client addressed to `contactEmail`.
   */
  contactFormEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "",

  /**
   * Approved logo assets. Drop the supplied files into /public/brand and set
   * the paths here. While a path is empty the site renders the text wordmark
   * only — it never draws a substitute symbol.
   *
   *  - symbol:        the yellow S symbol on its own (SVG preferred)
   *  - symbolOnDark:  optional variant for black backgrounds (falls back to `symbol`)
   *
   * For the favicon, add the symbol as src/app/icon.svg (or icon.png).
   */
  logo: {
    symbol: "",
    symbolOnDark: "",
  },

  nav: [
    { label: "About", href: "/#about" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Products", href: "/#products" },
    { label: "Philosophy", href: "/#philosophy" },
  ],
} as const;
