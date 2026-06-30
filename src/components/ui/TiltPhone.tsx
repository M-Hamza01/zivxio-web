"use client";

import { useRef, useCallback } from "react";
import PhoneFrame from "@/components/ui/PhoneFrame";

/**
 * Wraps PhoneFrame with a cursor-aware 3D perspective tilt on desktop.
 * On touch / reduced-motion, renders as a static frame — no JS runs.
 */
export default function TiltPhone({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      // Normalise cursor to -1 … 1 relative to card centre
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      // Max tilt: ±10deg horizontal, ±8deg vertical
      const rotateY = x * 10;
      const rotateX = -y * 8;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }, []);

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.08s linear",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <PhoneFrame src={src} alt={alt} priority={priority} />
    </div>
  );
}
