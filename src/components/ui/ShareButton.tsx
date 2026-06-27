"use client";

import { useState } from "react";

export default function ShareButton({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled — no-op
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleShare}
      type="button"
      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy-900)] hover:text-[var(--accent-600)] transition-colors"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342a3 3 0 100 2.684m9.632 4.026a3 3 0 100-2.684m0-9.736a3 3 0 100-2.684m0 2.684l-9.632 5.026" />
      </svg>
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
