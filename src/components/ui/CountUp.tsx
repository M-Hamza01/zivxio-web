"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `end` when it scrolls into view.
 * Handles suffixes like "+" or "★" cleanly.
 */
export default function CountUp({
  end,
  suffix = "",
  decimals = 0,
  durationMs = 1400,
  className = "",
}: {
  end: number;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(parseFloat((eased * end).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, durationMs, decimals]);

  return (
    <span ref={ref} className={className}>
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
}
