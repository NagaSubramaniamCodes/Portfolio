import type { PracticeNote } from "@/types/portfolio";

export const site = {
  name: "Nagasubramaniam G",
  role: "AI Solutions Engineer & Full-Stack Developer",
  description:
    "Freelance portfolio of Nagasubramaniam G, an AI solutions engineer and full-stack developer working on generative AI, automation, SaaS, and the web.",
  email: "nagasubramaniamg@gmail.com",
  github: "https://github.com/NagaSubramaniamCodes",
  linkedin: "https://www.linkedin.com/in/nagasubramaniam-g/",
  copyrightYear: 2026,
} as const;

export const practiceNotes: readonly PracticeNote[] = [
  {
    label: "Practice",
    value: "Freelance engagements",
  },
  {
    label: "Live website",
    value: "cholapower.in",
    href: "https://cholapower.in",
  },
  {
    label: "Recognition",
    value: "Hack-AI-thon, first place",
  },
];

export const profileLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
] as const;
