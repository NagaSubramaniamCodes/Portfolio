import type { Achievement, Credential, ExperienceItem } from "@/types/portfolio";

export const credentials: readonly Credential[] = [
  {
    id: "nasscom",
    label: "Certification",
    title: "NASSCOM AI — Data Scientist: Visualizations V3.0",
    detail: "NSQF Level 6 credential in AI data science visualizations.",
  },
  {
    id: "ai-900",
    label: "Certification",
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    detail: "Azure AI fundamentals credential.",
  },
  {
    id: "az-900",
    label: "Certification",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    detail: "Azure cloud fundamentals credential.",
  },
  {
    id: "oracle",
    label: "Certification",
    title: "Oracle Cloud Infrastructure Database Management",
    detail:
      "Historical credential. Recorded validity ended July 2026 — not presented as currently valid.",
    status: "historical",
  },
  {
    id: "nptel",
    label: "Recognition",
    title: "NPTEL recognition and selected courses",
    detail: "Selected NPTEL coursework and recognition from verified records.",
  },
  {
    id: "hackerrank",
    label: "Skills",
    title: "HackerRank Python and SQL",
    detail:
      "Python and SQL credentials where supporting evidence is available on the profile.",
    todo: "Confirm badge links before publishing verification URLs.",
  },
];

export const achievements: readonly Achievement[] = [
  {
    id: "hackathon",
    label: "Award",
    title: "Hack-AI-thon — First Place",
    detail:
      "24-hour competition, first place among 39+ teams, INR 5,000 prize. Multimodal AI Virtual Assistant — team contribution.",
  },
  {
    id: "patent",
    label: "Patent",
    title: "Indian Patent No. 573184",
    detail:
      "Flower Plucking Robotic Arm. Attribution matches the official patent record. FlowerBot research-paper authorship is not claimed.",
  },
  {
    id: "publication",
    label: "Publication",
    title: "Cancer and Tumor Detection Using Deep Learning Techniques",
    detail:
      "ICMCTT 2024. Fourth author. Official proceedings details follow the verified publication record.",
  },
];

export const experienceItems: readonly ExperienceItem[] = [
  {
    id: "freelance-chola",
    kind: "freelance",
    title: "Production website delivery",
    org: "Chola Power · Freelance",
    period: "Client engagement",
    bullets: [
      "Delivered a live Next.js 15 / React 19 website with Docker, Cloudflare CDN, DDoS protection, transactional email, and technical SEO.",
      "Focused on trustworthy public presence for a solar-energy business.",
    ],
  },
  {
    id: "freelance-dharani",
    kind: "freelance",
    title: "E-commerce full-stack delivery",
    org: "Dharani Fitness · Freelance",
    period: "Client engagement",
    bullets: [
      "Built a public storefront with catalogue, cart, checkout, Razorpay, Google sign-in, accounts, and product administration.",
      "Live at dharanifitness.in.",
    ],
  },
  {
    id: "sportshub",
    kind: "product",
    title: "Solo SaaS product engineering",
    org: "SportsHub",
    period: "Solo product",
    bullets: [
      "Owned architecture through deployment for a multi-role facility booking platform.",
      "29+ relational models, Clerk RBAC, Razorpay, and AI slot recommendations.",
    ],
  },
  {
    id: "rag",
    kind: "collaboration",
    title: "LLM / RAG systems",
    org: "Conversational AI Assistant · Team",
    period: "Collaborative project",
    bullets: [
      "Contributed to retrieval, embeddings, model interaction, evaluation, and FastAPI integration.",
      "Reported F1 above 89% after iterative tuning.",
    ],
  },
  {
    id: "education",
    kind: "education",
    title: "B.Tech Computer Science — AI & ML",
    org: "Kalasalingam Academy of Research and Education",
    period: "August 2021 – May 2025",
    bullets: [
      "Specialisation in Artificial Intelligence and Machine Learning.",
      "No formal employment history is recorded — experience is project and freelance based.",
    ],
  },
  {
    id: "bosscoder",
    kind: "training",
    title: "Data Science and Machine Learning",
    org: "Bosscoder Academy",
    period: "Technical training",
    bullets: [
      "Structured training in data science and machine learning alongside degree work.",
    ],
  },
];
