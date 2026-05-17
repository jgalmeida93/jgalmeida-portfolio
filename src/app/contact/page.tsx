"use client";

import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/ui/footer";
import { portfolioData } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <>
      <div className="pt-32" />
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
