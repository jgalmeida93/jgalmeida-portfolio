"use client";

import { useApp } from "@/contexts/app-context";
import type { Locale } from "@/types/portfolio";

export function LocaleToggle() {
  const { locale, setLocale } = useApp();

  return (
    <div
      role="tablist"
      aria-label="Language"
      className="inline-flex items-center gap-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em]"
    >
      {(["en", "pt"] as Locale[]).map((l, i) => {
        const active = locale === l;
        return (
          <span key={l} className="inline-flex items-center gap-1">
            {i > 0 && <span className="text-[var(--ink-faint)]">/</span>}
            <button
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setLocale(l)}
              className={`px-1 py-1 transition-colors ${
                active
                  ? "text-[var(--accent)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              {l.toUpperCase()}
            </button>
          </span>
        );
      })}
    </div>
  );
}
