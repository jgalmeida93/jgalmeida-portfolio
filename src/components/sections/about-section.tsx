"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";
import { Skill } from "@/types/portfolio";

interface AboutSectionProps {
  bio: string;
  skills: Skill[];
}

const categoryOrder: Skill["category"][] = [
  "frontend",
  "backend",
  "infra",
  "languages",
  "tools",
];

const categoryLabel: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  infra: "Infra",
  languages: "Languages",
  tools: "Tools",
};

export function AboutSection({ skills }: AboutSectionProps) {
  const grouped = categoryOrder.map((cat) => ({
    label: categoryLabel[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <section
      id="about"
      className="relative w-full px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-8 md:grid-cols-12 md:mb-16"
        >
          <div className="md:col-span-5">
            <SectionLabel number="03" title="About" />
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.01em] text-[var(--foreground)] md:text-7xl">
              How <em className="text-[var(--accent)]">I</em>
              <br />
              work.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="space-y-6 font-serif text-xl leading-relaxed text-[var(--foreground)] md:text-2xl">
              <p>
                I&apos;m a software engineer based in Maringá, Paraná. I build
                web products with a bias toward{" "}
                <em className="text-[var(--accent)]">care</em> — fewer features,
                better edges, more thought per pixel.
              </p>
              <p className="text-[var(--foreground-muted)]">
                My day-to-day is React and TypeScript, but most of the
                interesting work happens between layers — turning vague product
                intentions into systems that don&apos;t collapse the moment
                they meet a real user.
              </p>
              <p className="text-[var(--foreground-muted)]">
                Outside of client work I keep small side projects alive: a
                literary publication, a German microlearning tool, things that
                give me an excuse to keep questioning my own defaults.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="space-y-6">
              {grouped.map((group) =>
                group.items.length === 0 ? null : (
                  <div
                    key={group.label}
                    className="border-t border-[var(--border-subtle)] pt-4"
                  >
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-subtle)]">
                      {group.label}
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                      {group.items.map((s) => (
                        <span
                          key={s.id}
                          className="font-serif text-lg text-[var(--foreground)]"
                        >
                          {s.name}
                          <span className="ml-3 text-[var(--foreground-subtle)]">
                            ·
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
