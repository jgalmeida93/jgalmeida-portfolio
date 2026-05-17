"use client";

import { motion } from "framer-motion";
import { StatusPill } from "@/components/ui/status-pill";
import { LocalTime } from "@/components/ui/local-time";

interface HeroSectionProps {
  name: string;
  title: string;
  bio: string;
  location: string;
  timezone: string;
  availability: string;
}

export function HeroSection({
  name,
  title,
  bio,
  location,
  timezone,
  availability,
}: HeroSectionProps) {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/jg_almeida_cv.pdf";
    link.download = "JonasGabrielAlmeida_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative flex min-h-[100vh] w-full flex-col justify-between px-6 pb-12 pt-32 lg:px-10 lg:pb-16 lg:pt-40">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center gap-4"
        >
          <StatusPill label={availability} />
          <span className="hidden h-1 w-1 rounded-full bg-[var(--border)] md:inline-block" />
          <LocalTime timezone={timezone} label={`${location} ·`} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(3rem,12vw,11rem)] leading-[0.92] tracking-[-0.02em] text-[var(--foreground)]"
        >
          {name.split(" ").map((word, i, arr) => (
            <span key={i} className="block md:inline">
              {word}
              {i < arr.length - 1 && (
                <span className="hidden md:inline">&nbsp;</span>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--foreground-muted)]">
              {title} <span className="text-[var(--foreground-subtle)]">/</span>{" "}
              Independent
            </p>
          </div>
          <p className="font-serif text-xl italic leading-snug text-[var(--foreground)] md:col-span-7 md:text-2xl">
            {bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3 md:mt-14"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--background)] transition-all hover:bg-[var(--accent)]"
          >
            View selected work
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <button
            onClick={handleDownloadCV}
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Download CV
            <span className="transition-transform group-hover:translate-y-0.5">
              ↓
            </span>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mx-auto mt-16 flex w-full max-w-7xl items-end justify-between"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
          <div>Portfolio</div>
          <div className="text-[var(--foreground-subtle)]">v. 2026</div>
        </div>
        <a
          href="#work"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent)]"
        >
          Scroll
          <span className="ml-2 inline-block animate-pulse-dot">↓</span>
        </a>
      </motion.div>
    </section>
  );
}
