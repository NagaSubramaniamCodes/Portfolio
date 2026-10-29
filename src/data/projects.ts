import type { Ownership, Project } from "@/types/portfolio";

export const ownershipLabel: Record<Ownership, string> = {
  freelance: "Freelance",
  solo: "Solo",
  team: "Team",
};

/**
 * Featured work. Fields marked `todo` are internal and must stay off the page
 * until real copy replaces them.
 */
export const projects: readonly Project[] = [
  {
    slug: "chola-power",
    title: "Chola Power",
    category: "Client website",
    ownership: "freelance",
    summary:
      "Freelance website for Chola Power, a solar-energy business. Built with Next.js and React, and deployed with Docker and Cloudflare CDN.",
    technologies: ["Next.js", "React", "Docker", "Cloudflare CDN"],
    links: [
      {
        label: "cholapower.in",
        href: "https://cholapower.in",
      },
    ],
    images: [
      {
        src: "/images/projects/chola-power/homepage-desktop.webp",
        alt: "Desktop screenshot of the live Chola Power homepage. The brand and page design belong to Chola Power Private Limited.",
        caption: "Live homepage on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/chola-power/homepage-mobile.webp",
        alt: "Phone screenshot of the live Chola Power homepage. The brand and page design belong to Chola Power Private Limited.",
        caption: "Live homepage on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
      {
        src: "/images/projects/chola-power/gallery-desktop.webp",
        alt: "Desktop screenshot of the Chola Power project gallery on the live website. Photographs belong to Chola Power Private Limited.",
        caption: "Live project gallery on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/chola-power/gallery-mobile.webp",
        alt: "Phone screenshot of the Chola Power project gallery on the live website. Photographs belong to Chola Power Private Limited.",
        caption: "Live project gallery on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
    ],
    caseStudy: [
      {
        id: "context",
        heading: "Context",
        body: "Freelance website for Chola Power, a solar-energy business.",
      },
      {
        id: "delivery",
        heading: "Delivery",
        body: "Built with Next.js and React. Deployed with Docker and Cloudflare CDN.",
      },
      {
        id: "interface",
        heading: "Live website",
        body: "The screenshots show cholapower.in as it was publicly available on 29 October 2026, in a desktop browser and a phone-sized browser. The live homepage hero is a CSS gradient. The company name, logo, and gallery photographs belong to Chola Power Private Limited. © 2025 Chola Power Private Limited. All rights reserved. Original logo, icon, and gallery files stay on cholapower.in. The site reserves all rights and publishes no reuse license.",
      },
      {
        id: "scope",
        heading: "Scope",
        todo: "TODO: Add the pages and responsibilities on this engagement. Do not add traffic, leads, or client quotes.",
      },
    ],
  },
  {
    slug: "dharani-fitness",
    title: "Dharani Fitness",
    category: "E-commerce",
    ownership: "freelance",
    summary:
      "Freelance e-commerce website for a gym-equipment shop. The public site covers product discovery, with cart, checkout, Razorpay, Google sign-in, customer accounts, order history, and product administration included in the engagement.",
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
        alt: "Desktop screenshot of the live Dharani Fitness homepage. The brand and photography belong to Dharani Fitness Equipment.",
        caption: "Live homepage on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/hero-mobile.webp",
        alt: "Phone screenshot of the live Dharani Fitness homepage. The brand and photography belong to Dharani Fitness Equipment.",
        caption: "Live homepage on a phone-sized browser.",
        width: 780,
        height: 1688,
      },
      {
        src: "/images/projects/dharani-fitness/catalogue.webp",
        alt: "Desktop screenshot of the public Dharani Fitness equipment catalogue. Product photographs belong to Dharani Fitness Equipment.",
        caption: "Public catalogue on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/product-detail.webp",
        alt: "Desktop screenshot of a public Dharani Fitness product page for a dumbbell rack. The photograph belongs to Dharani Fitness Equipment.",
        caption: "Public product page on a desktop browser.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/dharani-fitness/cart.webp",
        alt: "Desktop screenshot of the public Dharani Fitness cart page with an empty cart. The brand belongs to Dharani Fitness Equipment.",
        caption: "Public cart page with an empty cart. Checkout was not opened.",
        width: 1440,
        height: 900,
      },
    ],
    caseStudy: [
      {
        id: "overview",
        heading: "Overview",
        body: "Freelance e-commerce website for Dharani Fitness Equipment, a gym-equipment shop. The public site is a storefront for browsing equipment, opening a product page, and starting a quotation or a listed-price purchase.",
      },
      {
        id: "role",
        heading: "My role",
        body: "Full-stack developer on this freelance engagement. The stated work covers the storefront, catalogue, cart, checkout, payments, Google sign-in, customer accounts, order history, and product administration.",
      },
      {
        id: "features",
        heading: "Key features",
        body: "The public site shows a searchable catalogue, product pages with quantity and add to cart, and a cart page. The engagement also includes checkout, Razorpay, Google sign-in, customer accounts, order history, an admin dashboard for product management, responsive layout, and SEO and performance work. Checkout, sign-in, account pages, and the admin area were not opened for these screenshots.",
      },
      {
        id: "stack",
        heading: "Technology stack",
        body: "Next.js for the application, Neon Database for data, Vercel for hosting, Razorpay for payments, and Google Authentication for sign-in. The client repository is not part of this portfolio, so internal configuration is not shown here.",
      },
      {
        id: "gallery",
        heading: "Visual gallery",
        body: "The screenshots were captured from the public site on 29 October 2026. They show the homepage, catalogue, one product page, and an empty cart, on a desktop browser, plus the homepage on a phone-sized browser. The name, logo, and product photographs belong to Dharani Fitness Equipment. © 2026 Dharani Fitness Equipment. All rights reserved. Original product files were left on the shop’s storage.",
      },
      {
        id: "live",
        heading: "Live project",
        body: "The website is public at dharanifitness.in.",
      },
      {
        id: "implementation",
        heading: "Challenges and implementation",
        body: "Specific implementation challenges are not recorded in this portfolio. The notes above stay with the stated stack and the pages that are public.",
      },
      {
        id: "results",
        heading: "Results",
        body: "The delivered result is the public website. Sales, traffic, conversion, and performance scores are not stated.",
      },
    ],
  },
  {
    slug: "sportshub",
    title: "SportsHub",
    category: "SaaS",
    ownership: "solo",
    summary:
      "Solo SaaS project with 29+ relational database models, Clerk authentication and role-based access, Razorpay payments, and AI-powered slot recommendations.",
    technologies: ["Clerk", "RBAC", "Razorpay"],
    links: [],
    images: [
      {
        src: "/images/projects/sportshub/concept.webp",
        alt: "Concept visual of a sports facility booking dashboard with football, badminton, tennis, and cricket venues, a calendar, and time slots.",
        caption:
          "Concept visual. An original interface illustration, not a screenshot of the product.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    caseStudy: [
      {
        id: "context",
        heading: "Context",
        body: "Solo SaaS project.",
      },
      {
        id: "visual",
        heading: "Concept visual",
        body: "The image is an original illustration of a booking interface. It is not a screenshot, and it does not report usage or revenue.",
      },
      {
        id: "product",
        heading: "What was built",
        body: "The data model includes 29+ relational database models. Authentication and role-based access use Clerk. Payments use Razorpay. The product includes AI-powered slot recommendations.",
      },
      {
        id: "public-url",
        heading: "Public link",
        todo: "TODO: Add a live URL or repository only if one should be public.",
      },
      {
        id: "stack",
        heading: "Application stack",
        todo: "TODO: Add the interface framework and database only if they should be named. Do not infer them.",
      },
    ],
  },
  {
    slug: "conversational-rag-assistant",
    title: "Conversational AI / RAG Assistant",
    category: "Conversational AI",
    ownership: "team",
    summary:
      "Team project for a conversational assistant built with retrieval-augmented generation.",
    technologies: [
      "Llama",
      "Mistral",
      "FAISS",
      "Sentence Transformers",
      "Hugging Face",
      "FastAPI",
      "Docker",
    ],
    links: [],
    images: [
      {
        src: "/images/projects/rag-assistant/concept.webp",
        alt: "Concept visual of a document assistant with file upload, a conversation, source references, and a retrieval diagram.",
        caption:
          "Concept visual. An original interface illustration, not evidence of model accuracy or a working system.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    caseStudy: [
      {
        id: "context",
        heading: "Context",
        body: "Team project for a conversational assistant using retrieval-augmented generation.",
      },
      {
        id: "visual",
        heading: "Concept visual",
        body: "The image is an original illustration of document upload, retrieval, and a grounded conversation. It does not demonstrate model accuracy or a working system.",
      },
      {
        id: "stack",
        heading: "Named technologies",
        body: "Llama, Mistral, FAISS, Sentence Transformers, Hugging Face, FastAPI, and Docker.",
      },
      {
        id: "contribution",
        heading: "Contribution",
        todo: "TODO: Add the personal role on this team project. Do not describe the whole build as individual work.",
      },
      {
        id: "public-url",
        heading: "Public link",
        todo: "TODO: Add a repository or demo URL only if one exists and should be public.",
      },
    ],
  },
  {
    slug: "multimodal-ai-virtual-assistant",
    title: "Multimodal AI Virtual Assistant",
    category: "Hackathon",
    ownership: "team",
    summary: "Team hackathon project for a multimodal AI virtual assistant.",
    technologies: [],
    links: [],
    images: [
      {
        src: "/images/projects/multimodal-assistant/concept.webp",
        alt: "Concept visual of an assistant interface with separate text, image, audio, and video panels, plus a phone preview.",
        caption:
          "Concept visual. An original illustration. Supported modalities still need to be verified.",
        width: 1280,
        height: 720,
        concept: true,
      },
    ],
    recognition: "First place, Hack-AI-thon",
    caseStudy: [
      {
        id: "context",
        heading: "Context",
        body: "Team hackathon project.",
      },
      {
        id: "visual",
        heading: "Concept visual",
        body: "The image is an original illustration of a multimodal assistant. Supported modalities still need to be verified before they are described as part of the hackathon build.",
      },
      {
        id: "recognition",
        heading: "Recognition",
        body: "Associated with a first-place Hack-AI-thon award.",
      },
      {
        id: "stack",
        heading: "Technologies",
        todo: "TODO: Add the models and tools used. Do not guess a stack.",
      },
      {
        id: "event",
        heading: "Event",
        todo: "TODO: Add the organizer, date, and a link to the result if one can be verified.",
      },
      {
        id: "contribution",
        heading: "Contribution",
        todo: "TODO: Add the personal role. Do not assign the award to one person.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
