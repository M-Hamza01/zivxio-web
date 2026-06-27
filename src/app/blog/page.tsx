import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building ZivXio's apps — engineering decisions, design choices, and lessons from shipping student software.",
  alternates: { canonical: "/blog" },
};

// Local content for now — add a new block here to publish a post.
const posts = [
  {
    id: 1,
    title: "Building NUST One: a developer's journey",
    excerpt:
      "Behind the scenes of creating the student companion app — portal integration challenges, and designing for scale.",
    date: "June 25, 2026",
    category: "Development",
  },
  {
    id: 2,
    title: "Why minimal UI wins in utility apps",
    excerpt:
      "Exploring the psychology of clean interfaces in mobile utility apps, and how removing clutter increases daily use.",
    date: "June 10, 2026",
    category: "Design",
  },
];

export default function Blog() {
  return (
    <div className="w-full">
      <Section tone="dark" className="py-20">
        <Container className="max-w-3xl">
          <Eyebrow tone="on-dark">the journal</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-5">
            Notes from the build.
          </h1>
          <p className="text-lg text-[var(--text-on-dark-secondary)] leading-relaxed">
            Engineering decisions, design choices, and lessons from building
            and shipping ZivXio's apps.
          </p>
        </Container>
      </Section>

      <Section tone="light" className="py-16">
        <Container className="max-w-3xl">
          <div className="divide-y divide-[var(--border)]">
            {posts.map((post) => (
              <article key={post.id} className="group py-10 first:pt-0">
                <div className="flex items-center gap-x-4 font-mono-tight text-xs uppercase mb-4">
                  <time dateTime={post.date} className="text-[var(--text-tertiary)]">
                    {post.date}
                  </time>
                  <span className="text-[var(--accent-600)]">{post.category}</span>
                </div>

                <h2 className="text-2xl font-bold text-[var(--navy-900)] group-hover:text-[var(--accent-600)] transition-colors mb-3">
                  <Link href="#">{post.title}</Link>
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-600)]"
                >
                  Read article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
