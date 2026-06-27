import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import ServiceCard from "@/components/ServiceCard";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hire ZivXio for mobile app development, web development, and UI/UX design.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <div className="w-full">
      <Section tone="dark" className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow tone="on-dark">work with us</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
            Services
          </h1>
          <p className="text-lg text-[var(--text-on-dark-secondary)] leading-relaxed">
            Beyond our own apps, we take on select freelance and client
            projects — from a single app build to a full product launch.
          </p>
        </Container>
      </Section>

      <Section tone="surface" className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="py-16 md:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--navy-900)] mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
            Tell us what you're building — we'll get back to you within
            24–48 hours to talk scope and timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get in touch
            </Button>
            {siteConfig.fiverrUrl && (
              <Button href={siteConfig.fiverrUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                View on Fiverr
              </Button>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
