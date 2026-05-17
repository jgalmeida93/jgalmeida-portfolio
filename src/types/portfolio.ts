export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  year?: string;
  category?: string;
  accent?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
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
  twitter?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  location?: string;
  timezone?: string;
  availability?: string;
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  contact: ContactInfo;
}
