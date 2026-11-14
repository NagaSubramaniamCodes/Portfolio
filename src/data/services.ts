export type ServiceOffer = {
  id: string;
  title: string;
  summary: string;
  outcomes: readonly string[];
};

/** Honest freelance/capability offers — no invented clients or metrics. */
export const serviceOffers: readonly ServiceOffer[] = [
  {
    id: "websites",
    title: "Production websites",
    summary:
      "Fast, credible marketing and business sites with modern Next.js delivery, responsive UI, and deploy hygiene (CDN, forms, SEO basics).",
    outcomes: [
      "Public launch-ready sites",
      "Mobile-first layouts",
      "Technical SEO foundations",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce storefronts",
    summary:
      "Catalogue, cart, checkout, payments, and account flows for product businesses — scoped to what the engagement actually includes.",
    outcomes: [
      "Product discovery UX",
      "Checkout / payments integration",
      "Admin-friendly catalogue paths",
    ],
  },
  {
    id: "genai",
    title: "GenAI & LLM/RAG apps",
    summary:
      "Practical conversational and retrieval systems: embeddings, vector search, prompt/evaluation loops, and FastAPI or Next.js service layers.",
    outcomes: [
      "Grounded Q&A assistants",
      "Retrieval pipelines",
      "Evaluation-minded iteration",
    ],
  },
  {
    id: "fullstack-ai",
    title: "Full-stack product builds",
    summary:
      "End-to-end web products that combine UI, APIs, auth, data models, and deployment — including AI-assisted features where they earn their place.",
    outcomes: [
      "Auth and role-aware flows",
      "Postgres-backed data models",
      "Docker / cloud deployment",
    ],
  },
] as const;
