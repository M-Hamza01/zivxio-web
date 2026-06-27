"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through a list of phrases with a type → pause → erase → next effect.
 * Respects prefers-reduced-motion by just showing the first phrase statically.
 */
export default function TypewriterText({
  phrases,
  className = "",
  typingSpeedMs = 55,
  erasingSpeedMs = 30,
  pauseMs = 1800,
}: {
  phrases: string[];
  className?: string;
  typingSpeedMs?: number;
  erasingSpeedMs?: number;
  pauseMs?: number;
}) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];

    if (!isErasing && text.length < currentPhrase.length) {
      const t = setTimeout(
        () => setText(currentPhrase.slice(0, text.length + 1)),
        typingSpeedMs
      );
      return () => clearTimeout(t);
    }

    if (!isErasing && text.length === currentPhrase.length) {
      const t = setTimeout(() => setIsErasing(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (isErasing && text.length > 0) {
      const t = setTimeout(
        () => setText(text.slice(0, -1)),
        erasingSpeedMs
      );
      return () => clearTimeout(t);
    }

    if (isErasing && text.length === 0) {
      setIsErasing(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [text, isErasing, phraseIndex, phrases, typingSpeedMs, erasingSpeedMs, pauseMs, reducedMotion]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle animate-pulse" />
    </span>
  );
}
