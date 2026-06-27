import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const legal = [{ href: "/privacy", label: "Privacy Policy" }];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border-on-dark)] bg-[var(--navy-950)] mt-auto">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-bold text-white mb-3">ZivXio</p>
            <p className="text-sm text-[var(--text-on-dark-secondary)] leading-relaxed max-w-xs">
              An independent software studio building useful, focused mobile apps.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono-tight text-xs uppercase tracking-wide text-[var(--text-on-dark-secondary)] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--text-on-dark-secondary)] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono-tight text-xs uppercase tracking-wide text-[var(--text-on-dark-secondary)] mb-4">
              Legal
            </p>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--text-on-dark-secondary)] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono-tight text-xs uppercase tracking-wide text-[var(--text-on-dark-secondary)] mb-4">
              Connect
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-[var(--text-on-dark-secondary)] hover:text-white transition-colors break-all"
            >
              {siteConfig.email}
            </a>
          </div>

        </div>

        <div className="border-t border-[var(--border-on-dark)] py-6 text-center sm:text-left">
          <p className="text-sm text-[var(--text-on-dark-secondary)]">
            © {currentYear} ZivXio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
