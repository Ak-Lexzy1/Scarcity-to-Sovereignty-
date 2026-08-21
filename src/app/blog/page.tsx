import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import { segments } from "@/lib/segments";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical money habits and mindset shifts, organized by segment.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ segment?: string }>;
}) {
  const { segment: activeSegment } = await searchParams;
  const allPosts = getAllPostsMeta();
  const posts = activeSegment
    ? allPosts.filter((p) => p.segment === activeSegment)
    : allPosts;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <div className="mb-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold">The Blog</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-navy">
          Money &amp; Mindset, By Segment
        </h1>
      </div>

      {/* Segment filter tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/blog"
          className={`rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
            !activeSegment
              ? "border-navy bg-navy text-cream"
              : "border-navy/20 text-navy hover:border-navy"
          }`}
        >
          All Posts
        </Link>
        {segments.map((segment) => (
          <Link
            key={segment.slug}
            href={`/blog?segment=${segment.slug}`}
            className={`rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
              activeSegment === segment.slug
                ? "border-navy bg-navy text-cream"
                : "border-navy/20 text-navy hover:border-navy"
            }`}
          >
            {segment.name}
          </Link>
        ))}
      </div>

      {/* Active segment subtitle */}
      {activeSegment && (
        <p className="mt-6 text-center text-xs uppercase tracking-[0.1em] text-navy/50">
          {segments.find((s) => s.slug === activeSegment)?.subtitle}
        </p>
      )}

      {/* Post grid */}
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-16 text-center text-navy/50">No posts in this segment yet — check back soon.</p>
      )}
    </div>
  );
    }
