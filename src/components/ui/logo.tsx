"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "full" | "mark";
}

/**
 * Typographic wordmark in the display face with the brand's purple period —
 * the same motif as the hero ("Almeida.") and footer. Collapses to a "JG."
 * monogram on small screens. Theme-aware.
 */
export function Logo({ variant = "full" }: LogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline leading-none text-[var(--ink)] transition-colors duration-300 hover:text-[var(--accent)]"
      aria-label="Jonas Almeida — home"
    >
      {variant === "full" && (
        <span className="hidden font-display text-[19px] font-semibold tracking-[-0.01em] sm:inline">
          Jonas&nbsp;Almeida<span className="text-[var(--accent)]">.</span>
        </span>
      )}
      <span
        className={`font-display text-[21px] font-semibold tracking-[-0.02em] ${
          variant === "full" ? "sm:hidden" : ""
        }`}
      >
        JG<span className="text-[var(--accent)]">.</span>
      </span>
    </Link>
  );
}
