"use client";

import { useApp } from "@/contexts/app-context";

export function LocaleToggle() {
  const { locale, setLocale } = useApp();

  return (
    <div
      role="tablist"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-[var(--rule)] bg-[var(--bg-elev)] p-0.5 font-mono text-[10px] uppercase tracking-[0.18em]"
    >
      {(["en", "pt"] as const).map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            role="tab"
            aria-selected={active}
            onClick={() => setLocale(l)}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              active
                ? "bg-[var(--ink)] text-[var(--bg)]"
                : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
            }`}
          >
            {l === "en" ? "EN" : "PT"}
          </button>
        );
      })}
    </div>
  );
}
