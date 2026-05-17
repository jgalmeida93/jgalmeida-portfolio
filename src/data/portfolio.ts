import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Jonas G. Almeida",
  title: "Senior Software Engineer",
  bio: "I build the web with care — fast, considered, and quietly opinionated. Six+ years across React, Next.js, Node, and TypeScript; AWS, CI/CD, and the unglamorous craft of making things actually work in production.",
  location: "Maringá, BR",
  timezone: "America/Sao_Paulo",
  availability: "Available for select work",

  projects: [
    {
      id: "penumbria",
      title: "Penumbria",
      description:
        "A literary publication in Portuguese — short-form prose and poetry that lives in the half-light between what is said and what stays silent. Editorial typography, calm motion, and a reading experience designed to disappear into the words.",
      technologies: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Vercel"],
      demoUrl: "https://www.penumbria.com.br/",
      featured: true,
      year: "2026",
      category: "Literary Publication",
      accent: "#c9a87c",
    },
    {
      id: "achso",
      title: "Ach so!",
      description:
        "Microlearning for the German Partizip II. Two-minute sessions, tap-only answers, and a curated bank of 346 verbs across A1–B2. Designed for the bus, the elevator, the queue — wherever a stray two minutes happen.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      demoUrl: "https://achso.com.br/",
      featured: true,
      year: "2026",
      category: "Language EdTech",
      accent: "#f59e0b",
    },
    {
      id: "neurodecks",
      title: "Neurodecks",
      description:
        "Spaced-repetition flashcards built for people who actually want to learn, not just collect decks. Quick capture, fluid review, and a structure that gets out of your way.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://neurodecks.com.br/",
      featured: true,
      year: "2025",
      category: "Learning Tools",
      imageUrl: "/neurodecks.png",
      accent: "#a78bfa",
    },
    {
      id: "seiszora",
      title: "SeisZora",
      description:
        "Time tracking and project reporting with authentication and PDF delivery. Modular architecture, deliberately small surface area, modern stack.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "SQLite"],
      demoUrl: "https://seiszora.com.br/",
      featured: true,
      year: "2024",
      category: "Productivity",
      imageUrl: "/timesheet.png",
      accent: "#34d399",
    },
    {
      id: "codebrew",
      title: "CodeBrew Labs",
      description:
        "Technical writing platform with an emphasis on performance, SEO, and the small typographic decisions that make long-form reading feel effortless.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      demoUrl: "https://www.codebrewlabs.com.br/",
      featured: true,
      year: "2023",
      category: "Editorial Platform",
      imageUrl: "/codebrews.png",
      accent: "#60a5fa",
    },
    {
      id: "portfolio",
      title: "This portfolio",
      description:
        "The site you're reading. Built as a sketchbook for the typography, motion, and small details I care about — and quietly updated whenever something new is worth showing.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: false,
      year: "2026",
      category: "Personal",
      imageUrl: "/portfolio.png",
      accent: "#fafaf9",
    },
  ],

  experience: [
    {
      id: "1",
      company: "Escale Digital",
      position: "Senior Software Engineer",
      duration: "Mar 2025 — Present",
      description: [
        "Front and back-end work across scalable products in Vue.js, Next.js, Node.js and Ruby.",
        "Reusable component systems and REST APIs supporting internal automation.",
        "AWS infrastructure: Lambda, ECS, S3, CloudWatch, CI/CD pipelines.",
        "Focus on performance, code quality, and integration of internal and external systems.",
      ],
      technologies: ["Vue.js", "Next.js", "Node.js", "Ruby", "AWS", "Tailwind CSS"],
    },
    {
      id: "2",
      company: "CodeBrew Labs",
      position: "Frontend Developer",
      duration: "Sep 2022 — Mar 2025",
      description: [
        "Maintenance and evolution of the technical content platform.",
        "Editorial work, UX refinement, and continuous component refactoring.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CMS"],
    },
    {
      id: "3",
      company: "C6 Bank",
      position: "Frontend Developer",
      duration: "Dec 2021 — Feb 2023",
      description: [
        "Feature work for banking systems and PJ payroll products.",
        "Delivery with a focus on accessibility and automated testing.",
      ],
      technologies: ["React", "JavaScript", "Jest", "A11y"],
    },
  ],

  skills: [
    { id: "1", name: "React", category: "frontend", proficiency: 95 },
    { id: "2", name: "TypeScript", category: "languages", proficiency: 92 },
    { id: "3", name: "Next.js", category: "frontend", proficiency: 93 },
    { id: "4", name: "JavaScript", category: "languages", proficiency: 97 },
    { id: "5", name: "Tailwind CSS", category: "frontend", proficiency: 88 },
    { id: "6", name: "Node.js", category: "backend", proficiency: 90 },
    { id: "7", name: "Ruby", category: "backend", proficiency: 70 },
    { id: "8", name: "AWS", category: "infra", proficiency: 80 },
    { id: "9", name: "Git", category: "tools", proficiency: 85 },
    { id: "10", name: "CI/CD", category: "tools", proficiency: 82 },
  ],

  contact: {
    email: "jgalmeida1993@gmail.com",
    github: "https://github.com/jgalmeida93",
    linkedin: "https://linkedin.com/in/jgalmeida93",
    twitter: "https://twitter.com/jgalmeida93",
  },
};
