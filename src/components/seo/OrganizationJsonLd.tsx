import { siteConfig } from "@/lib/site-config";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    foundingDate: siteConfig.founded,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [siteConfig.twitter, siteConfig.github].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
