"use client";

import { useState } from "react";
import {
  ChartColumn,
  Database,
  Layers,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { getProject } from "@/data/projects";
import type { Skill, SkillCategory, SkillStatus } from "@/types/portfolio";
import { TextLink } from "@/components/ui/text-link";

const categoryIcons: Record<string, LucideIcon> = {
  "full-stack": Layers,
  analytics: ChartColumn,
  ai: Sparkles,
  "data-engineering": Database,
};

const statusLabel: Record<Exclude<SkillStatus, "unverified">, string> = {
  project: "Project",
  working: "Working knowledge",
};

type SkillBoardProps = {
  categories: readonly SkillCategory[];
};

export function SkillBoard({ categories }: SkillBoardProps) {
  const [active, setActive] = useState("all");
  const visible =
    active === "all"
      ? categories
      : categories.filter((category) => category.id === active);

  return (
    <div className="mt-14">
      <div
        role="group"
        aria-label="Skill categories"
        className="flex flex-wrap gap-2"
      >
        <FilterButton
          pressed={active === "all"}
          onClick={() => setActive("all")}
        >
          All
        </FilterButton>
        {categories.map((category) => (
          <FilterButton
            key={category.id}
            pressed={active === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.title}
          </FilterButton>
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
        <li>Project — named on a project or this site</li>
        <li>Working knowledge — related, not a separately stated tool</li>
      </ul>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {visible.map((category) => {
          const Icon = categoryIcons[category.id] ?? Layers;

          return (
            <article
              key={category.id}
              aria-labelledby={`${category.id}-skills`}
              className="border border-line bg-background p-6 md:p-8"
            >
              <h3
                id={`${category.id}-skills`}
                className="flex items-center gap-2 font-mono text-xs tracking-[0.16em] text-accent uppercase"
              >
                <Icon aria-hidden="true" className="size-3.5" />
                {category.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
              <div className="mt-8 space-y-8">
                {category.groups.map((group) => (
                    <section key={group.id} aria-labelledby={`${group.id}-heading`}>
                      <h4
                        id={`${group.id}-heading`}
                        className="text-sm font-medium text-foreground"
                      >
                        {group.title}
                      </h4>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <SkillChip key={skill.name} skill={skill} />
                        ))}
                      </ul>
                    </section>
                  ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function SkillChip({ skill }: { skill: Skill }) {
  const status = skill.status === "unverified" ? null : statusLabel[skill.status];

  return (
    <li className="max-w-full border border-line bg-surface px-3 py-2 transition-colors hover:border-line-strong">
      <p className="text-sm text-foreground">{skill.name}</p>
      {status ? (
        <p className="mt-1 font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
          {status}
        </p>
      ) : null}
      {skill.note || skill.projectSlugs?.length ? (
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          {skill.note ? <span>{skill.note}</span> : null}
          {skill.projectSlugs?.map((slug) => {
            const project = getProject(slug);
            if (!project) return null;

            return (
              <TextLink key={slug} href={`/projects/${slug}`}>
                {project.title}
              </TextLink>
            );
          })}
        </p>
      ) : null}
    </li>
  );
}

type FilterButtonProps = {
  pressed: boolean;
  onClick: () => void;
  children: string;
};

function FilterButton({ pressed, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={
        pressed
          ? "inline-flex min-h-11 items-center border border-accent bg-accent px-3 font-mono text-xs tracking-wide text-accent-foreground"
          : "inline-flex min-h-11 items-center border border-line bg-surface px-3 text-left font-mono text-xs tracking-wide text-muted transition-colors hover:border-line-strong hover:text-foreground"
      }
    >
      {children}
    </button>
  );
}
