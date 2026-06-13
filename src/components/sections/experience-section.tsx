"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types/portfolio";
import { useApp } from "@/contexts/app-context";
import { SectionMarker } from "@/components/ui/section-marker";

interface ExperienceSectionProps {
  experience: Experience[];
}

const ease = [0.22, 1, 0.36, 1] as const;

function Entry({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const { L, t } = useApp();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease }}
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-12 gap-6 border-t border-[var(--rule)] py-12 md:gap-12 md:py-16"
    >
      <div className="col-span-12 flex items-baseline justify-between md:col-span-4 md:flex-col md:items-start md:gap-4">
        <span className="font-display text-5xl font-light text-[var(--accent)] md:text-6xl">
          {num}
        </span>
        <span className="eyebrow text-[var(--ink-muted)]">
          {L(experience.duration)}
        </span>
      </div>

      <div className="col-span-12 md:col-span-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-light leading-[1] text-[var(--ink)]">
            {experience.company}
          </h3>
          <span className="eyebrow text-[var(--accent)]">
            {L(experience.position)}
          </span>
        </div>

        <ul className="mt-7 max-w-2xl space-y-4">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 text-[15px] leading-relaxed text-[var(--ink-soft)]"
            >
              <span className="mt-3 inline-block h-px w-5 flex-shrink-0 bg-[var(--accent)]" />
              <span>{L(item)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="eyebrow text-[10px] text-[var(--ink-faint)]">
            {t.experience.stack}
          </span>
          <span className="h-px w-6 bg-[var(--rule-strong)]" />
          {experience.technologies.map((tech, i) => (
            <span key={tech} className="flex items-center gap-3">
              {i > 0 && <span className="text-[var(--ink-faint)]">&middot;</span>}
              <span className="eyebrow text-[10px] text-[var(--ink-muted)]">
                {tech}
              </span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const { t } = useApp();

  return (
    <section
      id="experience"
      className="relative w-full px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-7">
            <SectionMarker index="02" label={t.experience.tag} />
            <h2 className="mt-7 font-display text-[clamp(2.8rem,8vw,7rem)] font-light leading-[0.94] text-[var(--ink)]">
              {t.experience.heading}{" "}
              <span className="text-[var(--accent)]">
                {t.experience.headingEm}
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[var(--ink-muted)] md:col-span-4 md:col-start-9">
            {t.experience.subhead}
          </p>
        </motion.div>

        <div className="mt-12 border-b border-[var(--rule)] md:mt-16">
          {experience.map((exp, i) => (
            <Entry key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
