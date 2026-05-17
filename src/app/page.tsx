"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Marquee } from "@/components/ui/marquee";
import { Footer } from "@/components/ui/footer";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  const marqueeItems = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "Tailwind",
    "Design Systems",
    "Performance",
    "Accessibility",
    "Editorial Web",
  ];

  return (
    <>
      <HeroSection
        name={portfolioData.name}
        title={portfolioData.title}
        bio={portfolioData.bio}
        location={portfolioData.location ?? "Maringá, BR"}
        timezone={portfolioData.timezone ?? "America/Sao_Paulo"}
        availability={portfolioData.availability ?? "Available for select work"}
      />
      <Marquee items={marqueeItems} />
      <ProjectsSection projects={portfolioData.projects} />
      <ExperienceSection experience={portfolioData.experience} />
      <AboutSection
        bio={portfolioData.bio}
        skills={portfolioData.skills}
      />
      <ContactSection
        contact={portfolioData.contact}
        availability={portfolioData.availability}
      />
      <Footer
        location={portfolioData.location ?? "Maringá, BR"}
        timezone={portfolioData.timezone ?? "America/Sao_Paulo"}
      />
    </>
  );
}
