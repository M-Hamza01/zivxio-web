"use client";

import { useEffect, useRef, ReactNode } from "react";

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * Uses transform/opacity only — no layout shift, no jank.
 *
 * @param delay  Extra delay in ms on top of the base transition (use for stagger)
 * @param y      How far to translate from (px). Default 24.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
