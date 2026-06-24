"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useApp } from "@/contexts/app-context";
import { portfolioData } from "@/data/portfolio";
import { localeHref } from "@/lib/site";
import { downloadCV } from "@/lib/cv";
import { SECTION_SLUGS } from "@/lib/sections";

export function CommandMenu() {
  const { t, locale, toggleLocale } = useApp();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("cmdk:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("cmdk:open", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  const goTo = (slug: string) => router.push(localeHref(locale, slug));

  const openUrl = (url: string) =>
    window.open(url, "_blank", "noopener,noreferrer");

  const copyEmail = async () => {
    // clipboard pode falhar sem permissão do navegador; ação não-crítica
    try {
      await navigator.clipboard.writeText(portfolioData.contact.email);
    } catch {
      /* navegador sem suporte/permissão — segue sem feedback */
    }
  };

  const { contact } = portfolioData;
  const c = t.command;

  if (!open) return null;

  return (
    <div
      className="cmdk-overlay"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={c.open}
        className="cmdk-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          label={c.open}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
          className="w-full overflow-hidden rounded-2xl border border-[var(--rule)] bg-[var(--bg-elev)] shadow-[var(--shadow-soft)]"
        >
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70"
            />
            <div className="flex items-center gap-3 border-b border-[var(--rule)] px-5 py-4">
              <SearchIcon />
              <Command.Input
                autoFocus
                placeholder={c.placeholder}
                className="w-full bg-transparent font-sans text-[15px] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none"
              />
              <kbd className="hidden rounded border border-[var(--rule)] px-1.5 py-0.5 font-sans text-[10px] tracking-widest text-[var(--ink-faint)] sm:block">
                ESC
              </kbd>
            </div>
          </div>

          <Command.List className="max-h-[56vh] overflow-y-auto py-2">
            <Command.Empty className="px-5 py-10 text-center font-sans text-sm text-[var(--ink-muted)]">
              {c.empty}
            </Command.Empty>

            <Command.Group heading={c.groups.navigate}>
              <Item
                label={c.actions.home}
                onSelect={() => run(() => goTo(""))}
              />
              {SECTION_SLUGS.map((slug) => (
                <Item
                  key={slug}
                  label={c.actions[slug]}
                  onSelect={() => run(() => goTo(slug))}
                />
              ))}
            </Command.Group>

            <Command.Group heading={c.groups.connect}>
              <Item
                label={c.actions.email}
                hint={contact.email}
                onSelect={() => run(() => openUrl(`mailto:${contact.email}`))}
              />
              <Item
                label={c.actions.github}
                onSelect={() => run(() => openUrl(contact.github))}
              />
              <Item
                label={c.actions.linkedin}
                onSelect={() => run(() => openUrl(contact.linkedin))}
              />
              {contact.twitter && (
                <Item
                  label={c.actions.twitter}
                  onSelect={() => run(() => openUrl(contact.twitter as string))}
                />
              )}
            </Command.Group>

            <Command.Group heading={c.groups.actions}>
              <Item label={c.actions.cv} onSelect={() => run(downloadCV)} />
              <Item label={c.actions.copyEmail} onSelect={() => run(copyEmail)} />
              <Item label={c.actions.language} onSelect={() => run(toggleLocale)} />
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}

function Item({
  label,
  hint,
  onSelect,
}: {
  label: string;
  hint?: string;
  onSelect: () => void;
}) {
  return (
    <Command.Item value={label} onSelect={onSelect}>
      <span className="cmdk-bullet" aria-hidden />
      <span className="flex-1 font-sans text-sm">{label}</span>
      {hint && (
        <span className="font-sans text-xs text-[var(--ink-faint)]">{hint}</span>
      )}
    </Command.Item>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="shrink-0 text-[var(--ink-muted)]"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}
