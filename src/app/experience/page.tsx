"use client";

import { ExperienceSection } from "@/components/sections/experience-section";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/ui/footer";
import { portfolioData } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <>
      <div className="pt-32" />
      <ExperienceSection experience={portfolioData.experience} />
      <AboutSection bio={portfolioData.bio} skills={portfolioData.skills} />
      <Footer
        location={portfolioData.location ?? "Maringá, BR"}
        timezone={portfolioData.timezone ?? "America/Sao_Paulo"}
      />
    </>
  );
}
