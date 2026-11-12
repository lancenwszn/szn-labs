import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

/** Thin yellow bar above the header, announcing the first featured product. */
export function AnnouncementBar() {
  const product = products.find((p) => p.featured);
  if (!product) return null;

  return (
    <div className="bg-yellow text-ink">
      <Link
        href="/#products"
        className="container-x group flex min-h-9 items-center justify-center gap-2 py-2 text-center text-xs font-semibold"
      >
        <span>
          {product.name} — {product.status.toLowerCase()}
        </span>
        <ArrowRight
          size={14}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
