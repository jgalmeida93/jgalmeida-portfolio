// Section routes shared by nav, command palette and sitemap.
export const SECTION_SLUGS = ["work", "experience", "about", "contact"] as const;

export type SectionSlug = (typeof SECTION_SLUGS)[number];
