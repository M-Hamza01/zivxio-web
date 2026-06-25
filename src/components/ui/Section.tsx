import { ReactNode } from "react";

type Tone = "light" | "surface" | "dark";

const toneClasses: Record<Tone, string> = {
  light: "bg-white",
  surface: "bg-[var(--surface)]",
  dark: "bg-[var(--navy-950)] text-[var(--text-on-dark)]",
};

export default function Section({
  children,
  tone = "light",
  bordered = false,
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  bordered?: boolean;
  id?: string;
  className?: string;
}) {
  const borderClass =
    tone === "dark"
      ? "border-[var(--border-on-dark)]"
      : "border-[var(--border)]";

  return (
    <section
      id={id}
      className={`w-full scroll-mt-20 ${toneClasses[tone]} ${
        bordered ? `border-y ${borderClass}` : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
