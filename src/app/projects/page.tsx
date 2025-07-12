"use client";

import { ProjectsSection } from "@/components/sections/projects-section";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsSection projects={portfolioData.projects} />
    </main>
  );
}
