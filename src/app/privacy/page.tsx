import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ZivXio collects, uses, and protects data across its apps, including NUST One.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-white py-16 md:py-24 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: June 25, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="prose prose-blue max-w-none text-gray-600 space-y-8 text-sm md:text-base leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Welcome to <strong>ZivXio</strong>. We operate independent mobile utility applications, including our flagship student tool, <strong>NUST One</strong>. This Privacy Policy outlines how we handle data within our mobile applications and our official web presence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information Collection and Use</h2>
            <p className="mb-3">
              Our core development philosophy is privacy-first. We believe your data belongs to you. 
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Account Credentials:</strong> For apps requiring integration with your institutional accounts (such as the NUST student portals), all authentication happens securely directly with the target servers. ZivXio does not collect, store, or transmit your passwords to any external infrastructure.
              </li>
              <li>
                <strong>Local Storage:</strong> Any settings, timetables, or customized data you create within NUST One are stored locally on your physical device and are never backed up to our servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Third-Party Services</h2>
            <p>
              Our applications are distributed through the Google Play Store. While ZivXio does not track you, the Google Play Store utilizes underlying <strong>Google Play Services</strong> that may collect standard analytical information used to measure app stability and crash reporting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Security</h2>
            <p>
              We prioritize the trust you place in using our utility applications. Because we do not store personal user data on external servers, the risk of data breaches is fundamentally mitigated. We encourage you to keep your mobile device secure and update your apps regularly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time to reflect changes in app functionality or legal requirements. Any modifications will be posted directly on this live URL, and the effective date will be adjusted accordingly.
            </p>
          </section>

          <section className="bg-gray-50 border border-gray-100 rounded-xl p-6 mt-12">
            <h2 className="text-lg font-bold text-gray-900 mb-2">6. Contact Us</h2>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions or security concerns regarding ZivXio apps or NUST One, feel free to reach out to our support channel directly via email.
            </p>
            <a 
              href="mailto:zivxio.app@gmail.com" 
              className="inline-block text-sm font-semibold text-[#0052ff] hover:text-blue-700 transition-colors"
            >
              zivxio.app@gmail.com
            </a>
          </section>

        </div>

      </div>
    </div>
  );
}