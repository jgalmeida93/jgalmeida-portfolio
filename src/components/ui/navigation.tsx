"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/contexts/app-context";
import { localeHref } from "@/lib/site";
import { SECTION_SLUGS } from "@/lib/sections";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleToggle } from "@/components/ui/locale-toggle";
import { Logo } from "@/components/ui/logo";

export function Navigation() {
  const { t, locale } = useApp();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => window.dispatchEvent(new Event("cmdk:open"));

  const items = SECTION_SLUGS.map((slug) => ({
    slug,
    label: t.nav[slug],
    href: localeHref(locale, slug),
  }));

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--rule)] bg-[var(--bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className={`link-underline eyebrow text-[10px] transition-colors ${
                isActive(item.href)
                  ? "text-[var(--accent)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open command menu"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--rule)] px-2.5 py-1.5 text-[var(--ink-muted)] transition-colors hover:border-[var(--rule-strong)] hover:text-[var(--ink)]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" strokeLinecap="round" />
            </svg>
            <kbd className="hidden font-sans text-[10px] font-medium tracking-[0.1em] sm:inline">
              &#8984;K
            </kbd>
          </button>

          <span className="hidden h-4 w-px bg-[var(--rule)] sm:block" />
          <LocaleToggle />
          <ThemeToggle />

          <Link
            href={localeHref(locale, "contact")}
            className="group hidden items-center gap-2 border-b border-[var(--accent)] pb-0.5 eyebrow text-[10px] text-[var(--accent)] transition-colors hover:text-[var(--accent-soft)] md:inline-flex"
          >
            {t.nav.cta}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              &#8594;
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-[var(--ink)] lg:hidden"
          >
            <span className="flex h-3 w-5 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-transform ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-full bg-current transition-transform ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--rule)] bg-[var(--bg)] lg:hidden">
          <nav className="mx-auto flex max-w-[1320px] flex-col px-5 py-3 md:px-10">
            {items.map((item, i) => (
              <Link
                key={item.slug}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-[var(--rule-soft)] py-5 font-display text-3xl font-normal transition-colors last:border-none ${
                  isActive(item.href)
                    ? "text-[var(--accent)]"
                    : "text-[var(--ink)] hover:text-[var(--accent)]"
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden
                  className="eyebrow text-[10px] text-[var(--ink-faint)]"
                >
                  0{i + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
