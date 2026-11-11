import { ArrowUpRight, Plus } from "lucide-react";
import { products, type Product } from "@/data/products";
import { Reveal } from "./Reveal";

function StatusBadge({ status }: { status: Product["status"] }) {
  const live = status === "Live";
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-stone px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em]">
      <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-ink" : "bg-yellow"}`} />
      {status}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-mist bg-paper p-7 transition-colors duration-200 hover:border-ink">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-mist text-lg font-bold">
          {product.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.icon}
              alt=""
              className="h-full w-full object-contain"
            />
          ) : (
            product.name.charAt(0)
          )}
        </span>
        <StatusBadge status={product.status} />
      </div>

      <p className="eyebrow mt-8">{product.category}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">
        {product.name}
      </h3>
      <p className="mt-3 leading-relaxed text-ink-soft">
        {product.description}
      </p>

      <div className="mt-auto pt-8">
        {product.url ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group h-10 px-4 text-sm"
          >
            Visit Product
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only"> — {product.name} (opens in a new tab)</span>
          </a>
        ) : (
          <span className="text-sm text-ink-soft">Website coming soon</span>
        )}
      </div>
    </article>
  );
}

function ComingSoon() {
  return (
    <div className="grid overflow-hidden rounded-xl border border-mist md:grid-cols-[1.2fr_1fr]">
      <div className="p-8 sm:p-12">
        <StatusBadge status="Coming Soon" />
        <h3 className="mt-8 max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          Our first products are in the works.
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
          We&rsquo;re building behind the scenes. As each product launches it
          will appear here, with its own identity and its own home.
        </p>
      </div>
      <div
        aria-hidden="true"
        className="grid grid-cols-3 gap-3 border-t border-mist bg-mist/50 p-8 sm:p-12 md:border-l md:border-t-0"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-lg ${
              i === 0
                ? "bg-yellow text-ink"
                : "border border-dashed border-stone text-stone"
            }`}
          >
            <Plus size={20} strokeWidth={1.5} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products">
      <div className="container-x py-20 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our Products</p>
            <h2 className="h2 mt-5">A Growing Universe of Products.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-ink-soft">
              Every product starts with an idea. We build independent digital
              experiences designed around different needs, industries, and
              audiences.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 lg:mt-16">
          {products.length === 0 ? (
            <Reveal>
              <ComingSoon />
            </Reveal>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <li key={product.name}>
                  <Reveal delay={(i % 3) * 90} className="h-full">
                    <ProductCard product={product} />
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
