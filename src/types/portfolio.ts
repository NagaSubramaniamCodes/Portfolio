export type Ownership = "freelance" | "solo" | "team";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  /** Original illustration, not a screenshot of the product. */
  concept?: boolean;
};

/**
 * A case-study block. `todo` is an internal note and must not be rendered.
 */
export type CaseStudyBlock = {
  id: string;
  heading: string;
  body?: string;
  todo?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  ownership: Ownership;
  summary: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  images: readonly ProjectImage[];
  caseStudy: readonly CaseStudyBlock[];
  recognition?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
};

export type Skill = {
  name: string;
  /** Slugs of projects that name this tool. */
  projectSlugs: readonly string[];
  /** Used when the evidence is this site rather than a featured project. */
  note?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: readonly Skill[];
};

export type Credential = {
  id: string;
  label: string;
  title: string;
  detail: string;
  /** Internal note. Do not render. */
  todo?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type PracticeNote = {
  label: string;
  value: string;
  href?: string;
};
