import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import AppCard from "@/components/AppCard";
import { apps, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Apps",
  description: `All apps built by ${siteConfig.name} — ${apps.map((a) => a.name).join(", ")}.`,
  alternates: { canonical: "/apps" },
};

export default function Apps() {
  return (
    <div className="w-full">
      <Section tone="dark" className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow tone="on-dark">all apps</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
            Apps built by {siteConfig.name}.
          </h1>
          <p className="text-lg text-[var(--text-on-dark-secondary)] leading-relaxed">
            Every tool we ship is focused, maintained directly by us, and
            built to solve one problem well.
          </p>
        </Container>
      </Section>

      <Section tone="surface" className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
