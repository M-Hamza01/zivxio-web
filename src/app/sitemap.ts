import { MetadataRoute } from "next";
import { siteConfig, apps } from "@/lib/site-config";
import { getAllPostsMeta } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/apps",
    "/services",
    "/blog",
    "/privacy",
    "/contact",
    "/billcheck/privacy",
    "/billcheck/terms",
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const appRoutes = apps.map((app) => ({
    url: `${siteConfig.siteUrl}/${app.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllPostsMeta().map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...appRoutes, ...postRoutes];
}
