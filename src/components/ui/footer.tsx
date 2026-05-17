"use client";

import { useApp } from "@/contexts/app-context";
import { LocalTime } from "@/components/ui/local-time";

interface FooterProps {
  location: string;
  timezone: string;
}

export function Footer({ location, timezone }: FooterProps) {
  const { t } = useApp();
  const year = new Date().getFullYear();
  const updated = new Date().toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

  return (
    <footer className="relative w-full border-t-4 border-double border-[var(--rule)] bg-[var(--bg-elev)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-10 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-3xl font-extrabold uppercase tracking-[0.02em] text-[var(--ink)]">
              Colophon
            </div>
            <p className="mt-3 max-w-sm font-serif text-base italic leading-snug text-[var(--ink-muted)]">
              {t.footer.colophon}. {t.footer.stack}.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="mono text-[var(--ink-muted)]">
              {t.footer.lastUpdate}
            </div>
            <div className="mt-1 font-display text-xl font-bold uppercase text-[var(--ink)]">
              {updated}
            </div>
            <div className="mt-3 mono text-[var(--ink-muted)]">
              {location} —{" "}
              <LocalTime
                timezone={timezone}
                className="text-[var(--ink)]"
              />
            </div>
          </div>

          <div className="md:col-span-3 md:text-right">
            <div className="mono text-[var(--ink-muted)]">№</div>
            <div className="mt-1 font-display text-2xl font-extrabold uppercase tracking-[0.04em] text-[var(--primary)]">
              26 / {year}
            </div>
            <div className="mt-3 mono text-[var(--ink-faint)]">
              © {year} Jonas G. Almeida
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 border-t border-dashed border-[var(--rule)] pt-6">
          <span className="inline-block h-3 w-3 rotate-45 bg-[var(--primary)]" />
          <span className="mono text-[var(--ink-muted)]">
            Made in Brazil — with espresso, headphones &amp; too many tabs.
          </span>
        </div>
      </div>
    </footer>
  );
}
