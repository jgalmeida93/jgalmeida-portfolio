"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[var(--foreground)]"
        >
          <span className="font-serif text-xl italic leading-none text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
            jg.
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-muted)] md:inline">
            Jonas G. Almeida
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elev)]/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] md:inline-flex"
        >
          Let&apos;s talk
          <span aria-hidden>↗</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] md:hidden"
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

      {open && (
        <div className="border-t border-[var(--border-subtle)] bg-[var(--background)]/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border-subtle)] py-4 font-serif text-2xl text-[var(--foreground)] last:border-none"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-[var(--accent)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]"
            >
              Let&apos;s talk ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
