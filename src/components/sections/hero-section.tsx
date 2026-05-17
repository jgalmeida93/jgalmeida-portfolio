"use client";

import { motion } from "framer-motion";
import { useApp } from "@/contexts/app-context";
import { Sticker } from "@/components/ui/sticker";
import { StatusDot } from "@/components/ui/status-dot";
import { LocalTime } from "@/components/ui/local-time";
import { SpinnerBadge } from "@/components/ui/spinner-badge";

interface HeroSectionProps {
  location: string;
  timezone: string;
  availability: string;
  title: string;
}

export function HeroSection({
  location,
  timezone,
  availability,
  title,
}: HeroSectionProps) {
  const { t } = useApp();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/jg_almeida_cv.pdf";
    link.download = "JonasGabrielAlmeida_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full overflow-hidden border-b border-[var(--rule)] px-5 pb-12 pt-28 md:px-8 md:pb-20 md:pt-36">
      {/* Top bar — issue masthead */}
      <div className="mx-auto mb-10 flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-3 border-y border-[var(--rule)] py-3 md:mb-16">
        <div className="flex flex-wrap items-center gap-3 mono text-[var(--ink-muted)]">
          <span>{t.hero.preamble}</span>
          <span className="text-[var(--ink-faint)]">/</span>
          <span>{t.hero.issue}</span>
        </div>
        <div className="flex items-center gap-3 mono text-[var(--ink-muted)]">
          <span>{location}</span>
          <span className="text-[var(--ink-faint)]">·</span>
          <LocalTime timezone={timezone} className="text-[var(--ink)]" />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-6 md:gap-10">
        {/* Sticker column */}
        <motion.div
          initial={{ opacity: 0, y: 16, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-12"
        >
          <Sticker tone="accent" rotate={-3}>
            <StatusDot /> {availability}
          </Sticker>
          <Sticker tone="primary" rotate={1.5}>
            {t.hero.since}
          </Sticker>
          <span className="mono text-[var(--ink-muted)]">
            — {t.hero.role}
          </span>
        </motion.div>

        {/* The Big Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 mt-6 md:mt-2"
        >
          <h1 className="display text-[clamp(4.2rem,16vw,15rem)] text-[var(--ink)]">
            <span className="block">JONAS</span>
            <span className="block">
              GABRIEL
              <span className="ml-3 inline-block align-top text-[0.45em] font-mono normal-case tracking-[0.18em] text-[var(--primary)]">
                ★
              </span>
            </span>
            <span className="block italic font-serif font-normal lowercase tracking-[-0.01em] text-[var(--ink)]">
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-2 inset-y-0 -z-0 bg-[var(--accent)]"
                  style={{ transform: "rotate(-1deg)" }}
                />
                <span className="relative z-10 px-1 text-[var(--ink)] mix-blend-difference">
                  almeida
                </span>
              </span>
              <span className="ml-3 font-display font-extrabold uppercase not-italic tracking-[0] text-[var(--ink)]">
                ’s
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Manifesto + role + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="col-span-12 mt-8 grid grid-cols-12 gap-6 md:mt-12 md:gap-10"
        >
          <div className="col-span-12 md:col-span-7">
            <p className="font-serif text-2xl leading-snug text-[var(--ink)] md:text-3xl">
              <em className="text-[var(--primary)]">{t.hero.tagline}</em>{" "}
              <span className="text-[var(--ink-soft)]">
                {t.hero.manifesto}
              </span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--paper)] shadow-[3px_3px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]"
              >
                {t.hero.cta}
                <span className="transition-transform group-hover:translate-x-1">
                  ↘
                </span>
              </a>
              <button
                onClick={handleDownloadCV}
                className="group inline-flex items-center gap-3 rounded-full border-2 border-[var(--ink)] bg-transparent px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink)] shadow-[3px_3px_0_var(--accent)] transition-all hover:-translate-y-0.5 hover:bg-[var(--ink)] hover:text-[var(--bg)]"
              >
                {t.hero.cv}
                <span className="transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-dashed md:border-[var(--rule)]">
            <div className="mono text-[var(--ink-muted)]">{t.hero.what}</div>
            <div className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight text-[var(--ink)] md:text-3xl">
              {title}
            </div>
            <div className="mt-6 hidden md:flex items-center gap-4">
              <SpinnerBadge text="Catalog 2026" />
              <div className="flex flex-col gap-1">
                <span className="mono text-[var(--ink-muted)]">
                  {t.hero.scroll}
                </span>
                <span className="font-display text-3xl text-[var(--primary)]">
                  ↓
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
