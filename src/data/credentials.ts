import type { Achievement, Credential, ExperienceItem } from "@/types/portfolio";

export const credentials: readonly Credential[] = [
  {
    id: "nptel-motivated",
    label: "Recognition",
    title: "NPTEL Motivated Learner — JAN–APR 2025",
    detail:
      "IIT Madras / SWAYAM Certificate of Appreciation. Criteria: appeared in ≥8 exams (Jul 2023–Jan 2025), passed ≥75% of courses appeared, and passed at least one exam in each of four semesters.",
  },
  {
    id: "nptel-enthusiast",
    label: "Recognition",
    title: "NPTEL Enthusiast — JUL–DEC 2024",
    detail:
      "IIT Madras / SWAYAM Certificate of Appreciation. Criteria: appeared in ≥8 exams (Jan 2023–Jul 2024) and passed ≥75% of courses appeared.",
  },
  {
    id: "nasscom",
    label: "Certification",
    title: "NASSCOM AI — Data Scientist: Visualizations V3.0",
    detail:
      "NSQF Level 6. Certificate No. CN-0949070. Score 93.47. Issued via Bosscoder Software Services Private Limited.",
  },
  {
    id: "ai-900",
    label: "Certification",
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    detail:
      "Earned 5 Mar 2023. Credential ID ECC83FCCCC9B7020 · Certification No. 391BBH-B0144B. Online verifiable Microsoft credential.",
  },
  {
    id: "az-900",
    label: "Certification",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    detail:
      "Earned 12 Mar 2023. Credential ID 18ECEB333CC03FE2 · Certification No. BEN526-3BD0CB. Online verifiable Microsoft credential.",
  },
  {
    id: "oracle",
    label: "Certification",
    title: "Oracle Cloud Data Management 2023 Certified Foundations Associate",
    detail:
      "Earned 5 Jul 2024. Credential 100711164OCDMF2023. Valid until 5 Jul 2026 — recorded as time-bounded, not presented as permanently current.",
    status: "historical",
  },
  {
    id: "nptel-courses",
    label: "Coursework",
    title: "Selected NPTEL / SWAYAM certifications",
    detail:
      "Verified course certificates include Soft Skills, Soft Skill Development, Project Management, Leadership and Team Effectiveness, Forests and their Management, Conservation Economics, Conservation Geography, Wildlife Ecology, and One Health.",
  },
  {
    id: "hackerrank",
    label: "Skills",
    title: "HackerRank Python and SQL",
    detail:
      "Python and SQL practice credentials on HackerRank. Public badge URLs can be linked when profile visibility is confirmed.",
    todo: "Confirm badge links before publishing verification URLs.",
  },
];

export const achievements: readonly Achievement[] = [
  {
    id: "hackathon",
    label: "Award",
    title: "Hack-AI-thon — First Place",
    detail:
      "KARE ACM & Diebold Nixdorf Hack-AI-thon (Dec 2024). 24-hour competition, 1st place among 39+ teams, ₹5,000 prize. Multimodal AI Virtual Assistant — team contribution.",
  },
  {
    id: "patent",
    label: "Patent",
    title: "Indian Patent No. 573184",
    detail:
      "Flower Plucking Robotic Arm. Appl. 202241055456 (Sept 2022), granted Oct 2025 under Kalasalingam Academy of Research and Education. Attribution matches the official patent record. FlowerBot research-paper authorship is not claimed.",
  },
  {
    id: "publication",
    label: "Publication",
    title: "Earlier Cancer and Tumor Detection Using Deep Learning Techniques",
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
