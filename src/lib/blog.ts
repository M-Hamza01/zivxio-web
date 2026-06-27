import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// To publish a new post: add a .md file to src/content/blog/ with
// frontmatter (title, date, excerpt, category) and markdown content below
// it. No other code changes needed — it'll show up on /blog automatically.
//
// Example file: src/content/blog/my-new-post.md
// ---
// title: "My New Post"
// date: "2026-07-01"
// excerpt: "A short one-sentence summary shown on the blog list."
// category: "Development"
// ---
// Your markdown content starts here...

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
};

export type Post = PostMeta & { contentHtml: string };

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      category: (data.category as string) ?? "General",
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = marked.parse(content) as string;

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category ?? "General",
    contentHtml,
  };
}
