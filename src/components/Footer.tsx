import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border-on-dark)] bg-[var(--navy-950)] py-10 mt-auto">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">

          <div className="text-sm text-[var(--text-on-dark-secondary)]">
            © {currentYear} <span className="font-semibold text-white">ZivXio</span>. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--text-on-dark-secondary)]">
            <Link href="/#apps" className="hover:text-white transition-colors">Apps</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">Support</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
