"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "full" | "mark";
}

/**
 * Refined serif monogram inside a hairline square, paired with a quiet
 * wordmark. No stamp, no sticker — a small mark that reads as a maker's seal.
 */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex items-center justify-center border border-[var(--rule-strong)] transition-colors duration-300 group-hover:border-[var(--accent)]"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="font-display text-[19px] font-medium leading-none text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent)]">
        JG
      </span>
    </span>
  );
}

export function Logo({ variant = "full" }: LogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="Jonas G. Almeida — home"
    >
      <LogoMark />
      {variant === "full" && (
        <span className="hidden flex-col leading-none sm:flex">
          <span className="font-display text-[17px] font-medium tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
            Jonas&nbsp;Almeida
          </span>
          <span className="eyebrow mt-1.5 text-[9px] tracking-[0.3em] text-[var(--ink-faint)]">
            Senior&nbsp;Engineer
          </span>
        </span>
      )}
    </Link>
  );
}
