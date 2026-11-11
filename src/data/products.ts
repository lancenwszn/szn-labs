export type ProductStatus = "Live" | "Beta" | "In Development" | "Coming Soon";

export type Product = {
  name: string;
  description: string;
  /** Optional until the product's positioning is public. */
  category?: string;
  status: ProductStatus;
  /** Featured products get a full-width card at the top of the section. */
  featured?: boolean;
  /** Path to the product's logo/icon in /public, e.g. "/products/acme.svg". */
  icon?: string;
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
    description:
      "PaprPop is the first product from SZN Labs. It is currently in development — details will be shared here as it gets closer to launch.",
    status: "In Development",
    featured: true,
  },
];
