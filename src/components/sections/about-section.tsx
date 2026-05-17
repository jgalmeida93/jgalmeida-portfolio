"use client";

import { motion } from "framer-motion";
import { useApp } from "@/contexts/app-context";
import { Skill } from "@/types/portfolio";
import { SectionMarker } from "@/components/ui/section-marker";

interface AboutSectionProps {
  skills: Skill[];
}

const order: Skill["category"][] = [
  "frontend",
  "backend",
  "infra",
  "languages",
  "tools",
];

export function AboutSection({ skills }: AboutSectionProps) {
  const { t } = useApp();

  const grouped = order
    .map((cat) => ({
      key: cat,
      label: t.about.categories[cat],
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="about" className="relative w-full px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-8 md:grid-cols-12 md:mb-20"
        >
          <div className="md:col-span-6">
            <SectionMarker label={t.about.tag} />
            <h2 className="mt-6 font-display text-[clamp(3rem,9vw,9rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-[var(--ink)]">
              {t.about.heading}{" "}
              <span className="italic font-serif font-normal lowercase tracking-[-0.01em] text-[var(--primary)]">
                {t.about.headingEm}
              </span>
            </h2>
          </div>
          <p className="self-end font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-muted)] md:col-span-5 md:col-start-8">
            {t.about.based}
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="space-y-6 font-serif text-xl leading-relaxed text-[var(--ink)] md:text-2xl">
              {t.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 ? "" : "text-[var(--ink-soft)]"}
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="rounded-sm border-2 border-[var(--ink)] bg-[var(--bg-elev)] p-6 shadow-[6px_6px_0_var(--primary)]">
              <div className="flex items-center justify-between border-b border-dashed border-[var(--rule)] pb-3">
                <span className="font-display text-2xl font-extrabold uppercase text-[var(--ink)]">
                  {t.about.inventoryHeading}
                </span>
                <span className="mono text-[var(--ink-muted)]">
                  Rev. {new Date().getFullYear()}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {grouped.map((group) => (
                  <div key={group.key}>
                    <div className="flex items-center gap-3">
                      <span className="inline-block h-2 w-2 rotate-45 bg-[var(--accent)]" />
                      <span className="mono text-[var(--ink-muted)]">
                        {group.label}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                      {group.items.map((s, i) => (
                        <span
                          key={s.id}
                          className="font-serif text-lg text-[var(--ink)]"
                        >
                          {s.name}
                          {i < group.items.length - 1 && (
                            <span className="ml-2 text-[var(--ink-faint)]">
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
