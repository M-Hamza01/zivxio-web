import { ReactNode } from "react";

/**
 * Small uppercase mono label used for section tags and status indicators.
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
      className={`font-mono-tight inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide ${toneClasses[tone]}`}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent-500)] opacity-75 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-500)]" />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
