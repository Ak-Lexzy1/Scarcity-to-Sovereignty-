import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Product Not Found" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 md:px-10">
      <div className="flex h-64 items-center justify-center rounded-xl bg-navy">
        <span className="font-serif text-2xl text-gold">{product.name}</span>
      </div>

      <h1 className="mt-8 font-serif text-3xl font-semibold text-navy md:text-4xl">
        {product.name}
      </h1>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-gold">
        {product.price}
      </p>
      <p className="mt-6 text-base leading-relaxed text-ink/70">
        {product.description}
      </p>

      {product.comingSoon ? (
        <div className="mt-8 rounded-md border border-navy/10 bg-cream px-6 py-4 text-center text-sm text-navy/60">
          This product isn&rsquo;t available yet — check back soon.
        </div>
      ) : (
        <a
          href={product.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-sm bg-navy px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-cream hover:bg-navy-deep"
        >
          Get It Now
        </a>
      )}

      <div className="mt-12 border-t border-navy/10 pt-8 text-center">
        <Link
          href="/shop"
          className="text-[11px] font-semibold uppercase tracking-[0.15em] text-navy hover:text-gold"
        >
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
          }
