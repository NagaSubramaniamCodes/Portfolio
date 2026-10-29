import { services } from "@/data/services";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    url: getSiteUrl(),
    description: site.description,
    sameAs: [site.github, site.linkedin],
    knowsAbout: services.map((service) => service.title),
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
