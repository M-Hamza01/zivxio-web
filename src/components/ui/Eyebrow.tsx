import { ReactNode } from "react";

/**
 * The site's signature label element — brackets instead of pills/numbered
 * badges, reinforcing the dev-brand identity. Used for section eyebrows,
 * status labels, and category tags.
 */
export default function Eyebrow({
  children,
  tone = "accent",
  pulse = false,
}: {
  children: ReactNode;
  tone?: "accent" | "neutral" | "on-dark";
  pulse?: boolean;
}) {
  const toneClasses = {
    accent: "text-[var(--accent-600)]",
    neutral: "text-[var(--text-secondary)]",
    "on-dark": "text-[var(--text-on-dark-secondary)]",
  };

  return (
    <span
      className={`font-mono-tight inline-flex items-center gap-2 text-xs font-medium uppercase ${toneClasses[tone]}`}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent-500)] opacity-75 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-500)]" />
        </span>
      )}
      <span>
        [&nbsp;{children}&nbsp;]
      </span>
    </span>
  );
}
