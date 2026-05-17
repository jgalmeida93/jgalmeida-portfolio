"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Marquee } from "@/components/ui/marquee";
import { Footer } from "@/components/ui/footer";
import { useApp } from "@/contexts/app-context";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  const { L, t } = useApp();

  return (
    <>
      <HeroSection
        location={portfolioData.location}
        timezone={portfolioData.timezone}
        availability={L(portfolioData.availability)}
        title={L(portfolioData.title)}
      />
      <Marquee items={t.marquee.tags as unknown as string[]} variant="primary" />
      <ProjectsSection projects={portfolioData.projects} />
      <Marquee items={t.marquee.tags as unknown as string[]} variant="ink" />
      <ExperienceSection experience={portfolioData.experience} />
      <AboutSection skills={portfolioData.skills} />
      <ContactSection
        contact={portfolioData.contact}
        availability={portfolioData.availability}
      />
      <Footer
        location={portfolioData.location}
        timezone={portfolioData.timezone}
      />
    </>
  );
}
