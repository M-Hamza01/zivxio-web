import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Section tone="light" className="py-16 md:py-20">
      <ArticleJsonLd post={post} />
      <Container className="max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-600)] mb-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to blog
        </Link>

        <div className="flex items-center gap-x-4 font-mono-tight text-xs uppercase mb-4">
          <time dateTime={post.date} className="text-[var(--text-tertiary)]">
            {formatDate(post.date)}
          </time>
          <span className="text-[var(--accent-600)]">{post.category}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy-900)] mb-10">
          {post.title}
        </h1>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </Container>
    </Section>
  );
}
