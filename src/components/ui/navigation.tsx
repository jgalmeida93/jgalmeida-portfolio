"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/contexts/app-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleToggle } from "@/components/ui/locale-toggle";
import { Logo } from "@/components/ui/logo";

export function Navigation() {
  const { t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--rule)] bg-[var(--bg)]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Logo />


        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-muted)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--bg)] transition-all hover:bg-[var(--primary)] hover:text-[var(--paper)] md:inline-flex"
          >
            {t.nav.cta}
            <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--rule)] text-[var(--ink)] lg:hidden"
          >
            <span className="flex h-3 w-4 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-full bg-current transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--rule)] bg-[var(--bg)] lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-4 md:px-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-[var(--rule-soft)] py-4 font-display text-2xl font-extrabold uppercase tracking-[0.04em] text-[var(--ink)] last:border-none hover:text-[var(--primary)]"
              >
                {item.label}
                <span aria-hidden className="font-mono text-xs">
                  →
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--paper)]"
            >
              {t.nav.cta} ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
