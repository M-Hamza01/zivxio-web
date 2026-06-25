"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/#apps", label: "Apps" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-[var(--navy-900)]"
          >
            ZivXio
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--navy-900)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/nust-one" size="md">
              Get NUST One
            </Button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-[var(--radius-sm)] p-2 text-[var(--text-secondary)] hover:bg-[var(--surface)]"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden border-t border-[var(--border)] bg-white`}>
        <div className="space-y-1 px-6 pb-3 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-[var(--radius-sm)] px-3 py-2 text-base font-medium text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--navy-900)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/nust-one"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded-[var(--radius-sm)] px-3 py-2 text-base font-medium text-[var(--accent-600)]"
          >
            Get NUST One
          </Link>
        </div>
      </div>
    </nav>
  );
}
