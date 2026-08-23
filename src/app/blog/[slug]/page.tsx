import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { getSegment } from "@/lib/segments";
import { PostIcon } from "@/components/Icons";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import AdSlot from "@/components/AdSlot";
export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
          title: post.title,
          description: post.excerpt,
          type: "article",
        },
      };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const segment = getSegment(post!.segment);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:px-10">
      <div className="text-center">
        {segment && (
          <Link
            href={`/blog?segment=${segment.slug}`}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold hover:underline"
          >
            {segment.name}
          </Link>
        )}
        <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy md:text-5xl">
          {post!.title}
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.1em] text-navy/50">
          Scarcity to Sovereignty &middot; {post!.readTime} &middot; {post!.date}
        </p>
      </div>
<AdSlot label="Ad Slot — Top of Post" />
      <div className="relative my-12 h-72 overflow-hidden rounded-xl bg-navy md:h-96">
          {post!.image ? (
            <Image
              src={post!.image}
              alt={post!.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <PostIcon name={post!.icon} className="h-20 w-20 stroke-gold" />
            </div>
          )}
        </div>
      <div
        className="prose prose-lg mx-auto max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:leading-relaxed prose-p:text-ink/80 prose-a:text-gold prose-blockquote:border-gold prose-blockquote:font-serif prose-blockquote:text-navy prose-strong:text-navy"
        dangerouslySetInnerHTML={{ __html: post!.contentHtml }}
      />
<AdSlot label="Ad Slot — End of Post" />
      <div className="mt-16 border-t border-navy/10 pt-10">
        <NewsletterForm />
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="text-[11px] font-semibold uppercase tracking-[0.15em] text-navy hover:text-gold"
        >
          ← Back to All Posts
        </Link>
      </div>
    </article>
  );
        }
