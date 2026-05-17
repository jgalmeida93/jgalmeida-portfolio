"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import { useApp } from "@/contexts/app-context";
import { SectionMarker } from "@/components/ui/section-marker";
import { Ticket } from "@/components/ui/ticket";

interface ProjectsSectionProps {
  projects: Project[];
}

interface CatalogEntryProps {
  project: Project;
  index: number;
}

function CatalogEntry({ project, index }: CatalogEntryProps) {
  const { L, t } = useApp();
  const num = String(index + 1).padStart(2, "0");
  const accent = project.accent ?? "var(--primary)";
  const alignLeft = index % 2 === 0;

  const content = (
    <div className="grid grid-cols-12 items-stretch gap-6 py-10 md:gap-10 md:py-16">
      <div
        className={`order-2 col-span-12 flex flex-col justify-between md:col-span-5 ${
          alignLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <div>
          <div className="flex items-center gap-4">
            <span
              className="font-display text-7xl font-extrabold leading-none"
              style={{ color: accent }}
            >
              №{num}
            </span>
            <div className="flex flex-col">
              <span className="mono text-[var(--ink-muted)]">
                {t.work.entry}
              </span>
              <span className="mono text-[var(--ink)]">
                {L(project.category)}
              </span>
            </div>
          </div>

          <h3 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.005em] text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--primary)] md:text-6xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-md font-serif text-lg leading-snug text-[var(--ink-soft)] md:text-xl">
            {L(project.description)}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-[var(--rule)] bg-[var(--bg-elev)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <Ticket>{project.year}</Ticket>
            {project.demoUrl ? (
              <span className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase text-[var(--ink)] transition-colors group-hover:text-[var(--primary)]">
                {t.work.visit}
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
            ) : (
              <span className="mono text-[var(--ink-faint)]">
                {t.work.noLink}
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        className={`order-1 col-span-12 md:col-span-7 ${
          alignLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <div
          className="card-lift relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-[var(--rule)] bg-[var(--bg-elev)] shadow-[var(--shadow-paper)]"
          style={{ borderColor: `${accent}55` }}
        >
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={`${project.title} — ${L(project.category)} project preview`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-end justify-start p-8"
              style={{
                background: `repeating-linear-gradient(135deg, ${accent}20, ${accent}20 12px, transparent 12px, transparent 24px), linear-gradient(160deg, ${accent}25, transparent 70%)`,
              }}
            >
              <div className="flex h-full w-full flex-col items-start justify-between">
                <div className="flex w-full items-start justify-between">
                  <span
                    className="font-display text-2xl font-extrabold uppercase"
                    style={{ color: accent }}
                  >
                    {project.title}
                  </span>
                  <span
                    className="rotate-3 rounded-sm border-2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: accent, borderColor: accent }}
                  >
                    Live
                  </span>
                </div>
                <div
                  className="font-display text-[clamp(6rem,18vw,14rem)] font-extrabold uppercase leading-[0.85]"
                  style={{ color: accent, opacity: 0.18 }}
                >
                  {project.title.charAt(0)}
                </div>
                <div className="flex w-full items-end justify-between">
                  <span
                    className="font-mono text-xs uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {project.demoUrl
                      ? new URL(project.demoUrl).host
                      : "preview"}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: accent }}
                  >
                    №{num}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="border-t-2 border-dashed border-[var(--rule)]"
    >
      {project.demoUrl ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {content}
        </a>
      ) : (
        <div className="group">{content}</div>
      )}
    </motion.div>
  );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useApp();
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="work"
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
            <SectionMarker label={t.work.tag} />
            <h2 className="mt-6 font-display text-[clamp(3rem,9vw,9rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-[var(--ink)]">
              {t.work.heading}{" "}
              <span className="italic font-serif font-normal lowercase tracking-[-0.01em] text-[var(--primary)]">
                {t.work.headingEm}
              </span>
            </h2>
          </div>
          <p className="self-end font-serif text-lg leading-snug text-[var(--ink-muted)] md:col-span-5 md:col-start-8 md:text-xl">
            {t.work.subhead}
          </p>
        </motion.div>

        <div>
          {featured.map((project, i) => (
            <CatalogEntry key={project.id} project={project} index={i} />
          ))}
          <div className="border-t-2 border-dashed border-[var(--rule)]" />
        </div>
      </div>
    </section>
  );
}
