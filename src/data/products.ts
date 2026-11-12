export type ProductStatus = "Live" | "Beta" | "In Development" | "Coming Soon";

export type Product = {
  name: string;
  /** Optional product tagline, shown on the featured card. */
  tagline?: string;
  description: string;
  /** Optional until the product's positioning is public. */
  category?: string;
  status: ProductStatus;
  /** Featured products get a full-width card at the top of the section. */
  featured?: boolean;
  /** Square icon in /public, e.g. "/products/acme.svg". Used on grid cards. */
  icon?: string;
  /** Full logo in /public, any shape. Used on the featured card. */
  logo?: string;
  /** Product website. The "Visit Product" button is shown only when set. */
  url?: string;
};

/**
 * The SZN Labs product portfolio.
 *
 * To add a product, append an entry — the Products section lays itself out
 * automatically. If the list is empty the section shows a Coming Soon state.
 * Only describe what is actually available; unreleased products should say so.
 *
 * Example:
 * {
 *   name: "Product Name",
 *   description: "One or two sentences on what it does.",
 *   category: "Productivity",
 *   status: "In Development",
 *   icon: "/products/product-name.svg",
 *   url: "https://example.com",
 * }
 */
export const products: Product[] = [
  {
    name: "PaprPop",
    tagline: "Make every page yours.",
    description:
      "A playful and creative digital notebook for students, creatives, and young professionals. PaprPop is currently in development and not yet available.",
    category: "Digital Notebook",
    status: "In Development",
    featured: true,
    logo: "/products/paprpop-logo.webp",
  },
];
