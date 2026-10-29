import type { SkillGroup } from "@/types/portfolio";

/**
 * Tools named on the featured projects, or used to build this site.
 * This is not a proficiency scale.
 */
export const skillGroups: readonly SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    items: [
      {
        name: "TypeScript",
        projectSlugs: [],
        note: "This site",
      },
      {
        name: "JavaScript",
        projectSlugs: [],
        note: "This site",
      },
      {
        name: "Python",
        projectSlugs: ["conversational-rag-assistant"],
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      {
        name: "React",
        projectSlugs: ["chola-power", "dharani-fitness"],
        note: "This site",
      },
      {
        name: "Next.js",
        projectSlugs: ["chola-power", "dharani-fitness"],
        note: "This site",
      },
      {
        name: "Tailwind CSS",
        projectSlugs: [],
        note: "This site",
      },
      {
        name: "HTML and CSS",
        projectSlugs: ["chola-power", "dharani-fitness"],
        note: "This site",
      },
      {
        name: "Responsive layout",
        projectSlugs: ["chola-power", "dharani-fitness"],
        note: "This site",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend and access",
    items: [
      {
        name: "FastAPI",
        projectSlugs: ["conversational-rag-assistant"],
      },
      {
        name: "Google Authentication",
        projectSlugs: ["dharani-fitness"],
      },
      {
        name: "Clerk",
        projectSlugs: ["sportshub"],
      },
      {
        name: "RBAC",
        projectSlugs: ["sportshub"],
      },
      {
        name: "Razorpay",
        projectSlugs: ["dharani-fitness", "sportshub"],
      },
    ],
  },
  {
    id: "data",
    title: "Data",
    items: [
      {
        name: "Neon Database",
        projectSlugs: ["dharani-fitness"],
      },
      {
        name: "Relational data models",
        projectSlugs: ["sportshub"],
      },
    ],
  },
  {
    id: "models",
    title: "Models and retrieval",
    items: [
      {
        name: "Llama",
        projectSlugs: ["conversational-rag-assistant"],
      },
      {
        name: "Mistral",
        projectSlugs: ["conversational-rag-assistant"],
      },
      {
        name: "FAISS",
        projectSlugs: ["conversational-rag-assistant"],
      },
      {
        name: "Sentence Transformers",
        projectSlugs: ["conversational-rag-assistant"],
      },
      {
        name: "Hugging Face",
        projectSlugs: ["conversational-rag-assistant"],
      },
      {
        name: "Retrieval-augmented generation",
        projectSlugs: ["conversational-rag-assistant"],
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery",
    items: [
      {
        name: "Docker",
        projectSlugs: ["chola-power", "conversational-rag-assistant"],
      },
      {
        name: "Cloudflare CDN",
        projectSlugs: ["chola-power"],
      },
      {
        name: "Vercel",
        projectSlugs: ["dharani-fitness"],
      },
    ],
  },
];
