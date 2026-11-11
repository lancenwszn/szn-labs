export type ProductStatus = "Live" | "Beta" | "In Development" | "Coming Soon";

export type Product = {
  name: string;
  description: string;
  category: string;
  status: ProductStatus;
  /** Path to the product's logo/icon in /public, e.g. "/products/acme.svg". */
  icon?: string;
  /** Product website. The "Visit Product" button is shown only when set. */
  url?: string;
};

/**
 * The SZN Labs product portfolio.
 *
 * To add a product, append an entry — the Products section lays itself out
 * automatically. While this list is empty the section shows a Coming Soon state.
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
export const products: Product[] = [];
