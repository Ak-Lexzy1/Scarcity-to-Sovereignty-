import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center md:px-10">
      <p className="text-[11px] uppercase tracking-[0.25em] text-gold">404</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-navy">
        This Page Doesn&rsquo;t Exist Yet
      </h1>
      <p className="mt-4 text-sm text-ink/60">
        Even sovereignty has a few dead ends. Let&rsquo;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-navy px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-cream hover:bg-navy-deep"
      >
        Back to Home
      </Link>
    </div>
  );
}
