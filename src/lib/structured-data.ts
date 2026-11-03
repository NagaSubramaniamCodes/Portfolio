import { getFeaturedProjects } from "@/data/projects";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: getSiteUrl(),
    description: site.description,
    email: site.email,
    telephone: site.phoneHref.replace("tel:", ""),
    sameAs: [site.github, site.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "LLM",
      "RAG",
      "Full-Stack Development",
      ...getFeaturedProjects().map((project) => project.title),
    ],
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
