import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "BillCheck — Terms of Service",
  description:
    "Terms of Service for BillCheck by ZivXio. Understand your rights and responsibilities when using the app.",
  alternates: { canonical: "/billcheck/terms" },
};

export default function BillCheckTerms() {
  return (
    <Section tone="light" className="py-20">
      <Container className="max-w-3xl">
        <div className="border-b border-[var(--border)] pb-8 mb-12">
          <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)] mb-2">
            BillCheck
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy-900)] mb-3">
            Terms of Service
          </h1>
          <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)]">
            Last updated: 19 July 2026
          </p>
        </div>

        <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">1. What BillCheck Does</h2>
            <p>
              BillCheck is a convenience tool that lets you check, view, and
              download electricity bills from Pakistani electricity distribution
              companies (DISCOs) — including LESCO, IESCO, PESCO, FESCO, MEPCO,
              GEPCO, HESCO, SEPCO, QESCO, TESCO, and K-Electric — in one place,
              using the reference or account number printed on your paper bill.
            </p>
            <p className="mt-3 font-medium text-[var(--navy-900)]">
              BillCheck does not process payments, hold funds, or act as an
              intermediary for bill payment. You remain responsible for paying
              your bills through your bank, your DISCO's own channels, or any
              other method you normally use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">2. No Affiliation</h2>
            <p>
              BillCheck is an independent, third-party application. It is{" "}
              <strong className="text-[var(--navy-900)]">
                not affiliated with, endorsed by, sponsored by, or operated by
              </strong>{" "}
              LESCO, IESCO, PESCO, FESCO, MEPCO, GEPCO, HESCO, SEPCO, QESCO,
              TESCO, K-Electric, PITC, WAPDA, or any Pakistani government body
              or agency.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">3. Accuracy of Information</h2>
            <p>
              BillCheck displays the same bill information available on your
              DISCO's own official portal at the moment you check it. Bill data
              originates entirely from your DISCO's own systems — we're not
              responsible for errors, delays, or inaccuracies in the underlying
              data. A DISCO's portal may occasionally be slow, unreachable, or
              temporarily show outdated information — this is outside our control.
            </p>
            <p className="mt-3 font-medium text-[var(--navy-900)]">
              Always treat your DISCO's official bill (paper or portal) as the
              authoritative source, especially before making a payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">4. Your Responsibilities</h2>
            <p>When using BillCheck, you agree to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Only add meters and reference/account numbers you're authorised to check</li>
              <li>Use the App for personal and lawful purposes</li>
              <li>Not attempt to reverse-engineer, scrape, or overload the App or the DISCO portals it connects to</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">5. Notifications</h2>
            <p>
              Notifications are provided as a convenience and best-effort
              reminder.{" "}
              <strong className="text-[var(--navy-900)]">
                BillCheck is not a substitute for checking your actual bill and
                due date directly
              </strong>
              , and we're not liable for any late fee, penalty, or disconnection
              resulting from a missed, delayed, or inaccurate notification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">6. Advertising</h2>
            <p>
              BillCheck is free to use and supported by advertising via Google
              AdMob. By using the App, you agree to the display of ads as part
              of the App's normal operation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">7. Intellectual Property</h2>
            <p>
              The BillCheck app, its design, and its original content are owned
              by ZivXio. You're granted a limited, personal, non-exclusive,
              non-transferable licence to use the App on your own device for its
              intended purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">8. Availability</h2>
            <p>
              We aim to keep BillCheck working reliably, but we don't guarantee
              uninterrupted availability. Since the App depends on third-party
              DISCO websites we don't control, features may be temporarily
              affected by changes or outages on those external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">9. Disclaimer of Warranties</h2>
            <p>
              BillCheck is provided{" "}
              <strong className="text-[var(--navy-900)]">
                "as is" and "as available,"
              </strong>{" "}
              without warranties of any kind, including accuracy, reliability, or
              fitness for a particular purpose. We don't guarantee that the App
              will be error-free or that bill data will always be complete or
              current.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ZivXio shall not be liable
              for any indirect, incidental, or consequential damages — including
              late fees, penalties, service disconnection, or financial loss —
              arising from your use of, or inability to use, BillCheck.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">11. Termination</h2>
            <p>
              You may stop using BillCheck at any time by uninstalling it. We
              may suspend or discontinue the App at our discretion, including in
              response to misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We'll update the
              "Last updated" date when we do. Continued use of BillCheck after
              changes take effect means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Pakistan, without regard
              to conflict-of-law principles.
            </p>
          </section>

          <section className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6">
            <h2 className="text-lg font-bold text-[var(--navy-900)] mb-2">14. Contact Us</h2>
            <p className="text-sm mb-3">
              Questions about these Terms can be sent to:
            </p>
            <a
              href="mailto:zivxio.app@gmail.com"
              className="text-sm font-semibold text-[var(--accent-600)] hover:text-[var(--accent-500)] transition-colors"
            >
              zivxio.app@gmail.com
            </a>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)]">
          <Link
            href="/billcheck"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-600)]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to BillCheck
          </Link>
        </div>
      </Container>
    </Section>
  );
}
