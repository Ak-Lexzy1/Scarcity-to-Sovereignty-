import Link from "next/link";
import { PostIcon } from "./Icons";
import { getSegment } from "@/lib/segments";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  const segment = getSegment(post.segment);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm shadow-navy/5 ring-1 ring-navy/5 transition hover:shadow-md hover:shadow-navy/10"
    >
      <div className="flex h-44 items-center justify-center bg-cream">
        <PostIcon
          name={post.icon}
          className="h-16 w-16 stroke-navy transition group-hover:stroke-gold"
        />
      </div>
      <div className="flex flex-1 flex-col bg-navy px-6 py-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
          {segment?.name ?? post.segment}
        </span>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-cream">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-cream/60">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-gold/20 pt-3 text-[10px] uppercase tracking-[0.12em] text-gold/80">
          <span>{post.readTime}</span>
          <span className="text-cream/40">Scarcity to Sovereignty</span>
        </div>
      </div>
    </Link>
  );
          }
