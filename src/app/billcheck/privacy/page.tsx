import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "BillCheck — Privacy Policy",
  description:
    "Privacy Policy for BillCheck by ZivXio. How the app handles your meter data, notifications, and advertising.",
  alternates: { canonical: "/billcheck/privacy" },
};

export default function BillCheckPrivacy() {
  return (
    <Section tone="light" className="py-20">
      <Container className="max-w-3xl">
        <div className="border-b border-[var(--border)] pb-8 mb-12">
          <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)] mb-2">
            BillCheck
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy-900)] mb-3">
            Privacy Policy
          </h1>
          <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)]">
            Last updated: 19 July 2026
          </p>
        </div>

        <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">1. The Short Version</h2>
            <p>
              BillCheck doesn't have a login, doesn't ask for your name or
              email, and doesn't run its own server to store or process your
              bill data. When you check a bill, your phone connects directly to
              your electricity provider's (DISCO's) own official website. Your
              meter nicknames, reference numbers, and cached bill details are
              stored locally on your device.
            </p>
            <p className="mt-3">
              The App does show ads to stay free, and those ad and analytics
              services (from Google) collect some technical data as described
              below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">2. Information We Do Not Collect</h2>
            <p>BillCheck does not require or ask you to provide:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Your name, email address, phone number, or CNIC</li>
              <li>A password or account of any kind</li>
              <li>Payment or banking information — the App does not process payments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">3. Information Stored on Your Device</h2>
            <p>To function, BillCheck stores the following locally on your phone:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>
                <strong className="text-[var(--navy-900)]">Meter details you add</strong> — the nickname you give each meter, the DISCO you selected, and the reference or account number from your paper bill.
              </li>
              <li>
                <strong className="text-[var(--navy-900)]">Cached bill information</strong> — the most recent bill details fetched from your DISCO's portal (units consumed, amount payable, due date, billing dates), for history and new-bill detection.
              </li>
              <li>
                <strong className="text-[var(--navy-900)]">Notification history</strong> — a record of notifications the App has sent you. Automatically deleted after 30 days.
              </li>
              <li>
                <strong className="text-[var(--navy-900)]">Your notification preferences</strong> — whether you've enabled alerts and your chosen reminder lead time.
              </li>
            </ul>
            <p className="mt-3">
              None of this is transmitted to ZivXio or stored on any server we
              operate. If you uninstall the App, this data is removed from your
              device along with it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">4. How Bills Are Fetched</h2>
            <p>
              When you check a bill, the App sends your reference/account number
              directly to your selected DISCO's own official bill portal — in the
              same way your browser would if you visited that site yourself. This
              request goes directly from your device to the DISCO's website; it
              does not pass through, or get logged by, any server operated by
              ZivXio.
            </p>
            <p className="mt-3">
              BillCheck is not affiliated with, endorsed by, or operated by
              LESCO, IESCO, PESCO, FESCO, MEPCO, GEPCO, HESCO, SEPCO, QESCO,
              TESCO, K-Electric, or any government body.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">5. Notifications</h2>
            <p>
              Notifications are generated on your device from bill data already
              cached there — no separate server sends these notifications, and no
              notification content is sent anywhere else. You can turn either
              notification type off at any time from the App's Notification
              Settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">6. Advertising</h2>
            <p>
              BillCheck is free to use and is supported by ads served through{" "}
              <strong className="text-[var(--navy-900)]">Google AdMob</strong>.
              To show relevant ads, Google AdMob may collect your device's
              advertising identifier, general device and app information,
              approximate location, and ad interaction data — under Google's own
              privacy policy. You can reset or limit your advertising identifier
              through Settings → Google → Ads on Android.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">7. Remote Configuration</h2>
            <p>
              BillCheck uses{" "}
              <strong className="text-[var(--navy-900)]">Firebase Remote Config</strong>{" "}
              to control which features and ad placements are active without
              needing an app update. This check does not include your bill data
              or any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">8. Permissions the App Requests</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-[var(--navy-900)]">Internet access</strong> — required to fetch your bill from your DISCO's portal.
              </li>
              <li>
                <strong className="text-[var(--navy-900)]">Notifications</strong> (Android 13+) — required only if you enable alerts; you can decline and still use the rest of the App normally.
              </li>
            </ul>
            <p className="mt-3">
              BillCheck does not request access to your contacts, camera,
              microphone, location, SMS, or files beyond what's needed to save a
              downloaded bill PDF where you choose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">9. Data Retention &amp; Your Choices</h2>
            <p>
              You can delete any saved meter at any time from within the App,
              which removes its cached bill data. Notification history is
              automatically deleted after 30 days and can be cleared manually.
              Uninstalling the App removes all locally stored data. Since
              BillCheck doesn't hold your data on any server, there's no separate
              "delete my account" request needed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">10. Children's Privacy</h2>
            <p>
              BillCheck is intended for general use by adults managing utility
              bills and is not directed at children. We do not knowingly collect
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--navy-900)] mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We'll update
              the "Last updated" date when we do. Continuing to use BillCheck
              after a change means you accept the updated policy.
            </p>
          </section>

          <section className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6">
            <h2 className="text-lg font-bold text-[var(--navy-900)] mb-2">12. Contact Us</h2>
            <p className="text-sm mb-3">
              Questions or concerns about this Privacy Policy can be sent to:
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
