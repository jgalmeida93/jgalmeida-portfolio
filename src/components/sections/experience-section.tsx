"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types/portfolio";
import { useApp } from "@/contexts/app-context";
import { SectionMarker } from "@/components/ui/section-marker";

interface ExperienceSectionProps {
  experience: Experience[];
}

function FieldNote({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) {
  const { L, t } = useApp();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative grid grid-cols-12 gap-6 py-10 md:gap-10 md:py-14 ${
        !isLast ? "border-b-2 border-dashed border-[var(--rule)]" : ""
      }`}
    >
      <div className="col-span-12 flex items-start justify-between md:col-span-3 md:flex-col md:items-start md:gap-2">
        <span className="font-display text-6xl font-extrabold leading-none text-[var(--primary)]">
          {num}.
        </span>
        <div className="text-right md:text-left">
          <div className="mono text-[var(--ink-muted)]">
            {L(experience.duration)}
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-9">
        <div className="flex flex-wrap items-baseline gap-x-4">
          <h3 className="font-display text-4xl font-extrabold uppercase leading-tight tracking-[-0.005em] text-[var(--ink)] md:text-5xl">
            {experience.company}
          </h3>
          <span className="rounded-sm bg-[var(--accent)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#1a130e]">
            {L(experience.position)}
          </span>
        </div>

        <ul className="mt-6 max-w-3xl space-y-3">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 font-serif text-lg leading-relaxed text-[var(--ink-soft)]"
            >
              <span className="mt-3 inline-block h-px w-6 flex-shrink-0 bg-[var(--primary)]" />
              <span>{L(item)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="mono text-[var(--ink-faint)]">
            {t.experience.stack}:
          </span>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-[var(--rule)] bg-[var(--bg-elev)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink)]"
            >
              {tech}
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
      className="relative w-full px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-8 md:grid-cols-12 md:mb-20"
        >
          <div className="md:col-span-6">
            <SectionMarker label={t.experience.tag} />
            <h2 className="mt-6 font-display text-[clamp(3rem,9vw,9rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-[var(--ink)]">
              {t.experience.heading}{" "}
              <span className="italic font-serif font-normal lowercase tracking-[-0.01em] text-[var(--primary)]">
                {t.experience.headingEm}
              </span>
            </h2>
          </div>
          <p className="self-end font-serif text-lg leading-snug text-[var(--ink-muted)] md:col-span-5 md:col-start-8 md:text-xl">
            {t.experience.subhead}
          </p>
        </motion.div>

        <div className="border-t-2 border-dashed border-[var(--rule)]">
          {experience.map((exp, i) => (
            <FieldNote
              key={exp.id}
              experience={exp}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
