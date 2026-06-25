import { MetadataRoute } from "next";
import { siteConfig, apps } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/privacy"].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const appRoutes = apps.map((app) => ({
    url: `${siteConfig.siteUrl}/${app.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...appRoutes];
}
