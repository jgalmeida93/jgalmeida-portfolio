"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/portfolio";
import { useApp } from "@/contexts/app-context";
import { SectionMarker } from "@/components/ui/section-marker";

function projectHost(project: Project) {
  if (!project.demoUrl) return "preview";
  return new URL(project.demoUrl).host.replace(/^www\./, "");
}

interface ProjectsSectionProps {
  projects: Project[];
}

interface CatalogEntryProps {
  project: Project;
  index: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectVisual({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const accent = project.accent ?? "var(--accent)";
  const host = projectHost(project);

  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Browser chrome — neutral, lets the real screenshot carry the colour */}
      <div className="flex items-center gap-3 border-b border-[var(--rule)] bg-[var(--bg-card)] px-4 py-3">
        <span aria-hidden className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--rule-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--rule-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--rule-strong)]" />
        </span>
        <span className="truncate font-sans text-[11px] tracking-[0.04em] text-[var(--ink-faint)]">
          {host}
        </span>
      </div>

      {/* Real screenshot */}
      <div className="relative flex-1 overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} — screenshot`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-end p-8"
            style={{
              background: `radial-gradient(120% 120% at 80% 0%, ${accent}33, transparent 55%), var(--bg-elev)`,
            }}
          >
            <span
              className="font-display text-[clamp(7rem,18vw,15rem)] font-light leading-[0.8] text-[var(--ink)]"
              style={{ opacity: 0.07 }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Accent veil on hover — ties the card to the brand without tinting the shot at rest */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to top, ${accent}1f, transparent 40%)`,
          }}
        />
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
          <ProjectVisual project={project} priority={index === 0} />
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
