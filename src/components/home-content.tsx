"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { Marquee } from "@/components/ui/marquee";
import { useApp } from "@/contexts/app-context";
import { portfolioData } from "@/data/portfolio";

export function HomeContent() {
  const { L, t } = useApp();

  return (
    <>
      <HeroSection
        location={portfolioData.location}
        timezone={portfolioData.timezone}
        availability={L(portfolioData.availability)}
        title={L(portfolioData.title)}
      />
      <Marquee items={[...t.marquee.tags]} />
    </>
  );
}
