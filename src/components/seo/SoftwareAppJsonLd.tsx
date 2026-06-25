import { AppInfo } from "@/lib/site-config";

export default function SoftwareAppJsonLd({ app }: { app: AppInfo }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.description,
    applicationCategory: app.category,
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: app.ratingCount
      ? {
          "@type": "AggregateRating",
          ratingValue: app.rating,
          ratingCount: app.ratingCount,
        }
      : undefined,
    downloadUrl: app.playStoreUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
