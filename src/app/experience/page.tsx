"use client";

import { ExperienceSection } from "@/components/sections/experience-section";
import { portfolioData } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceSection experience={portfolioData.experience} />
    </main>
  );
}
