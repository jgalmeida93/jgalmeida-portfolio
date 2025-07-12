"use client";

import { ContactSection } from "@/components/sections/contact-section";
import { portfolioData } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <main>
      <ContactSection contact={portfolioData.contact} />
    </main>
  );
}
