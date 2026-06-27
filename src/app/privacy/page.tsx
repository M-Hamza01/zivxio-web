import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ZivXio collects, uses, and protects data across its apps, including NUST One.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <Section tone="light" className="py-20">
      <Container className="max-w-3xl">
        <div className="border-b border-[var(--border)] pb-8 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy-900)] mb-3">
            Privacy Policy
          </h1>
          <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)]">
            Last updated: June 25, 2026
          </p>
        </div>

        <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong className="text-[var(--navy-900)]">ZivXio</strong>.
              We operate independent mobile utility applications, including
              our flagship student tool,{" "}
              <strong className="text-[var(--navy-900)]">NUST One</strong>.
              This Privacy Policy outlines how we handle data within our
              mobile applications and our official web presence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">
              2. Information Collection and Use
            </h2>
            <p className="mb-3">
              Our core development philosophy is privacy-first. We believe
              your data belongs to you.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[var(--navy-900)]">Account Credentials:</strong>{" "}
                For apps requiring integration with your institutional
                accounts (such as the NUST student portals), all
                authentication happens securely directly with the target
                servers. ZivXio does not collect, store, or transmit your
                passwords to any external infrastructure.
              </li>
              <li>
                <strong className="text-[var(--navy-900)]">Local Storage:</strong>{" "}
                Any settings, timetables, or customized data you create
                within NUST One are stored locally on your physical device
                and are never backed up to our servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">
              3. Third-Party Services
            </h2>
            <p>
              Our applications are distributed through the Google Play
              Store. While ZivXio does not track you, the Google Play Store
              utilizes underlying{" "}
              <strong className="text-[var(--navy-900)]">Google Play Services</strong>{" "}
              that may collect standard analytical information used to
              measure app stability and crash reporting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">
              4. Security
            </h2>
            <p>
              We prioritize the trust you place in using our utility
              applications. Because we do not store personal user data on
              external servers, the risk of data breaches is fundamentally
              mitigated. We encourage you to keep your mobile device secure
              and update your apps regularly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">
              5. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time to reflect
              changes in app functionality or legal requirements. Any
              modifications will be posted directly on this live URL, and
              the effective date will be adjusted accordingly.
            </p>
          </section>

          <section className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6">
            <h2 className="text-lg font-bold text-[var(--navy-900)] mb-2">
              6. Contact Us
            </h2>
            <p className="text-sm mb-4">
              If you have any questions or security concerns regarding
              ZivXio apps or NUST One, feel free to reach out to our support
              channel directly via email.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block text-sm font-semibold text-[var(--accent-600)] hover:text-[var(--accent-500)] transition-colors"
            >
              {siteConfig.email}
            </a>
          </section>
        </div>
      </Container>
    </Section>
  );
}
