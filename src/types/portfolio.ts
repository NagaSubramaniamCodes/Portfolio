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
  /** Asset not yet supplied — render a placeholder. */
  placeholder?: boolean;
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
  contribution: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  images: readonly ProjectImage[];
  caseStudy: readonly CaseStudyBlock[];
  recognition?: string;
  featured?: boolean;
  featuredOrder?: number;
  group?:
    | "flagship"
    | "ai-ml"
    | "computer-vision"
    | "iot"
    | "foundations"
    | "freelance";
};

export type SkillStatus = "project" | "working" | "learning";

export type Skill = {
  name: string;
  status: SkillStatus;
  projectSlugs?: readonly string[];
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  items: readonly Skill[];
};

export type Credential = {
  id: string;
  label: string;
  title: string;
  detail: string;
  status?: "active" | "historical";
  todo?: string;
};

export type ExperienceItem = {
  id: string;
  kind: "freelance" | "product" | "collaboration" | "education" | "training";
  title: string;
  org: string;
  period: string;
  bullets: readonly string[];
};

export type Achievement = {
  id: string;
  label: string;
  title: string;
  detail: string;
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
