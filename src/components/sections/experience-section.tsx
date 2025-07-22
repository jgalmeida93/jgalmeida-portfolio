"use client";

import { motion } from "framer-motion";

import { Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experience: Experience[];
  bio?: string;
  name?: string;
  title?: string;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-900/70 transition-colors">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              {experience.position}
            </h3>
            <p className="text-xl text-blue-400 font-medium mb-1">
              {experience.company}
            </p>
          </div>
          <span className="text-sm text-zinc-400 bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700 mt-4 md:mt-0 self-start">
            {experience.duration}
          </span>
        </div>

        <div className="space-y-3 mb-8">
          {experience.description.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
              <p className="text-zinc-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-medium bg-zinc-800/50 text-zinc-200 rounded-lg border border-zinc-700 hover:bg-zinc-700/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection({
  experience,
  bio,
  name,
  title,
}: ExperienceSectionProps) {
  return (
    <motion.section
      className="py-24 px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Experience
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold text-white-400 mb-8">
              {title}
            </h2>
          )}

          {bio && (
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              {bio}
            </p>
          )}
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
