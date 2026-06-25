import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import PhoneFrame from "@/components/ui/PhoneFrame";
import { apps } from "@/lib/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const liveApps = apps.filter((a) => a.status === "live");

  return (
    <div className="w-full">

      {/* 1. Hero — the one bold, dark moment on the page */}
      <Section tone="dark" className="py-20 md:py-28 overflow-hidden">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow tone="on-dark">independent app studio</Eyebrow>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-[1.05]">
              Useful apps,<br />
              built with intent.
            </h1>
            <p className="max-w-md text-[var(--text-on-dark-secondary)] text-lg mb-10">
              ZivXio designs and builds focused mobile tools — starting with
              the everyday problems students and professionals run into most.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#apps" variant="primary" size="lg">
                Explore apps
              </Button>
              <Button href="/nust-one" variant="secondary" size="lg" className="bg-transparent !text-white !border-[var(--border-on-dark)] hover:!border-white">
                View NUST One
              </Button>
            </div>
          </div>

          {/* Real screenshot — place file at /public + path set in site-config.ts */}
          <PhoneFrame
            src={liveApps[0]?.heroScreenshot ?? "/screenshots/nust-one-1.png"}
            alt="NUST One app home screen showing today's schedule and quick access portals"
            priority
          />
        </Container>
      </Section>

      {/* 2. Featured apps */}
      <Section id="apps" tone="surface" className="py-20 md:py-28">
        <Container>
          <div className="mb-12">
            <Eyebrow>featured apps</Eyebrow>
            <h2 className="text-3xl font-bold text-[var(--navy-900)] mt-3">
              What we've built
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveApps.map((app) => (
              <Card key={app.slug} variant="raised" className="group flex flex-col">
                <Eyebrow pulse tone="accent">live on play store</Eyebrow>
                <h3 className="text-xl font-bold text-[var(--navy-900)] mt-4 mb-2 group-hover:text-[var(--accent-600)] transition-colors">
                  {app.name}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow">
                  {app.tagline}
                </p>
                <div className="font-mono-tight text-xs text-[var(--text-tertiary)] mb-6">
                  {app.rating}★ · {app.ratingCount} reviews · {app.installs} installs
                </div>
                <Button href={`/${app.slug}`} variant="dark" className="self-start">
                  View details
                </Button>
              </Card>
            ))}

            <Card variant="dashed" className="flex flex-col items-center justify-center text-center min-h-[260px]">
              <p className="font-semibold text-[var(--navy-900)] mb-2">
                More in development
              </p>
              <p className="text-[var(--text-tertiary)] text-sm">
                We're actively building new tools. Stay tuned.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. Vision */}
      <Section id="about" tone="light" className="py-20 md:py-28">
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
