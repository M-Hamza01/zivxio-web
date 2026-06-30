import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import TiltPhone from "@/components/ui/TiltPhone";
import TypewriterText from "@/components/ui/TypewriterText";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CountUp from "@/components/ui/CountUp";
import AppCard from "@/components/AppCard";
import ServiceCard from "@/components/ServiceCard";
import { apps, services } from "@/lib/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const heroApp = apps.find((a) => a.status === "live") ?? apps[0];

  return (
    <div className="w-full">

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <Section tone="dark" className="relative py-14 md:py-20 overflow-hidden">
        {/* Dot-grid texture */}
        <div className="hero-texture absolute inset-0 pointer-events-none" />

        <Container className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div>
            <RevealOnScroll delay={0}>
              <Eyebrow tone="on-dark">independent app studio</Eyebrow>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4 leading-[1.15]">
                Building apps<br />
                for{" "}
                <span className="text-[var(--accent-500)] inline-block min-h-[1.2em]">
                  <TypewriterText
                    phrases={["students.", "everyday life.", "real problems.", "you."]}
                  />
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <p className="max-w-md text-[var(--text-on-dark-secondary)] text-base md:text-lg mb-8">
                ZivXio designs and builds focused mobile tools — starting with
                the everyday problems students and professionals run into most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/apps" variant="primary" size="lg">
                  Explore apps
                </Button>
                <Button href="/nust-one" variant="outline-dark" size="lg">
                  View NUST One
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          <div className="hidden md:flex justify-center">
            <TiltPhone
              src={heroApp.heroScreenshot}
              alt={`${heroApp.name} app home screen`}
              priority
            />
          </div>
        </Container>
      </Section>

      {/* ── 2. Stats strip ──────────────────────────────────────── */}
      <Section tone="surface" bordered className="py-10">
        <Container>
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { end: 5, decimals: 1, suffix: "★", label: "Play Store rating" },
              { end: 12, suffix: "+", label: "User reviews" },
              { end: 100, suffix: "+", label: "Downloads" },
            ].map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i * 80}>
                <p className="text-3xl font-bold text-[var(--navy-900)]">
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                </p>
                <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)] mt-1">
                  {stat.label}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 3. Featured apps ────────────────────────────────────── */}
      <Section id="apps" tone="light" className="py-16 md:py-20">
        <Container>
          <RevealOnScroll>
            <div className="mb-12">
              <Eyebrow>featured apps</Eyebrow>
              <h2 className="text-3xl font-bold text-[var(--navy-900)] mt-3">
                What we've built
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, i) => (
              <RevealOnScroll key={app.slug} delay={i * 100}>
                <AppCard app={app} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. Services teaser ──────────────────────────────────── */}
      <Section tone="surface" className="py-16 md:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div>
              <Eyebrow>services</Eyebrow>
              <h2 className="text-3xl font-bold text-[var(--navy-900)] mt-3 mb-5">
                Need an app or website built?
              </h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                Beyond our own products, we take on select client work —
                mobile apps, landing pages, and UI/UX design. Same care and
                attention to detail as everything we ship ourselves.
              </p>
              <Button href="/services" variant="dark" size="lg">
                View services
              </Button>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <RevealOnScroll key={service.slug} delay={i * 100}>
                <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-5 card-lift">
                  <p className="font-semibold text-[var(--navy-900)] text-sm mb-1">
                    {service.title}
                  </p>
                  <p className="text-[var(--text-tertiary)] text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 5. Vision / About ───────────────────────────────────── */}
      <Section id="about" tone="light" className="py-16 md:py-20">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <RevealOnScroll>
            <div>
              <Eyebrow>about zivxio</Eyebrow>
              <h2 className="text-3xl font-bold text-[var(--navy-900)] mt-3 mb-6">
                Software that respects your time
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
                ZivXio is an independent studio building utility apps that do
                one job well. We start from real, specific problems — like the
                fragmented student digital experience — and design backward
                from there.
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Every app is built, maintained, and supported directly by us.
                No bloat, no dark patterns — just tools you'll actually keep
                using.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <Card variant="flat">
              <h3 className="font-semibold text-[var(--navy-900)] mb-4">
                Get in touch
              </h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Questions, feedback, or a bug to report? We read every email
                ourselves.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" variant="dark">
                  Contact us
                </Button>
                <Button href="/blog" variant="secondary">
                  Read the blog
                </Button>
              </div>
            </Card>
          </RevealOnScroll>
        </Container>
      </Section>

    </div>
  );
}
