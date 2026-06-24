"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/contexts/app-context";
import { localeHref } from "@/lib/site";
import type { Project } from "@/types/portfolio";

interface HeroSectionProps {
  location: string;
  timezone: string;
  availability: string;
  title: string;
  projects: Project[];
}

const ease = [0.22, 1, 0.36, 1] as const;
const FIRST_NAME = "Jonas";

// Contact card that leans a fraction toward the cursor — transform-only,
// honours reduced-motion, no-ops on touch.
function MagneticCard({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 20, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.22);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex">
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={className}
      >
        {children}
      </Link>
    </motion.span>
  );
}

function Mark({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute select-none text-sm font-light leading-none text-[var(--hero-mark)] ${className}`}
    >
      +
    </span>
  );
}

export function HeroSection({ title }: HeroSectionProps) {
  const { t, locale } = useApp();
  const sectionRef = useRef<HTMLElement>(null);

  // Cursor X drives the weight of the wordmark: left = light, right = heavy.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const pct = Math.min(
          Math.max((e.clientX - rect.left) / rect.width, 0),
          1
        );
        section.style.setProperty(
          "--name-wght",
          String(Math.round(440 + pct * 360))
        );
      });
    };
    const onLeave = () => section.style.setProperty("--name-wght", "720");

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
      style={{ ["--name-wght" as string]: "720" }}
      className="hero-field relative -mt-16 min-h-[100svh] w-full overflow-hidden"
    >
      {/* Full-bleed centred portrait: base photo → faint name → subject cutout
          (occludes the name so it reads behind the head) → veil. Base and cutout
          share the same object-position so they align. */}
      <div className="absolute inset-0">
        <Image
          src="/hero-portrait.webp"
          alt="Jonas Almeida"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[8%] -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(7rem,28vw,28rem)] font-bold uppercase leading-none tracking-tighter text-white/[0.10]"
        >
          {FIRST_NAME}
        </span>
        <Image
          src="/hero-cutout.webp"
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        <div aria-hidden className="hero-veil absolute inset-0" />
      </div>

      {/* Content frame */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1320px] flex-col justify-between px-5 pb-9 pt-20 md:px-10 md:pb-12 md:pt-24">
        <Mark className="left-0 top-20" />
        <Mark className="right-0 top-20" />
        <Mark className="left-0 bottom-1" />
        <Mark className="right-0 bottom-1" />

        {/* Top — tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="max-w-[17rem] text-[11px] font-medium uppercase leading-[1.7] tracking-[0.16em] text-white/85 md:max-w-xs md:text-[13px]"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Bottom — wordmark + contact card */}
        <div className="flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.3 }}
          >
            <span className="eyebrow text-[10px] text-white/70">
              &copy;2026
            </span>
            <h1 className="display mt-2 text-[clamp(3.6rem,15vw,13rem)] font-bold uppercase leading-[0.82] text-white">
              <span
                className="transition-[font-variation-settings] duration-200 ease-out"
                style={{
                  fontVariationSettings: "'wght' var(--name-wght, 720)",
                }}
              >
                {FIRST_NAME}
              </span>
              <span className="text-[var(--accent-bright)]">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.5 }}
            className="hidden shrink-0 md:block"
          >
            <MagneticCard
              href={localeHref(locale, "contact")}
              className="group flex items-center gap-4 rounded-lg bg-[#0c0c11] p-3 pr-5 ring-1 ring-white/10"
            >
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
                <Image
                  src="/hero-avatar.webp"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col">
                <span className="eyebrow text-[9px] text-white/45">
                  {t.nav.cta}
                </span>
                <span className="font-display text-base leading-tight text-white">
                  Jonas Almeida
                </span>
                <span className="text-[11px] text-white/65">{title}</span>
              </span>
              <span className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--accent)] text-[var(--bg)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                &#8599;
              </span>
            </MagneticCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
