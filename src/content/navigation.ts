import type { MetadataRoute } from "next";
import type { NavItem } from "@/types/portfolio";

export const mainNav: readonly NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Credentials", href: "/#credentials" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export const indexableRoutes: readonly {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}[] = [{ path: "/", changeFrequency: "monthly", priority: 1 }];
