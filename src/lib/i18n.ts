import type { Locale, LocalizedText } from "@/types/portfolio";

export type Theme = "light" | "dark";

export const locales: Locale[] = ["en", "pt"];
export const defaultLocale: Locale = "en";
export const defaultTheme: Theme = "dark";

const en = {
  nav: {
    work: "Work",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    cta: "Get in touch",
  },
  hero: {
    role: "Senior Software Engineer",
    available: "Open to new work",
    tagline: "Building durable software for the web.",
    manifesto:
      "Six-plus years across React, Next.js, Node and TypeScript — fewer features, better edges, more thought per pixel.",
    cta: "View work",
    cv: "Download CV",
    scroll: "Scroll",
    recent: "Recent work",
  },
  marquee: {
    tags: [
      "Product engineering",
      "Editorial web",
      "Design-minded",
      "Built to last",
      "React · Next.js · TypeScript",
      "Open to work",
    ],
  },
  work: {
    tag: "Selected Work",
    heading: "Selected",
    headingEm: "work.",
    subhead:
      "A short index of recent things — a literary journal, a German grammar app, study tools, a time-tracker, an AI résumé builder. Different shapes, same hands.",
    visit: "Visit",
    noLink: "Private",
  },
  experience: {
    tag: "Experience",
    heading: "Where I've",
    headingEm: "worked.",
    subhead:
      "From banking floors to media platforms to scaling teams — the pragmatic habits that don't fit in a job description.",
    stack: "Stack",
  },
  about: {
    tag: "About",
    heading: "How I",
    headingEm: "work.",
    based: "Maringá, Paraná — Brazil",
    paragraphs: [
      "I'm Jonas — a senior engineer with a soft spot for editorial typography, slow-cooked side projects and code that someone six months from now won't curse me for.",
      "Day-to-day is React, TypeScript and Next.js, but the interesting work happens between the layers — turning vague product intentions into systems that survive the meeting with real users.",
      "Outside of client work I keep small things alive: a literary publication, a German microlearning tool, this portfolio. They give me an excuse to question my own defaults.",
    ],
    capabilitiesHeading: "Capabilities",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      infra: "Infrastructure",
      languages: "Languages",
      tools: "Tooling",
    },
  },
  contact: {
    tag: "Contact",
    heading: "Let's build",
    headingEm: "something good.",
    writeTo: "Write to",
    blurb:
      "Open to senior engineering roles, focused freelance, and small collaborations where the brief is interesting and the team is kind.",
    labels: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "X / Twitter",
    },
  },
  footer: {
    signature: "Designed & built by Jonas Almeida.",
    builtWith: "Set in Bricolage & Satoshi · Next.js · Vercel",
    lastUpdate: "Last updated",
  },
  command: {
    placeholder: "Type a command or search…",
    empty: "Nothing found.",
    open: "Menu",
    groups: {
      navigate: "Navigate",
      connect: "Connect",
      actions: "Actions",
    },
    actions: {
      work: "Selected work",
      experience: "Experience",
      about: "About",
      contact: "Contact",
      home: "Home",
      email: "Send an email",
      copyEmail: "Copy email address",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "X / Twitter",
      cv: "Download CV",
      theme: "Toggle theme",
      language: "Switch to Portuguese",
    },
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  nav: {
    work: "Trabalho",
    experience: "Experiência",
    about: "Sobre",
    contact: "Contato",
    cta: "Conversar",
  },
  hero: {
    role: "Engenheiro de Software Sênior",
    available: "Aberto a novos projetos",
    tagline: "Construindo software durável para a web.",
    manifesto:
      "Seis anos e tantos entre React, Next.js, Node e TypeScript — menos funcionalidades, bordas melhores, mais pensamento por pixel.",
    cta: "Ver trabalhos",
    cv: "Baixar CV",
    scroll: "Rolar",
    recent: "Trabalhos recentes",
  },
  marquee: {
    tags: [
      "Engenharia de produto",
      "Web editorial",
      "Atenção ao design",
      "Feito para durar",
      "React · Next.js · TypeScript",
      "Aberto a propostas",
    ],
  },
  work: {
    tag: "Trabalhos Selecionados",
    heading: "Trabalhos",
    headingEm: "selecionados.",
    subhead:
      "Um índice curto de coisas recentes — um periódico literário, um app de gramática alemã, ferramentas de estudo, um rastreador de horas, um gerador de currículos com IA. Formatos diferentes, mesmas mãos.",
    visit: "Visitar",
    noLink: "Privado",
  },
  experience: {
    tag: "Experiência",
    heading: "Onde eu",
    headingEm: "trabalhei.",
    subhead:
      "De andares de banco a plataformas de mídia e times em escala — os hábitos pragmáticos que não cabem em um job description.",
    stack: "Stack",
  },
  about: {
    tag: "Sobre",
    heading: "Como eu",
    headingEm: "trabalho.",
    based: "Maringá, Paraná — Brasil",
    paragraphs: [
      "Sou o Jonas — engenheiro sênior com um carinho especial por tipografia editorial, projetos pessoais cozinhados em fogo baixo e código que o eu-de-seis-meses não vá amaldiçoar.",
      "No dia a dia uso React, TypeScript e Next.js, mas o trabalho interessante acontece entre as camadas — transformando intenções vagas de produto em sistemas que sobrevivem ao encontro com usuários reais.",
      "Fora do trabalho com clientes, mantenho coisas pequenas vivas: uma publicação literária, uma ferramenta de microaprendizado de alemão, este portfólio. Servem de desculpa para questionar meus próprios padrões.",
    ],
    capabilitiesHeading: "Competências",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      infra: "Infraestrutura",
      languages: "Linguagens",
      tools: "Ferramentas",
    },
  },
  contact: {
    tag: "Contato",
    heading: "Vamos construir",
    headingEm: "algo bom.",
    writeTo: "Escreva para",
    blurb:
      "Aberto a vagas sênior, freelas focados e colaborações pequenas onde o briefing seja interessante e o time seja gentil.",
    labels: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "X / Twitter",
    },
  },
  footer: {
    signature: "Projetado e construído por Jonas Almeida.",
    builtWith: "Composto em Bricolage & Satoshi · Next.js · Vercel",
    lastUpdate: "Última atualização",
  },
  command: {
    placeholder: "Digite um comando ou busque…",
    empty: "Nada encontrado.",
    open: "Menu",
    groups: {
      navigate: "Navegar",
      connect: "Conectar",
      actions: "Ações",
    },
    actions: {
      work: "Trabalhos selecionados",
      experience: "Experiência",
      about: "Sobre",
      contact: "Contato",
      home: "Início",
      email: "Enviar um email",
      copyEmail: "Copiar endereço de email",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "X / Twitter",
      cv: "Baixar CV",
      theme: "Alternar tema",
      language: "Mudar para inglês",
    },
  },
};

export const dictionary: Record<Locale, Dictionary> = { en, pt };

export function localized(loc: Locale, value: LocalizedText | string): string {
  return typeof value === "string" ? value : value[loc];
}
