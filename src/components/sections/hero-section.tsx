"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useApp } from "@/contexts/app-context";
import { localeHref } from "@/lib/site";
import { downloadCV } from "@/lib/cv";
import { StatusDot } from "@/components/ui/status-dot";
import { LocalTime } from "@/components/ui/local-time";

interface HeroSectionProps {
  location: string;
  timezone: string;
  availability: string;
  title: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

export function HeroSection({
  location,
  timezone,
  availability,
  title,
}: HeroSectionProps) {
  const { t, locale } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spot = spotRef.current;
    if (!section || !spot) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        spot.style.setProperty("--my", `${e.clientY - rect.top}px`);
        spot.dataset.active = "true";
      });
    };
    const onLeave = () => {
      spot.dataset.active = "false";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] w-full flex-col justify-center overflow-hidden px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16"
    >
      <div ref={spotRef} className="spotlight" data-active="false" />
      <div
        aria-hidden
        className="glow-blob"
        style={{ top: "-8%", right: "-6%", width: "46vw", height: "46vw" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.div
            variants={rise}
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            <span className="inline-flex items-center gap-2.5 eyebrow text-[var(--ink-soft)]">
              <StatusDot /> {availability}
            </span>
            <span className="h-px w-8 bg-[var(--rule-strong)]" />
            <span className="eyebrow text-[var(--ink-muted)]">{t.hero.role}</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={rise}
            className="display mt-8 text-[clamp(3.6rem,14vw,13rem)] font-light text-[var(--ink)]"
          >
            <span className="block">Jonas</span>
            <span className="block">
              <span className="font-medium">Almeida</span>
              <span className="text-[var(--accent)]">.</span>
            </span>
          </motion.h1>

          {/* Statement + CTAs */}
          <div className="mt-10 grid grid-cols-12 gap-8 md:mt-14 md:gap-12">
            <motion.div variants={rise} className="col-span-12 md:col-span-7">
              <p className="font-display text-[1.7rem] leading-[1.25] text-[var(--ink-soft)] md:text-[2.1rem]">
                <span className="text-[var(--ink)]">{t.hero.tagline}</span>{" "}
                <span className="text-[var(--ink-muted)]">{t.hero.manifesto}</span>
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-7">
                <Link
                  href={localeHref(locale, "work")}
                  className="group inline-flex items-center gap-3 border border-[var(--accent)] px-7 py-3.5 eyebrow text-[10px] text-[var(--accent)] transition-colors duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg)]"
                >
                  {t.hero.cta}
                  <span className="transition-transform group-hover:translate-x-1">
                    &#8594;
                  </span>
                </Link>
                <button
                  onClick={downloadCV}
                  className="group inline-flex items-center gap-2.5 eyebrow text-[10px] text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
                >
                  <span className="link-underline">{t.hero.cv}</span>
                  <span className="transition-transform group-hover:translate-y-0.5">
                    &#8595;
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Meta column */}
            <motion.div
              variants={rise}
              className="col-span-12 flex items-end md:col-span-4 md:col-start-9"
            >
              <div className="w-full border-t border-[var(--rule)] pt-5">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-[var(--ink-faint)]">
                    {location}
                  </span>
                  <LocalTime
                    timezone={timezone}
                    className="eyebrow text-[var(--ink-soft)]"
                  />
                </div>
                <div className="mt-4 font-display text-xl text-[var(--ink-soft)]">
                  {title}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
