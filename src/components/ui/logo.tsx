"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "full" | "mark";
}

/**
 * Workshop-seal mark: rotated rounded-square stamp with a heavy "JG"
 * monogram, hard-offset shadow, mustard sticker dot, and a tiny
 * double-rule underline that reads as letterpress impression.
 */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <span
      className="group/mark relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Hard offset shadow (separate element so it stays put on hover rotate) */}
      <span
        className="absolute inset-0 -z-10 translate-x-[3px] translate-y-[3px] rounded-md bg-[var(--ink)]"
        style={{ transform: "translate(3px, 3px) rotate(-2deg)" }}
      />
      {/* The stamp body */}
      <span
        className="relative flex h-full w-full flex-col items-center justify-center rounded-md border-2 border-[var(--ink)] bg-[var(--primary)] text-[var(--paper)] transition-transform duration-300 group-hover/mark:rotate-[4deg]"
        style={{ transform: "rotate(-2deg)" }}
      >
        <span className="font-display text-[18px] font-black uppercase leading-none tracking-[-0.04em]">
          JG
        </span>
        <span className="mt-0.5 h-[1px] w-3 bg-current opacity-70" />
        <span className="mt-0.5 font-mono text-[6px] uppercase tracking-[0.18em] opacity-80">
          ’18
        </span>
      </span>
      {/* Mustard sticker dot with star */}
      <span
        className="absolute -right-1.5 -top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-[var(--ink)] bg-[var(--accent)] text-[10px] leading-none text-[#1a130e]"
        style={{ transform: "rotate(8deg)" }}
      >
        ★
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
        <span className="hidden flex-col leading-none md:flex">
          <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.06em] text-[var(--ink)] transition-colors group-hover:text-[var(--primary)]">
            Jonas&nbsp;G.&nbsp;Almeida
          </span>
          <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
            <span className="inline-block h-px w-3 bg-[var(--primary)]" />
            Independent · Maringá
            <span className="inline-block h-px w-3 bg-[var(--primary)]" />
          </span>
        </span>
      )}
    </Link>
  );
}
