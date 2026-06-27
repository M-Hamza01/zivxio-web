import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ZivXio for support, feedback, or questions about NUST One and our other apps.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <Section tone="light" className="py-20 md:py-28">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl">
        <div>
          <Eyebrow>get in touch</Eyebrow>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy-900)] mt-3 mb-6">
            We read every message ourselves.
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
            Found a bug, have feedback on NUST One, or want to suggest an
            app idea? Send us an email directly — no ticketing system, no
            auto-responder, just us.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            We typically reply within 24–48 hours.
          </p>
        </div>

        <Card variant="raised">
          <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)] mb-2">
            email
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xl font-semibold text-[var(--navy-900)] hover:text-[var(--accent-600)] transition-colors break-all"
          >
            {siteConfig.email}
          </a>

          <div className="h-px bg-[var(--border)] my-6" />

          <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)] mb-4">
            what to include
          </p>
          <ul className="text-sm text-[var(--text-secondary)] space-y-2 mb-8 list-disc pl-5">
            <li>Which app you're writing about (e.g. NUST One)</li>
            <li>Your device/Android version, if reporting a bug</li>
            <li>Steps to reproduce, if applicable</li>
          </ul>

          <Button href={`mailto:${siteConfig.email}`} variant="primary" className="w-full justify-center">
            Email us
          </Button>
        </Card>
      </Container>
    </Section>
  );
}
