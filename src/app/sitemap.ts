import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/content/navigation";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const pages = indexableRoutes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const caseStudies = projects.map((project) => ({
    url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...caseStudies];
}
