"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types/portfolio";
import { SectionLabel } from "@/components/ui/section-label";

interface ExperienceSectionProps {
  experience: Experience[];
}

interface ExperienceRowProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

function ExperienceRow({ experience, index, isLast }: ExperienceRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative grid grid-cols-12 gap-6 py-10 md:gap-10 md:py-14 ${
        !isLast ? "border-b border-[var(--border-subtle)]" : ""
      }`}
    >
      <div className="col-span-12 md:col-span-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
          {experience.duration}
        </div>
      </div>

      <div className="col-span-12 md:col-span-9">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-serif text-3xl leading-tight tracking-[-0.01em] text-[var(--foreground)] md:text-4xl">
            {experience.company}
          </h3>
          <span className="font-serif text-xl italic text-[var(--accent)]">
            {experience.position}
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 text-[15px] leading-relaxed text-[var(--foreground-muted)]"
            >
              <span className="mt-2 inline-block h-px w-4 flex-shrink-0 bg-[var(--border)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--foreground-muted)]"
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
  return (
    <section
      id="experience"
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
            <SectionLabel number="02" title="Experience" />
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.01em] text-[var(--foreground)] md:text-7xl">
              Where <em className="text-[var(--accent)]">I&apos;ve</em>
              <br />
              been.
            </h2>
          </div>
          <p className="self-end font-serif text-lg italic leading-snug text-[var(--foreground-muted)] md:col-span-6 md:col-start-7 md:text-xl">
            Six+ years between scaling teams, banking products, and a media
            platform — picking up the pragmatic habits that don&apos;t make it
            into job descriptions.
          </p>
        </motion.div>

        <div className="border-t border-[var(--border-subtle)]">
          {experience.map((exp, i) => (
            <ExperienceRow
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
