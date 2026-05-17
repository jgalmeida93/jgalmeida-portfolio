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
      <AboutSection skills={portfolioData.skills} />
      <Footer
        location={portfolioData.location}
        timezone={portfolioData.timezone}
      />
    </>
  );
}
