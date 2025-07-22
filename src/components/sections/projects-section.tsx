"use client";

import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/portfolio";
import Image from "next/image";

interface ProjectsSectionProps {
  projects: Project[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card variant="interactive" className="h-full">
        <CardHeader>
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={240}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
          )}
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.demoUrl && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="flex items-center"
                  rel="noopener noreferrer"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button size="sm" variant="ghost" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeBracketIcon className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for
            creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > featuredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
