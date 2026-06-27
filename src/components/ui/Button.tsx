import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "outline-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-sm)] transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent-500)] text-white hover:bg-[var(--accent-600)]",
  secondary:
    "bg-white text-[var(--navy-900)] border border-[var(--border)] hover:border-[var(--navy-900)]",
  ghost:
    "bg-transparent text-[var(--navy-900)] hover:bg-[var(--surface)]",
  dark:
    "bg-[var(--navy-900)] text-white hover:bg-[var(--navy-700)]",
  "outline-dark":
    "bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  onClick,
  type = "button",
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
