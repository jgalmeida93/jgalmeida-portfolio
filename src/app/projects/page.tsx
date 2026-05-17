"use client";

import { ProjectsSection } from "@/components/sections/projects-section";
import { Footer } from "@/components/ui/footer";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-32" />
      <ProjectsSection projects={portfolioData.projects} />
      <Footer
        location={portfolioData.location}
        timezone={portfolioData.timezone}
      />
    </>
  );
}
