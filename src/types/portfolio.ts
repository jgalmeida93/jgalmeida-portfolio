export type Locale = "en" | "pt";

export type LocalizedText = { en: string; pt: string };

export interface Project {
  id: string;
  title: string;
  description: LocalizedText;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  year?: string;
  category: LocalizedText;
  accent?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: LocalizedText;
  duration: LocalizedText;
  description: LocalizedText[];
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools" | "languages" | "infra";
  proficiency: number;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  whatsapp?: string;
}

export interface PortfolioData {
  name: string;
  title: LocalizedText;
  bio: LocalizedText;
  location: string;
  timezone: string;
  availability: LocalizedText;
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  contact: ContactInfo;
}
