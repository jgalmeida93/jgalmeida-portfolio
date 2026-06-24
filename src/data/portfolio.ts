import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Jonas G. Almeida",
  title: {
    en: "Senior Software Engineer",
    pt: "Engenheiro de Software Sênior",
  },
  bio: {
    en: "Building the web with care since 2018 — six-plus years across React, Next.js, Node and TypeScript. Less features, better edges, more thought per pixel.",
    pt: "Construindo a web com capricho desde 2018 — seis anos e tantos entre React, Next.js, Node e TypeScript. Menos funcionalidades, bordas melhores, mais pensamento por pixel.",
  },
  location: "Maringá, PR",
  timezone: "America/Sao_Paulo",
  availability: {
    en: "Open to new work",
    pt: "Aberto a novos projetos",
  },

  projects: [
    {
      id: "crivocv",
      title: "crivocv",
      imageUrl: "/work/crivocv.webp",
      description: {
        en: "Resumes tailored per job with AI. Paste the description and get bullets rewritten as nouns of action with metrics, plus an ATS-friendly PDF — in the job's own language.",
        pt: "Currículos adaptados por vaga com IA. Cola a descrição da vaga e recebe bullets reescritos com substantivos de ação e métricas, mais um PDF ATS-friendly — no idioma da vaga.",
      },
      technologies: [
        "Next.js",
        "TypeScript",
        "Drizzle",
        "PostgreSQL",
        "Better Auth",
        "Stripe",
        "Anthropic",
        "Tailwind",
      ],
      demoUrl: "https://crivocv.com/",
      featured: true,
      year: "2026",
      category: { en: "Career SaaS", pt: "SaaS de Carreira" },
      accent: "#0c2a26",
    },
    {
      id: "suresourcing",
      title: "Sure Sourcing",
      imageUrl: "/work/suresourcing.webp",
      description: {
        en: "Import-sourcing consultancy for foreign-trade buyers. Vets suppliers at the origin, calculates the true landed cost — NCM, Incoterms, customs — and protects the margin before a single container ships.",
        pt: "Consultoria de sourcing e importação para compradores de comex. Audita fornecedores na origem, calcula o custo real de chegada — NCM, Incoterms, alfândega — e protege a margem antes do primeiro contêiner embarcar.",
      },
      technologies: ["Next.js", "TypeScript", "Tailwind", "Resend"],
      demoUrl: "https://www.suresourcing.com.br/",
      featured: true,
      year: "2026",
      category: { en: "Trade Consultancy", pt: "Consultoria de Comex" },
      accent: "#be7350",
    },
    {
      id: "penumbria",
      title: "Penumbria",
      imageUrl: "/work/penumbria.webp",
      description: {
        en: "A literary publication in Portuguese — short-form prose and poetry that lives in the half-light between what is said and what stays silent.",
        pt: "Uma publicação literária em português — prosa curta e poesia que vive na penumbra entre o que é dito e o que permanece em silêncio.",
      },
      technologies: ["Next.js", "TypeScript", "MDX", "Tailwind", "Vercel"],
      demoUrl: "https://www.penumbria.com.br/",
      featured: true,
      year: "2026",
      category: { en: "Literary Publication", pt: "Publicação Literária" },
      accent: "#8B1B1B",
    },
    {
      id: "achso",
      title: "Ach so!",
      imageUrl: "/work/achso.webp",
      description: {
        en: "Microlearning for the German Partizip II. Two-minute sessions, tap-only answers, 346 verbs across A1–B2.",
        pt: "Microlearning para o Partizip II alemão. Sessões de dois minutos, respostas só com toque, 346 verbos do A1 ao B2.",
      },
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      demoUrl: "https://achso.com.br/",
      featured: true,
      year: "2026",
      category: { en: "Language EdTech", pt: "EdTech de Idiomas" },
      accent: "#E8B23A",
    },
    {
      id: "neurodecks",
      title: "Neurodecks",
      imageUrl: "/work/neurodecks.webp",
      description: {
        en: "Spaced-repetition flashcards built for people who actually want to learn, not just collect decks.",
        pt: "Flashcards com repetição espaçada para quem quer aprender de verdade, não só colecionar baralhos.",
      },
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      demoUrl: "https://neurodecks.com.br/",
      featured: true,
      year: "2025",
      category: { en: "Learning Tools", pt: "Ferramentas de Estudo" },
      accent: "#5C2E91",
    },
    {
      id: "seiszora",
      title: "SeisZora",
      imageUrl: "/work/seiszora.webp",
      description: {
        en: "Time tracking and project reporting with authentication and PDF delivery. Modular, deliberately small surface area.",
        pt: "Controle de horas e relatórios de projetos com autenticação e entrega em PDF. Modular, com superfície deliberadamente pequena.",
      },
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "SQLite"],
      demoUrl: "https://seiszora.com.br/",
      featured: true,
      year: "2024",
      category: { en: "Productivity", pt: "Produtividade" },
      accent: "#2E5C3E",
    },
    {
      id: "codebrew",
      title: "CodeBrew Labs",
      imageUrl: "/work/codebrew.webp",
      description: {
        en: "Technical writing platform with an emphasis on performance, SEO, and the typographic decisions that make long-form reading feel effortless.",
        pt: "Plataforma de conteúdo técnico com foco em performance, SEO e as decisões tipográficas que tornam a leitura longa fluida.",
      },
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
      demoUrl: "https://www.codebrewlabs.com.br/",
      featured: true,
      year: "2023",
      category: { en: "Editorial Platform", pt: "Plataforma Editorial" },
      accent: "#1F5C8A",
    },
  ],

  experience: [
    {
      id: "1",
      company: "Escale Digital",
      position: {
        en: "Senior Software Engineer",
        pt: "Engenheiro de Software Sênior",
      },
      duration: {
        en: "Mar 2025 — Present",
        pt: "Mar 2025 — Atual",
      },
      description: [
        {
          en: "Front and back-end work across scalable products in Vue.js, Next.js, Node.js and Ruby.",
          pt: "Trabalho front e back-end em produtos escaláveis com Vue.js, Next.js, Node.js e Ruby.",
        },
        {
          en: "Reusable component systems and REST APIs supporting internal automation.",
          pt: "Sistemas de componentes reutilizáveis e APIs REST para automação interna.",
        },
        {
          en: "AWS infrastructure: Lambda, ECS, S3, CloudWatch, CI/CD pipelines.",
          pt: "Infraestrutura AWS: Lambda, ECS, S3, CloudWatch, pipelines de CI/CD.",
        },
      ],
      technologies: ["Vue.js", "Next.js", "Node.js", "Ruby", "AWS", "Tailwind"],
    },
    {
      id: "2",
      company: "CodeBrew Labs",
      position: { en: "Frontend Developer", pt: "Desenvolvedor Frontend" },
      duration: {
        en: "Mar 2023 — Mar 2025",
        pt: "Mar 2023 — Mar 2025",
      },
      description: [
        {
          en: "Maintenance and evolution of the technical content platform.",
          pt: "Manutenção e evolução da plataforma de conteúdo técnico.",
        },
        {
          en: "Editorial work, UX refinement, and continuous component refactoring.",
          pt: "Trabalho editorial, refinamento de UX e refatoração contínua de componentes.",
        },
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "CMS"],
    },
    {
      id: "3",
      company: "C6 Bank",
      position: { en: "Frontend Developer", pt: "Desenvolvedor Frontend" },
      duration: {
        en: "Dec 2021 — Feb 2023",
        pt: "Dez 2021 — Fev 2023",
      },
      description: [
        {
          en: "Feature work for banking systems and PJ payroll products.",
          pt: "Desenvolvimento de funcionalidades para sistemas bancários e produtos de folha PJ.",
        },
        {
          en: "Delivery with a focus on accessibility and automated testing.",
          pt: "Entregas com foco em acessibilidade e testes automatizados.",
        },
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
