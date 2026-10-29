import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ownershipLabel } from "@/data/projects";
import type { Project } from "@/types/portfolio";
import { TextLink } from "@/components/ui/text-link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const image = project.images[0];

  return (
    <article className="flex h-full flex-col border border-line bg-surface transition-colors hover:border-line-strong">
      <div className="relative flex aspect-[16/10] items-center border-b border-line bg-background">
        {image ? (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            {image.concept ? (
              <p className="absolute top-3 left-3 z-10 border border-line bg-background/90 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                Concept visual
              </p>
            ) : null}
          </>
        ) : (
          <p className="px-6 font-mono text-xs tracking-wide text-muted">
            No image has been added.
          </p>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
          {ownershipLabel[project.ownership]}
          <span className="text-muted"> · {project.category}</span>
        </p>
        <h3 className="mt-5 text-2xl font-medium tracking-tight text-foreground">
          {project.title}
        </h3>
        {project.recognition ? (
          <p className="mt-3 text-sm text-accent">{project.recognition}</p>
        ) : null}
        <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
        {project.technologies.length > 0 ? (
          <p className="mt-6 font-mono text-xs leading-relaxed text-muted">
            {project.technologies.join(" · ")}
          </p>
        ) : (
          <p className="mt-6 font-mono text-xs text-muted">
            Technologies have not been listed.
          </p>
        )}
        <div className="mt-8 space-y-2">
          <TextLink href={`/projects/${project.slug}`}>Case study</TextLink>
          {project.links.length > 0 ? (
            <ul className="space-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href}>
                    {link.label}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </TextLink>
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-mono text-xs text-muted">
              No public link is available.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
