"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import { SectionLabel } from "@/components/ui/section-label";

interface ProjectsSectionProps {
  projects: Project[];
}

interface ProjectRowProps {
  project: Project;
  index: number;
}

function ProjectRow({ project, index }: ProjectRowProps) {
  const num = String(index + 1).padStart(2, "0");
  const accent = project.accent ?? "var(--accent)";

  const content = (
    <div className="grid grid-cols-12 items-stretch gap-6 py-10 md:gap-10 md:py-14">
      <div className="col-span-12 flex flex-col justify-between md:col-span-5">
        <div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--foreground-subtle)]">
              {num} —
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
              {project.category}
            </span>
          </div>
          <h3
            className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.01em] text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)] md:text-6xl"
            style={{ ["--accent" as string]: accent }}
          >
            {project.title}
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--foreground-muted)]">
            {project.description}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--foreground-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.22em]">
            <span className="text-[var(--foreground-subtle)]">
              © {project.year}
            </span>
            {project.demoUrl && (
              <span className="inline-flex items-center gap-2 text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                Visit live
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-7">
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-[var(--border)] bg-[var(--background-elev)] transition-all duration-500 group-hover:border-[var(--accent)]/40"
          style={{ ["--accent" as string]: accent }}
        >
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `radial-gradient(60% 60% at 50% 40%, ${accent}1f, transparent 70%), linear-gradient(135deg, ${accent}0a, transparent 70%)`,
              }}
            >
              <span
                className="font-serif text-9xl italic leading-none opacity-30"
                style={{ color: accent }}
              >
                {project.title.charAt(0)}
              </span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
                <span>Live preview</span>
                <span>{new URL(project.demoUrl ?? "https://x").host}</span>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
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
      className="border-t border-[var(--border-subtle)]"
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
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="relative w-full px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-8 md:grid-cols-12 md:mb-16"
        >
          <div className="md:col-span-5">
            <SectionLabel number="01" title="Selected Work" />
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.01em] text-[var(--foreground)] md:text-7xl">
              Things <em className="text-[var(--accent)]">I&apos;ve</em>
              <br />
              made.
            </h2>
          </div>
          <p className="self-end font-serif text-lg italic leading-snug text-[var(--foreground-muted)] md:col-span-6 md:col-start-7 md:text-xl">
            A short list of recent projects — from a Portuguese literary
            publication to a microlearning tool for German grammar. Different
            shapes, same care.
          </p>
        </motion.div>

        <div>
          {featured.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
          <div className="border-t border-[var(--border-subtle)]" />
        </div>
      </div>
    </section>
  );
}
