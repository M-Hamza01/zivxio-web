import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import PhoneFrame from "@/components/ui/PhoneFrame";
import TypewriterText from "@/components/ui/TypewriterText";
import AppCard from "@/components/AppCard";
import { apps, services } from "@/lib/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const heroApp = apps.find((a) => a.status === "live") ?? apps[0];

  return (
    <div className="w-full">

      {/* 1. Hero — the one bold, dark moment on the page */}
      <Section tone="dark" className="py-14 md:py-16 overflow-hidden">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow tone="on-dark">independent app studio</Eyebrow>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4 leading-[1.15]">
              Building apps<br />
              for{" "}
              <span className="text-[var(--accent-500)] inline-block min-h-[1.2em]">
                <TypewriterText
                  phrases={["students.", "everyday life.", "real problems.", "you."]}
                />
              </span>
            </h1>
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
          </div>

          {/* Real screenshot — place file at the path set in site-config.ts */}
          <PhoneFrame
            src={heroApp.heroScreenshot}
            alt={`${heroApp.name} app home screen`}
            priority
          />
        </Container>
      </Section>

      {/* 2. Featured apps */}
      <Section id="apps" tone="surface" className="py-16 md:py-20">
        <Container>
          <div className="mb-12">
            <Eyebrow>featured apps</Eyebrow>
            <h2 className="text-3xl font-bold text-[var(--navy-900)] mt-3">
              What we've built
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Services teaser */}
      <Section tone="light" className="py-16 md:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((service) => (
              <div key={service.slug} className="rounded-[var(--radius-lg)] border border-[var(--border)] p-5">
                <p className="font-semibold text-[var(--navy-900)] text-sm mb-1">
                  {service.title}
                </p>
                <p className="text-[var(--text-tertiary)] text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Vision */}
      <Section id="about" tone="surface" className="py-16 md:py-20">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
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

          <Card variant="flat">
            <h3 className="font-semibold text-[var(--navy-900)] mb-4">
              Get in touch
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              Questions, feedback, or a bug to report? We read every email
              ourselves.
            </p>
            <Button href="/blog" variant="secondary">
              Read the blog
            </Button>
          </Card>
        </Container>
      </Section>

    </div>
  );
}
