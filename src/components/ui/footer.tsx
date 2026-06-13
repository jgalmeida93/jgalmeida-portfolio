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
    <footer className="relative w-full border-t border-[var(--rule)] bg-[var(--bg-elev)]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="font-display text-3xl font-light text-[var(--ink)]">
              Jonas&nbsp;Almeida<span className="text-[var(--accent)]">.</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
              {t.footer.signature}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-[10px] text-[var(--ink-faint)]">
              {t.footer.lastUpdate}
            </div>
            <div className="mt-2 font-display text-lg text-[var(--ink-soft)]">
              {updated}
            </div>
            <div className="mt-1 eyebrow text-[10px] text-[var(--ink-muted)]">
              {location} ·{" "}
              <LocalTime timezone={timezone} className="text-[var(--ink-soft)]" />
            </div>
          </div>

          <div className="md:col-span-3 md:text-right">
            <a
              href="#"
              className="group inline-flex items-center gap-2 eyebrow text-[10px] text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              <span className="link-underline">Back to top</span>
              <span className="transition-transform group-hover:-translate-y-0.5">
                &#8593;
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--rule)] pt-6 md:flex-row md:items-center md:justify-between">
          <span className="eyebrow text-[10px] text-[var(--ink-faint)]">
            &copy; {year} Jonas G. Almeida
          </span>
          <span className="eyebrow text-[10px] text-[var(--ink-faint)]">
            {t.footer.builtWith}
          </span>
        </div>
      </div>
    </footer>
  );
}
