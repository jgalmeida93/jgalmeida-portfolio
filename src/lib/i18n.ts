import type { Locale, LocalizedText } from "@/types/portfolio";

export type Theme = "light" | "dark";

export const locales: Locale[] = ["en", "pt"];
export const defaultLocale: Locale = "en";
export const defaultTheme: Theme = "dark";

const en = {
  nav: {
    work: "Catalog",
    experience: "Field Notes",
    about: "Workshop",
    contact: "Postcard",
    cta: "Get in touch",
  },
  hero: {
    preamble: "Vol. 01",
    issue: "Issue № 26",
    independent: "Independent practice",
    since: "Est. 2018",
    tagline: "Code, craft, and the unglamorous middle.",
    cta: "Open the catalog",
    cv: "Get the CV",
    scroll: "Scroll along",
    what: "What I do",
    role: "Senior Engineer · Web · Brazil",
    manifesto:
      "I make websites and small products that don't fall apart when nobody's watching. The kind of work that ages well.",
  },
  marquee: {
    tags: [
      "Built in Brazil",
      "Hand-coded",
      "Independent",
      "Open to work",
      "Available worldwide",
      "Editorial web",
      "Side projects encouraged",
    ],
  },
  work: {
    tag: "Section 01 / Catalog",
    heading: "Selected",
    headingEm: "works.",
    subhead:
      "A short index of recent things — a Portuguese literary journal, a German grammar app, study tools, time-trackers. Different shapes, same hands.",
    entry: "Entry",
    visit: "Visit live",
    noLink: "Private",
  },
  experience: {
    tag: "Section 02 / Field Notes",
    heading: "Where I",
    headingEm: "punched in.",
    subhead:
      "From banking floors to media platforms to scaling teams — picking up the pragmatic habits that don't fit in a job description.",
    stack: "Stack",
  },
  about: {
    tag: "Section 03 / Workshop",
    heading: "How I",
    headingEm: "work.",
    based: "Based in Maringá, Paraná",
    paragraphs: [
      "I'm a senior engineer with a soft spot for editorial typography, slow-cooked side projects and code that someone six months from now won't curse me for.",
      "Day-to-day is React, TypeScript and Next.js, but the interesting work happens between the layers — turning vague product intentions into systems that survive the meeting with real users.",
      "Outside of client work I keep small things alive: a literary publication, a German microlearning tool, this portfolio. They give me an excuse to question my own defaults.",
    ],
    inventoryHeading: "Inventory",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      infra: "Infra",
      languages: "Languages",
      tools: "Tools",
    },
  },
  contact: {
    tag: "Section 04 / Postcard",
    heading: "Got something",
    headingEm: "good to build?",
    writeTo: "Write to",
    blurb:
      "Open to senior engineering roles, focused freelance, and small collaborations where the brief is interesting and the team is kind.",
    labels: {
      email: "Mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "X / Twitter",
    },
  },
  footer: {
    colophon: "Set in Big Shoulders, Fraunces & Space Mono",
    stack: "Built with Next.js · Hosted on Vercel",
    lastUpdate: "Last update",
  },
  misc: {
    page: "PAGE",
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  nav: {
    work: "Catálogo",
    experience: "Cadernos de Campo",
    about: "Oficina",
    contact: "Cartão Postal",
    cta: "Conversar",
  },
  hero: {
    preamble: "Vol. 01",
    issue: "Edição № 26",
    independent: "Prática independente",
    since: "Desde 2018",
    tagline: "Código, capricho e o meio sem glamour.",
    cta: "Abrir o catálogo",
    cv: "Baixar o CV",
    scroll: "Continue rolando",
    what: "O que eu faço",
    role: "Engenheiro Sênior · Web · Brasil",
    manifesto:
      "Faço sites e produtos pequenos que não desmontam quando ninguém está olhando. O tipo de trabalho que envelhece bem.",
  },
  marquee: {
    tags: [
      "Feito no Brasil",
      "Código artesanal",
      "Independente",
      "Aberto a propostas",
      "Disponível mundialmente",
      "Web editorial",
      "Projetos pessoais incentivados",
    ],
  },
  work: {
    tag: "Seção 01 / Catálogo",
    heading: "Trabalhos",
    headingEm: "selecionados.",
    subhead:
      "Um índice curto de coisas recentes — um periódico literário em português, um app de gramática alemã, ferramentas de estudo, rastreador de horas. Formatos diferentes, mesmas mãos.",
    entry: "Entrada",
    visit: "Ver no ar",
    noLink: "Privado",
  },
  experience: {
    tag: "Seção 02 / Cadernos de Campo",
    heading: "Onde eu",
    headingEm: "bati ponto.",
    subhead:
      "De andares de banco a plataformas de mídia e times em escala — coletando os hábitos pragmáticos que não cabem em um job description.",
    stack: "Stack",
  },
  about: {
    tag: "Seção 03 / Oficina",
    heading: "Como eu",
    headingEm: "trabalho.",
    based: "Baseado em Maringá, Paraná",
    paragraphs: [
      "Sou engenheiro sênior com um carinho especial por tipografia editorial, projetos pessoais cozinhados em fogo baixo e código que o eu-de-seis-meses não vá amaldiçoar.",
      "No dia a dia uso React, TypeScript e Next.js, mas o trabalho interessante acontece entre as camadas — transformando intenções vagas de produto em sistemas que sobrevivem ao encontro com usuários reais.",
      "Fora do trabalho com clientes, mantenho coisas pequenas vivas: uma publicação literária, uma ferramenta de microaprendizado de alemão, este portfólio. Servem de desculpa para questionar meus próprios padrões.",
    ],
    inventoryHeading: "Inventário",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      infra: "Infra",
      languages: "Linguagens",
      tools: "Ferramentas",
    },
  },
  contact: {
    tag: "Seção 04 / Cartão Postal",
    heading: "Tem algo",
    headingEm: "bom pra construir?",
    writeTo: "Escreva para",
    blurb:
      "Aberto a vagas sênior, freelas focados e colaborações pequenas onde o briefing seja interessante e o time seja gentil.",
    labels: {
      email: "Correio",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "X / Twitter",
    },
  },
  footer: {
    colophon: "Composto em Big Shoulders, Fraunces & Space Mono",
    stack: "Feito com Next.js · Hospedado na Vercel",
    lastUpdate: "Última atualização",
  },
  misc: {
    page: "PÁG.",
  },
};

export const dictionary: Record<Locale, Dictionary> = { en, pt };

export function localized(loc: Locale, value: LocalizedText | string): string {
  return typeof value === "string" ? value : value[loc];
}
