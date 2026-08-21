import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import { segments } from "@/lib/segments";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import { IconCompass, IconGrowth, IconMindset } from "@/components/Icons";

const segmentIcons = {
  "money-foundations": IconCompass,
  "wealth-income-building": IconGrowth,
  "mindset-freedom": IconMindset,
};

export default function HomePage() {
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:px-10 md:py-32">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Money &amp; Mindset
          </span>
          <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-[1.15] text-cream md:text-6xl">
            Where Scarcity Thinking Ends &amp; Wealth Clarity Starts
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            Practical money habits and honest mindset shifts for people who are done being
            broke and done thinking small about wealth.
          </p>
          <Link
            href="/blog"
            className="mt-2 inline-block rounded-sm bg-gold px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-deep transition hover:bg-gold-soft"
          >
            Start Reading
          </Link>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Explore by Segment</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-navy">
            Three Paths, One Destination
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {segments.map((segment) => {
            const Icon = segmentIcons[segment.slug];
            return (
              <Link
                key={segment.slug}
                href={`/blog?segment=${segment.slug}`}
                className="group rounded-lg border border-navy/10 bg-white p-8 text-center transition hover:border-gold hover:shadow-md"
              >
                <Icon className="mx-auto h-10 w-10 stroke-navy transition group-hover:stroke-gold" />
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                  {segment.name}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.08em] text-navy/50">
                  {segment.subtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Latest</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-navy">Recent Posts</h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-[11px] font-semibold uppercase tracking-[0.15em] text-navy hover:text-gold sm:block"
            >
              View All →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10">
        <NewsletterForm />
      </section>
    </>
  );
}
