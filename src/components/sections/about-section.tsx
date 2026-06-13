"use client";

import { motion } from "framer-motion";
import { useApp } from "@/contexts/app-context";
import { Skill } from "@/types/portfolio";
import { SectionMarker } from "@/components/ui/section-marker";

interface AboutSectionProps {
  skills: Skill[];
}

const ease = [0.22, 1, 0.36, 1] as const;

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
    <section id="about" className="relative w-full px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-7">
            <SectionMarker index="03" label={t.about.tag} />
            <h2 className="mt-7 font-display text-[clamp(2.8rem,8vw,7rem)] font-light leading-[0.94] text-[var(--ink)]">
              {t.about.heading}{" "}
              <span className="text-[var(--accent)]">
                {t.about.headingEm}
              </span>
            </h2>
          </div>
          <p className="eyebrow text-[var(--ink-muted)] md:col-span-4 md:col-start-9 md:text-right">
            {t.about.based}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <p className="font-display text-[1.8rem] leading-[1.3] text-[var(--ink)] md:text-[2.2rem]">
              {t.about.paragraphs[0]}
            </p>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[var(--ink-soft)] md:text-base">
              {t.about.paragraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            viewport={{ once: true }}
            className="md:col-span-4 md:col-start-9"
          >
            <div className="mb-6 flex items-baseline justify-between border-b border-[var(--rule)] pb-3">
              <span className="eyebrow text-[var(--ink)]">
                {t.about.capabilitiesHeading}
              </span>
              <span className="eyebrow text-[10px] text-[var(--ink-faint)]">
                {new Date().getFullYear()}
              </span>
            </div>

            <dl className="divide-y divide-[var(--rule-soft)]">
              {grouped.map((group) => (
                <div key={group.key} className="py-4">
                  <dt className="eyebrow text-[10px] text-[var(--accent)]">
                    {group.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl leading-snug text-[var(--ink-soft)]">
                    {group.items.map((s) => s.name).join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
