import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Digital products from Scarcity to Sovereignty.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Shop</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">
          Digital Products
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink/60">
          Workbooks, planners, and guides built to turn ideas into action.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-navy/5 transition hover:shadow-md"
          >
            <div className="flex h-40 items-center justify-center bg-navy">
              <span className="font-serif text-lg text-gold">
                {product.comingSoon ? "Coming Soon" : product.name}
              </span>
            </div>
            <div className="flex flex-1 flex-col px-6 py-6">
              <h3 className="font-serif text-lg font-semibold text-navy">
                {product.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-ink/60">
                {product.description}
              </p>
              <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold">
                {product.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
                }
