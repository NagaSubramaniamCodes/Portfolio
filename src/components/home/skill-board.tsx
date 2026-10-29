"use client";

import { useState } from "react";
import {
  Code,
  Database,
  LayoutTemplate,
  Server,
  Ship,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { getProject } from "@/data/projects";
import type { SkillGroup } from "@/types/portfolio";
import { TextLink } from "@/components/ui/text-link";

const groupIcons: Record<string, LucideIcon> = {
  languages: Code,
  frontend: LayoutTemplate,
  backend: Server,
  data: Database,
  models: Sparkles,
  delivery: Ship,
};

type SkillBoardProps = {
  groups: readonly SkillGroup[];
};

export function SkillBoard({ groups }: SkillBoardProps) {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? groups : groups.filter((group) => group.id === active);

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
        {groups.map((group) => (
          <FilterButton
            key={group.id}
            pressed={active === group.id}
            onClick={() => setActive(group.id)}
          >
            {group.title}
          </FilterButton>
        ))}
      </div>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((group) => {
          const Icon = groupIcons[group.id] ?? Code;

          return (
            <section key={group.id} aria-labelledby={`${group.id}-skills`}>
              <h3
                id={`${group.id}-skills`}
                className="flex items-center gap-2 font-mono text-xs tracking-[0.16em] text-accent uppercase"
              >
                <Icon aria-hidden="true" className="size-3.5" />
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="border border-line bg-surface px-3 py-3 transition-colors hover:border-line-strong"
                  >
                    <p className="text-sm text-foreground">{skill.name}</p>
                    <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
                      {skill.note ? <span>{skill.note}</span> : null}
                      {skill.projectSlugs.map((slug) => {
                        const project = getProject(slug);
                        if (!project) return null;

                        return (
                          <TextLink key={slug} href={`/projects/${slug}`}>
                            {project.title}
                          </TextLink>
                        );
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
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
          : "inline-flex min-h-11 items-center border border-line bg-surface px-3 font-mono text-xs tracking-wide text-muted transition-colors hover:border-line-strong hover:text-foreground"
      }
    >
      {children}
    </button>
  );
}
