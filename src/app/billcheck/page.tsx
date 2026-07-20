import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import ScreenshotStrip from "@/components/ui/ScreenshotStrip";
import ShareButton from "@/components/ui/ShareButton";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CountUp from "@/components/ui/CountUp";
import SoftwareAppJsonLd from "@/components/seo/SoftwareAppJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { apps, siteConfig } from "@/lib/site-config";

const app = apps.find((a) => a.slug === "billcheck")!;

export const metadata: Metadata = {
  title:
    "BillCheck — Check LESCO, PESCO, IESCO, K-Electric & all DISCO bills in one app",
  description: app.description,
  alternates: { canonical: "/billcheck" },
  openGraph: {
    title: "BillCheck — Every electricity bill in Pakistan, one app",
    description: app.description,
    url: "/billcheck",
  },
};

const discos = [
  "LESCO", "IESCO", "PESCO", "FESCO",
  "MEPCO", "GEPCO", "HESCO", "SEPCO",
  "QESCO", "TESCO", "K-Electric",
];


export default function BillCheck() {
  const hasStats = app.ratingCount > 0;

  return (
    <div className="w-full">
      <SoftwareAppJsonLd app={app} />
      <FaqJsonLd items={app.faqs} />

      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <Section tone="light" className="py-16 md:py-20">
        <Container className="max-w-5xl">
          <div className="flex flex-col sm:flex-row gap-8 sm:items-start">
            {/* App icon */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[20px] overflow-hidden shrink-0 shadow-sm bg-[var(--surface)]">
              {app.icon && (
                <Image
                  src={app.icon}
                  alt={`${app.name} app icon`}
                  fill
                  className="object-cover"
                  sizes="112px"
                  priority
                />
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--navy-900)] mb-2">
                {app.name}
              </h1>
              <p className="text-[var(--accent-600)] font-semibold mb-1">
                ZivXio
              </p>
              <p className="text-sm text-[var(--text-tertiary)] mb-5">
                Free · Contains ads · Android
              </p>

              {/* Stats row — only rendered when real data is available */}
              {hasStats && (
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-6">
                  <RevealOnScroll delay={0}>
                    <div>
                      <p className="font-semibold text-[var(--navy-900)]">
                        <CountUp end={app.rating} decimals={1} suffix="★" />
                      </p>
                      <p className="text-xs text-[var(--text-tertiary)]">
                        {app.ratingCount} reviews
                      </p>
                    </div>
                  </RevealOnScroll>
                  <RevealOnScroll delay={80}>
                    <div>
                      <p className="font-semibold text-[var(--navy-900)]">
                        {app.installs}
                      </p>
                      <p className="text-xs text-[var(--text-tertiary)]">
                        Downloads
                      </p>
                    </div>
                  </RevealOnScroll>
                  <RevealOnScroll delay={160}>
                    <div>
                      <p className="font-semibold text-[var(--navy-900)]">
                        {app.category}
                      </p>
                      <p className="text-xs text-[var(--text-tertiary)]">
                        Category
                      </p>
                    </div>
                  </RevealOnScroll>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-6">
                <Button
                  href={app.playStoreUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="dark"
                >
                  Get it on Google Play
                </Button>
                <ShareButton
                  title={app.name}
                  url={`${siteConfig.siteUrl}/${app.slug}`}
                />
              </div>
            </div>
          </div>

          {/* DISCO badge strip */}
          <div className="mt-10">
            <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)] mb-3">
              Supported providers
            </p>
            <div className="flex flex-wrap gap-2">
              {discos.map((d) => (
                <span
                  key={d}
                  className="font-mono-tight text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--navy-900)]"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mt-8">
            {app.description}
          </p>
        </Container>
      </Section>

      {/* ── 2. Screenshot gallery ──────────────────────────────── */}
      <Section tone="light" className="pb-16">
        <Container className="max-w-none lg:max-w-5xl">
          <ScreenshotStrip screenshots={app.screenshots} appName={app.name} />
        </Container>
      </Section>

      {/* ── 3. Features ────────────────────────────────────────── */}
      <Section tone="surface" bordered className="py-20">
        <Container className="max-w-5xl">
          <RevealOnScroll>
            <Eyebrow>features</Eyebrow>
            <h2 className="text-3xl font-bold text-[var(--navy-900)] mt-3 mb-12">
              Everything you need, nothing you don't
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feature, i) => (
              <RevealOnScroll key={feature.title} delay={i * 80}>
                <Card variant="raised">
                  <h3 className="text-lg font-bold text-[var(--navy-900)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. FAQ ─────────────────────────────────────────────── */}
      <Section tone="light" className="py-20">
        <Container className="max-w-3xl">
          <RevealOnScroll>
            <Eyebrow>faq</Eyebrow>
            <h2 className="text-2xl font-bold text-[var(--navy-900)] mt-3 mb-10">
              Frequently asked questions
            </h2>
          </RevealOnScroll>

          <div className="divide-y divide-[var(--border)]">
            {app.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-semibold text-[var(--navy-900)]">
                    {faq.question}
                  </span>
                  <span className="font-mono-tight text-[var(--text-tertiary)] group-open:rotate-45 transition-transform shrink-0 text-lg leading-none">
                    +
                  </span>
                </summary>
                <p className="text-[var(--text-secondary)] text-sm mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 5. Legal links ─────────────────────────────────────── */}
      <Section tone="surface" className="py-8">
        <Container className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)]">
              Legal
            </p>
            <Link
              href="/billcheck/privacy"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-600)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/billcheck/terms"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-600)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
