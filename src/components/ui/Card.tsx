import { ReactNode } from "react";

type Variant = "raised" | "flat" | "dashed";

const variants: Record<Variant, string> = {
  raised:
    "bg-white border border-[var(--border)] hover:border-[var(--navy-900)]/20 transition-colors",
  flat: "bg-[var(--surface)]",
  dashed: "bg-transparent border border-dashed border-[var(--border)]",
};

export default function Card({
  children,
  variant = "raised",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius-lg)] p-8 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
