"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experience: Experience[];
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
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {experience.position}
            </h3>
            <p className="text-lg text-zinc-400 mb-2">{experience.company}</p>
          </div>
          <span className="text-sm text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">
            {experience.duration}
          </span>
        </div>

        <ul className="space-y-2 mb-6">
          {experience.description.map((item, idx) => (
            <li key={idx} className="text-zinc-300 flex items-start">
              <span className="text-zinc-500 mr-2 mt-2 flex-shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full"
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
    <motion.section
      className="py-24 px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made at each role.
          </p>
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
