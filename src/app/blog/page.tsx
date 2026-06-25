import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building ZivXio's apps — engineering decisions, design choices, and lessons from shipping student software.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  // This is your local content database. 
  // To add a new post, just add another block to this array!
  const posts = [
    {
      id: 1,
      title: "Building NUST One: A Developer's Journey",
      excerpt: "Behind the scenes of creating the ultimate student companion app, overcoming portal integration challenges, and designing for scale.",
      date: "June 25, 2026",
      category: "Development",
    },
    {
      id: 2,
      title: "The ZivXio Masterplan: Why Minimalist UI Wins",
      excerpt: "Exploring the psychology of clean interfaces in mobile utility applications and how removing clutter increases daily active users.",
      date: "June 10, 2026",
      category: "Design",
    }
  ];

  return (
    <div className="flex flex-col items-center w-full bg-white animate-fade-in min-h-screen">
      
      {/* 1. Blog Hero Header */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 border-b border-gray-100">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
          The ZivXio <span className="text-[#0052ff]">Journal.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Thoughts on software engineering, mobile app design, and building digital solutions from the ground up.
        </p>
      </section>

      {/* 2. Article Feed */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col space-y-16">
          
          {posts.map((post) => (
            <article key={post.id} className="group relative flex flex-col items-start justify-between">
              
              {/* Metadata */}
              <div className="flex items-center gap-x-4 text-xs mb-4">
                <time dateTime={post.date} className="text-gray-500 font-medium">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1 font-medium text-[#0052ff]">
                  {post.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="group relative">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#0052ff] transition-colors mb-3">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="line-clamp-3 text-base text-gray-600 leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
              </div>
              
              {/* Fake CTA */}
              <div className="mt-6 flex items-center gap-x-2 text-sm font-semibold text-[#0052ff]">
                Read article
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

            </article>
          ))}

        </div>
      </section>
      
    </div>
  );
}