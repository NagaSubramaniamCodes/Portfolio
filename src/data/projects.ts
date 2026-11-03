import type { Ownership, Project } from "@/types/portfolio";

export const ownershipLabel: Record<Ownership, string> = {
  freelance: "Freelance",
  solo: "Solo",
  team: "Team",
};

/**
 * Authoritative project records from the portfolio descriptions document.
 * Kept projects that have real visual assets. Placeholder-only entries removed.
 */
export const projects: readonly Project[] = [
  {
    slug: "sportshub",
    title: "SportsHub",
    category: "Solo Product | Full-Stack SaaS",
    ownership: "solo",
    featured: true,
    featuredOrder: 1,
    group: "flagship",
    summary:
      "SportsHub is a production-oriented sports facility management platform designed to bring discovery, booking, access control and payment workflows into one coherent product. I designed and delivered the system end to end — from the data model and role-based access controls to the customer experience, payment flow, and deployment pipeline. The platform uses more than 29 relational database models to support the operational complexity behind a real multi-role SaaS product.",
    contribution:
      "I owned product architecture, frontend, backend, database design, authentication, RBAC, payment integration, AI-powered slot recommendation, and deployment. The result demonstrates that I can take an ambiguous product problem and turn it into a working, production-oriented system rather than a standalone prototype.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Prisma",
      "Clerk v6",
      "RBAC",
      "Razorpay",
      "AI recommendations",
      "Docker",
      "Cloud deployment",
    ],
    links: [],
    images: [
      {
        src: "/images/projects/sportshub/concept.webp",
        alt: "Concept visual of a sports facility booking dashboard with venues, calendar, and time slots.",
        caption:
          "Concept visual. An original interface illustration, not a product screenshot.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    caseStudy: [
      {
        id: "overview",
        heading: "Overview",
        body: "SportsHub is a production-ready sports facility management platform that unifies discovery, booking, access control, and payment workflows into one coherent product experience.",
      },
      {
        id: "problem",
        heading: "Problem",
        body: "Facility operators and players need a single system for venue discovery, slot booking, role-based access, and payments. Fragmented tools create operational friction and a weak booking experience.",
      },
      {
        id: "solution",
        heading: "Solution",
        body: "A multi-role SaaS platform with a relational data model of more than 29 models, Clerk-based authentication and RBAC, Razorpay payments, and AI-powered slot recommendations.",
      },
      {
        id: "architecture",
        heading: "Architecture",
        body: "Next.js and React on the frontend, TypeScript throughout, PostgreSQL with Prisma for the data layer, Clerk v6 for authentication and RBAC, Razorpay for payments, and Docker-backed cloud deployment.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Solo ownership across product architecture, frontend, backend, database design, authentication, RBAC, payment integration, AI slot recommendation, and deployment.",
      },
      {
        id: "outcomes",
        heading: "Outcomes and evidence",
        body: "Verified claims focus on system scope and ownership: 29+ relational models, end-to-end solo delivery, and the named technology stack. Live URL, usage metrics, and revenue figures are not published here.",
      },
    ],
  },
  {
    slug: "chola-power",
    title: "Chola Power",
    category: "Freelance Client Delivery | Production Web Engineering",
    ownership: "freelance",
    featured: true,
    featuredOrder: 2,
    group: "flagship",
    summary:
      "Chola Power is a live digital platform for a solar-energy business. I delivered a fast, trustworthy web experience that helps a real company communicate its services, build credibility, and support customer enquiries — pairing a polished front end with deployment, deliverability, security, and discoverability concerns that are often missing from portfolio-only work.",
    contribution:
      "I built and deployed the production website, including the modern responsive interface, Docker-based delivery, Cloudflare CDN and DDoS protection, transactional email integration, and technical SEO foundation.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Docker",
      "Cloudflare CDN",
      "DDoS protection",
      "Transactional email",
      "Technical SEO",
    ],
    links: [
      {
        label: "cholapower.in",
        href: "https://cholapower.in",
      },
    ],
    images: [
      {
        src: "/images/projects/chola-power/homepage-desktop.webp",
        alt: "Desktop screenshot of the live Chola Power homepage. Brand and design belong to Chola Power Private Limited.",
        caption: "Live homepage on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/chola-power/homepage-mobile.webp",
        alt: "Phone screenshot of the live Chola Power homepage. Brand and design belong to Chola Power Private Limited.",
        caption: "Live homepage on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
      {
        src: "/images/projects/chola-power/gallery-desktop.webp",
        alt: "Desktop screenshot of the Chola Power project gallery. Photographs belong to Chola Power Private Limited.",
        caption: "Live project gallery on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/chola-power/gallery-mobile.webp",
        alt: "Phone screenshot of the Chola Power project gallery. Photographs belong to Chola Power Private Limited.",
        caption: "Live project gallery on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
    ],
    caseStudy: [
      {
        id: "overview",
        heading: "Overview",
        body: "A live production website for Chola Power, a solar-energy business, designed to communicate services clearly and support customer enquiries.",
      },
      {
        id: "problem",
        heading: "Business problem",
        body: "The business needed a trustworthy public digital presence — fast, secure, and discoverable — rather than a brochure that ignored deployment and SEO realities.",
      },
      {
        id: "approach",
        heading: "Design and development",
        body: "Built with Next.js 15 and React 19 as a responsive public site, with Docker-based delivery, Cloudflare CDN and DDoS protection, transactional email, and a technical SEO foundation.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Freelance ownership of implementation and production deployment for the public website. Client brand assets and photography remain the property of Chola Power Private Limited.",
      },
      {
        id: "evidence",
        heading: "Live evidence",
        body: "The site is public at cholapower.in. Screenshots were captured from the live site. Traffic, leads, and testimonials are not claimed here.",
      },
    ],
  },
  {
    slug: "conversational-rag-assistant",
    title: "Conversational AI Assistant with RAG",
    category: "Team Project | LLM and Retrieval Engineering",
    ownership: "team",
    featured: true,
    featuredOrder: 3,
    group: "flagship",
    summary:
      "A conversational AI assistant that combines large language models with semantic retrieval to produce more grounded, useful responses. The system was built around Llama and Mistral models, FAISS-powered retrieval, Sentence Transformers embeddings, and a FastAPI service layer. Iterative prompt and retrieval tuning produced an F1 score above 89 percent.",
    contribution:
      "As part of the team, I contributed to building and refining the retrieval-augmented workflow, including embedding-based search, model interaction, evaluation, and application integration. The project demonstrates practical understanding of the trade-offs that matter in real RAG systems: retrieval quality, relevance, prompt design, latency, and repeatable evaluation.",
    technologies: [
      "Python",
      "Llama",
      "Mistral",
      "FAISS",
      "Sentence Transformers",
      "Hugging Face",
      "PyTorch",
      "FastAPI",
      "Docker",
    ],
    links: [],
    images: [
      {
        src: "/images/projects/rag-assistant/concept.webp",
        alt: "Concept visual of a document assistant with retrieval diagram and grounded conversation.",
        caption:
          "Concept visual. An original illustration of the RAG workflow, not a live product screenshot.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    caseStudy: [
      {
        id: "overview",
        heading: "Overview",
        body: "A collaborative conversational assistant that pairs LLMs with semantic retrieval so answers stay grounded in retrieved context.",
      },
      {
        id: "architecture",
        heading: "Architecture",
        body: "Document processing → chunking → embeddings (Sentence Transformers) → vector retrieval (FAISS) → LLM generation (Llama / Mistral) → response. Served through a FastAPI layer and packaged with Docker.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Team contribution across the RAG workflow: embedding-based search, model interaction, evaluation, and application integration. This is collaborative work, not a solo build.",
      },
      {
        id: "evaluation",
        heading: "Evaluation",
        body: "Reported F1 score above 89% after iterative prompt and retrieval tuning. The figure is retained as project-reported evidence and should be read in the context of the team evaluation setup.",
      },
    ],
  },
  {
    slug: "multimodal-ai-virtual-assistant",
    title: "Multimodal AI Virtual Assistant",
    category: "Hackathon Team Project | GenAI Product Prototype",
    ownership: "team",
    group: "ai-ml",
    summary:
      "A 24-hour Hack-AI-thon team build that turned a multimodal GenAI concept into a working demonstration under extreme time pressure. The project placed first among more than 39 teams and won an INR 5,000 prize.",
    contribution:
      "I contributed as a core team member to GenAI solution shaping, rapid prototyping, integration, and the final demonstration. Judging recognised the team delivery, not an individual award.",
    technologies: [
      "Generative AI",
      "Multimodal AI",
      "Rapid prototyping",
      "Python",
      "AI product development",
    ],
    links: [],
    recognition: "First place, Hack-AI-thon · 39+ teams · INR 5,000 prize",
    images: [
      {
        src: "/images/projects/multimodal-assistant/concept.webp",
        alt: "Concept visual of a multimodal assistant with text, image, audio, and video panels.",
        caption: "Concept visual. Original illustration of the hackathon concept.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    caseStudy: [
      {
        id: "problem",
        heading: "Problem",
        body: "Hackathon constraints force hard scope choices. The team needed a multimodal assistant concept that could be demonstrated convincingly within 24 hours.",
      },
      {
        id: "approach",
        heading: "Approach",
        body: "We prioritised a clear user flow, rapid GenAI prototyping, and a demonstration narrative judges could understand quickly.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Core-team contribution across solution design, prototyping, integration, and demo. Attribution remains collaborative.",
      },
      {
        id: "outcome",
        heading: "Recognition",
        body: "First place among 39+ teams with an INR 5,000 prize — evidence of product judgement and delivery under pressure.",
      }
    ],
  },
  {
    slug: "dharani-fitness",
    title: "Dharani Fitness",
    category: "Freelance Client Delivery | E-commerce",
    ownership: "freelance",
    group: "freelance",
    featured: true,
    featuredOrder: 4,
    summary:
      "A live freelance e-commerce website for Dharani Fitness Equipment. The public storefront supports product discovery, catalogue browsing, cart flows, and purchase/quotation paths, with checkout, Razorpay, Google sign-in, accounts, order history, and product administration included in the engagement.",
    contribution:
      "I owned full-stack freelance delivery for the storefront experience and supporting commerce workflows — catalogue, cart, checkout/payments, authentication, customer accounts, order history, and product administration — through to a public production deployment.",
    technologies: [
      "Next.js",
      "Neon Database",
      "Vercel",
      "Razorpay",
      "Google Authentication",
    ],
    links: [
      {
        label: "dharanifitness.in",
        href: "https://dharanifitness.in/",
      },
    ],
    images: [
      {
        src: "/images/projects/dharani-fitness/hero.webp",
        alt: "Desktop screenshot of the live Dharani Fitness homepage.",
        caption: "Live homepage on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/catalogue.webp",
        alt: "Desktop screenshot of the public Dharani Fitness equipment catalogue.",
        caption: "Public catalogue on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/product-detail.webp",
        alt: "Desktop screenshot of a public Dharani Fitness product page.",
        caption: "Public product page on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/cart.webp",
        alt: "Desktop screenshot of the public Dharani Fitness cart page.",
        caption: "Public cart page with an empty cart.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/hero-mobile.webp",
        alt: "Phone screenshot of the live Dharani Fitness homepage.",
        caption: "Live homepage on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
    ],
    caseStudy: [
      {
        id: "problem",
        heading: "Business problem",
        body: "A gym-equipment business needed a trustworthy online catalogue and commerce path that customers could use on desktop and mobile — not a static brochure.",
      },
      {
        id: "approach",
        heading: "Approach",
        body: "Built with Next.js, Neon Database, Vercel hosting, Razorpay payments, and Google Authentication, focusing on responsive storefront UX, catalogue discovery, and reliable purchase/account flows.",
      },
      {
        id: "contribution",
        heading: "My contribution",
        body: "Full-stack freelance ownership across the public storefront and stated commerce features through production launch.",
      },
      {
        id: "outcome",
        heading: "Live evidence",
        body: "Public at dharanifitness.in. Screenshots document the live site. Sales or conversion metrics are not claimed here.",
      }
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): readonly Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getSupportingProjects(): readonly Project[] {
  return projects
    .filter((project) => !project.featured)
    .slice()
    .sort((a, b) => {
      const aLive = a.links.length > 0 ? 0 : 1;
      const bLive = b.links.length > 0 ? 0 : 1;
      if (aLive !== bLive) return aLive - bLive;
      if (a.ownership === "freelance" && b.ownership !== "freelance") return -1;
      if (b.ownership === "freelance" && a.ownership !== "freelance") return 1;
      return 0;
    });
}
