import type { Service } from "@/types/portfolio";

export const services: readonly Service[] = [
  {
    id: "generative-ai",
    title: "AI and Generative AI application development",
    description:
      "Applications that use language and generative models, from the interface through the service that responds to a user.",
  },
  {
    id: "rag",
    title: "RAG pipelines and document-based AI assistants",
    description:
      "Assistants that answer from a defined document set, with retrieval connected to the conversation.",
  },
  {
    id: "automation",
    title: "AI workflow automation and integrations",
    description:
      "Model-backed steps connected to tools a team already uses, so repeated work can run as a workflow.",
  },
  {
    id: "fullstack",
    title: "Full-stack web application development",
    description:
      "Web applications with an interface, an API, and a data layer that can be maintained after launch.",
  },
  {
    id: "saas",
    title: "SaaS platforms, authentication, and payment integrations",
    description:
      "Multi-user product foundations, including sign-in, role-based access, and payment provider integration.",
  },
  {
    id: "delivery",
    title: "Website deployment, performance, and technical SEO",
    description:
      "Production deployment, caching and delivery, and the technical setup that helps a site load reliably and get indexed.",
  },
];
