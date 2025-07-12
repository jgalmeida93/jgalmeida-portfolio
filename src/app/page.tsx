"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  const handleCTAClick = () => {
    // Navigate to projects page
    window.location.href = "/projects";
  };

  return (
    <main>
      <HeroSection
        name={portfolioData.name}
        title={portfolioData.title}
        bio={portfolioData.bio}
        onCTAClick={handleCTAClick}
      />
    </main>
  );
}
