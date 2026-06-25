import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import PhoneFrame from "@/components/ui/PhoneFrame";
import ScreenshotStrip from "@/components/ui/ScreenshotStrip";
import SoftwareAppJsonLd from "@/components/seo/SoftwareAppJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { apps } from "@/lib/site-config";

const app = apps.find((a) => a.slug === "nust-one")!;

export const metadata: Metadata = {
  title: "NUST One — Student companion app for NUST",
  description: app.description,
  alternates: { canonical: "/nust-one" },
  openGraph: {
    title: "NUST One — Student companion app for NUST",
    description: app.description,
    url: "/nust-one",
  },
};

const stats = [
  { label: "rating", value: `${app.rating}★` },
  { label: "reviews", value: `${app.ratingCount}` },
  { label: "installs", value: app.installs },
  { label: "category", value: app.category },
];

export default function NustOne() {
  return (
    <div className="w-full">
      <SoftwareAppJsonLd app={app} />
      <FaqJsonLd items={app.faqs} />

      {/* 1. Hero */}
      <Section tone="dark" className="py-20 md:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow tone="on-dark" pulse>
              live on play store
            </Eyebrow>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mt-4 mb-5">
              {app.name}
            </h1>
            <p className="text-xl font-semibold text-white mb-4">
              {app.tagline}
            </p>
            <p className="text-lg text-[var(--text-on-dark-secondary)] mb-8 leading-relaxed max-w-md">
              {app.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <a
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[var(--navy-900)] px-6 py-3 rounded-[var(--radius-md)] hover:bg-[var(--surface)] transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5.25 2.25c-.214 0-.422.057-.605.164l11.442 11.443 3.666-3.666c.55-.55.55-1.444 0-1.994L7.545 2.61c-.65-.65-1.576-.563-2.295-.36zm-.436.969v17.562l8.781-8.781zm9.469 9.469L4.814 21.43c.184.108.391.17.611.17.72.193 1.645-.11 2.295-.76l12.208-12.21-3.664-3.664z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold leading-none">
                    Get it on
                  </p>
                  <p className="text-base font-bold leading-none mt-1">
                    Google Play
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono-tight text-xs text-[var(--text-on-dark-secondary)]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-white text-base font-semibold">{s.value}</p>
                  <p className="uppercase mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <PhoneFrame
            src={app.heroScreenshot}
            alt={`${app.name} app home screen`}
            priority
          />
        </Container>
      </Section>

      {/* 2. Screenshot gallery */}
      <Section tone="light" className="py-16">
        <Container>
          <Eyebrow>screenshots</Eyebrow>
          <h2 className="text-2xl font-bold text-[var(--navy-900)] mt-3 mb-8">
            See it in action
          </h2>
        </Container>
        <Container className="max-w-none lg:max-w-6xl">
          <ScreenshotStrip screenshots={app.screenshots} appName={app.name} />
        </Container>
      </Section>

      {/* 3. Features */}
      <Section tone="surface" bordered className="py-20">
        <Container>
          <Eyebrow>features</Eyebrow>
          <h2 className="text-3xl font-bold text-[var(--navy-900)] mt-3 mb-12">
            Engineered for campus efficiency
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {app.features.map((feature) => (
              <Card key={feature.title} variant="raised">
                <h3 className="text-lg font-bold text-[var(--navy-900)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. FAQ */}
      <Section tone="light" className="py-20">
        <Container className="max-w-3xl">
          <Eyebrow>faq</Eyebrow>
          <h2 className="text-2xl font-bold text-[var(--navy-900)] mt-3 mb-10">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-[var(--border)]">
            {app.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-[var(--navy-900)] pr-4">
                    {faq.question}
                  </span>
                  <span className="font-mono-tight text-[var(--text-tertiary)] group-open:rotate-45 transition-transform shrink-0">
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

    </div>
  );
}
