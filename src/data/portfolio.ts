import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Jonas G. Almeida",
  title: "Senior Software Engineer",
  bio: "Software Engineer with over 6 years of experience in web development using React, Next.js, Node.js, and TypeScript. Focused on performance, scalability, and delivering excellent user experiences. Full-stack expertise with AWS infrastructure, CI/CD pipelines, and agile methodologies.",

  projects: [
    {
      id: "1",
      title: "CodeBrew Labs Blog",
      description:
        "Technical content platform focused on web development, featuring articles and tutorials. Built with an emphasis on performance, SEO, and modern best practices.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      demoUrl: "https://www.codebrewlabs.com.br/",
      featured: true,
      imageUrl: "/codebrews.png",
    },
    {
      id: "2",
      title: "SeisZora - Time Tracking App",
      description:
        "Time tracking and project management application with reporting features, authentication, and PDF delivery. Built with a modern stack and modular architecture.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "SQLite",
      ],
      demoUrl: "https://seiszora.com.br/",
      featured: true,
      imageUrl: "/timesheet.png",
    },
    {
      id: "3",
      title: "Portfolio Website",
      description:
        "Website pessoal para exibição de projetos, experiências e habilidades técnicas. Design responsivo, animações suaves e código otimizado.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: true,
      imageUrl: "/portfolio.png",
    },
    {
      id: "4",
      title: "Neurodecks",
      description:
        "Neurodecks is a platform that allows you to create and manage your decks of flashcards. It's a simple and easy to use tool that helps you study and memorize information.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: true,
      demoUrl: "https://neurodecks.com.br/",
      imageUrl: "/neurodecks.png",
    },
  ],

  experience: [
    {
      id: "1",
      company: "Escale Digital",
      position: "Senior Software Engineer",
      duration: "Mar 2025 - Atual",
      description: [
        "Desenvolvimento front-end e back-end em produtos escaláveis com Vue.js, Next.js, Node.js e Ruby.",
        "Criação de componentes reutilizáveis e APIs REST para automação inteligente.",
        "Gerenciamento de infraestrutura AWS: Lambda, ECS, S3, CloudWatch, CI/CD.",
        "Foco em performance, code quality, e integração de sistemas internos e externos.",
      ],
      technologies: [
        "Vue.js",
        "Next.js",
        "Node.js",
        "Ruby",
        "AWS",
        "Tailwind CSS",
      ],
    },
    {
      id: "2",
      company: "CodeBrew Labs",
      position: "Frontend Developer",
      duration: "Set 2022 - Mar 2025",
      description: [
        "Manutenção e evolução da plataforma de conteúdo técnico.",
        "Criação de artigos, otimização de UX e refatoração contínua de componentes.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Content Management",
      ],
    },
    {
      id: "3",
      company: "C6 Bank",
      position: "Frontend Developer",
      duration: "Dez 2021 – Fev 2023",
      description: [
        "Desenvolvimento de funcionalidades para sistemas bancários e folha de pagamentos PJ.",
        "Entregas com foco em acessibilidade e testes automatizados.",
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
