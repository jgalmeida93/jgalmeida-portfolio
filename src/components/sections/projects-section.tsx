"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/portfolio";
import { useApp } from "@/contexts/app-context";
import { SectionMarker } from "@/components/ui/section-marker";

interface ProjectsSectionProps {
  projects: Project[];
}

interface CatalogEntryProps {
  project: Project;
  index: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectVisual({ project, num }: { project: Project; num: string }) {
  const accent = project.accent ?? "var(--accent)";

  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-8"
      style={{
        background: `radial-gradient(120% 120% at 80% 0%, ${accent}33, transparent 55%), var(--bg-elev)`,
      }}
    >
      <div className="flex items-start justify-between">
        <span className="eyebrow text-[var(--ink-muted)]">{num}</span>
        <span className="eyebrow text-[var(--ink-faint)]">
          {project.demoUrl ? new URL(project.demoUrl).host : "preview"}
        </span>
      </div>
      <div
        className="font-display text-[clamp(7rem,18vw,15rem)] font-light leading-[0.8] text-[var(--ink)]"
        style={{ opacity: 0.07 }}
      >
        {project.title.charAt(0)}
      </div>
    </div>
  );
}

function CatalogEntry({ project, index }: CatalogEntryProps) {
  const { L, t } = useApp();
  const num = String(index + 1).padStart(2, "0");
  const alignLeft = index % 2 === 0;

  const content = (
    <div className="grid grid-cols-12 items-center gap-8 py-14 md:gap-14 md:py-20">
      {/* Text */}
      <div
        className={`order-2 col-span-12 md:col-span-5 ${
          alignLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl font-light text-[var(--accent)]">
            {num}
          </span>
          <span className="h-px w-8 bg-[var(--rule-strong)]" />
          <span className="eyebrow text-[var(--ink-muted)]">
            {L(project.category)} &middot; {project.year}
          </span>
        </div>

        <h3 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.5rem)] font-light leading-[0.98] text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent)]">
          {project.title}
        </h3>

        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--ink-soft)]">
          {L(project.description)}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {project.technologies.map((tech, i) => (
            <span key={tech} className="flex items-center gap-3">
              {i > 0 && <span className="text-[var(--ink-faint)]">&middot;</span>}
              <span className="eyebrow text-[10px] text-[var(--ink-muted)]">
                {tech}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-8">
          {project.demoUrl ? (
            <span className="group/link inline-flex items-center gap-2.5 eyebrow text-[var(--ink)]">
              <span className="link-underline">{t.work.visit}</span>
              <span className="text-[var(--accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                &#8599;
              </span>
            </span>
          ) : (
            <span className="eyebrow text-[var(--ink-faint)]">{t.work.noLink}</span>
          )}
        </div>
      </div>

      {/* Visual */}
      <div
        className={`order-1 col-span-12 md:col-span-7 ${
          alignLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="lift relative aspect-[16/10] w-full overflow-hidden border border-[var(--rule)] bg-[var(--bg-elev)] group-hover:border-[var(--rule-strong)] group-hover:shadow-[var(--shadow-soft)]">
          <ProjectVisual project={project} num={num} />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease }}
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-[var(--rule)]"
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
    <section id="work" className="relative w-full px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-7">
            <SectionMarker index="01" label={t.work.tag} />
            <h2 className="mt-7 font-display text-[clamp(2.8rem,8vw,7rem)] font-light leading-[0.94] text-[var(--ink)]">
              {t.work.heading}{" "}
              <span className="text-[var(--accent)]">
                {t.work.headingEm}
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[var(--ink-muted)] md:col-span-4 md:col-start-9">
            {t.work.subhead}
          </p>
        </motion.div>

        <div className="mt-12 border-b border-[var(--rule)] md:mt-16">
          {featured.map((project, i) => (
            <CatalogEntry key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
