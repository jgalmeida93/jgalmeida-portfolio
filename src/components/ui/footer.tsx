"use client";

import { LocalTime } from "@/components/ui/local-time";

interface FooterProps {
  location: string;
  timezone: string;
}

export function Footer({ location, timezone }: FooterProps) {
  return (
    <footer className="relative w-full border-t border-[var(--border-subtle)] px-6 py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-xl italic text-[var(--foreground)]">
            Jonas G. Almeida
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-subtle)]">
            © {new Date().getFullYear()} — Designed &amp; built in Next.js
          </span>
        </div>

        <div className="flex flex-col items-start gap-1 md:items-end">
          <LocalTime timezone={timezone} label={`${location} ·`} />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-subtle)]">
            Last update — {new Date().toLocaleDateString("en-GB", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </footer>
  );
}
