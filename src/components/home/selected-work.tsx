"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  FolderKanban,
  Globe2,
  User,
  Users,
  Briefcase,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getFeaturedProjects,
  getSupportingProjects,
  ownershipLabel,
} from "@/data/projects";
import type { Ownership } from "@/types/portfolio";
import { cn } from "@/lib/cn";

const ownershipIcon: Record<Ownership, typeof User> = {
  solo: User,
  freelance: Briefcase,
  team: Users,
};

export function SelectedWork() {
  const featured = getFeaturedProjects();
  const supporting = getSupportingProjects();
  const [hero, ...restFeatured] = featured;

  return (
    <section id="work" className="scroll-mt-24 border-b border-border py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            icon={FolderKanban}
            eyebrow="Selected Work"
            title="Evidence over claims"
            description="Flagship case studies lead — including live freelance delivery. Supporting work is curated by domain. Solo, freelance, and team ownership stay explicit."
          />
        </Reveal>

        {hero ? (
          <Reveal delay={0.08} className="mt-12">
            <article className="hover-lift group overflow-hidden rounded-3xl border border-border bg-surface/40">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[280px] overflow-hidden bg-background">
                  {hero.images[0]?.src ? (
                    <Image
                      src={hero.images[0].src}
                      alt={hero.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />
                  ) : null}
                </div>
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
                      {(() => {
                        const Icon = ownershipIcon[hero.ownership];
                        return <Icon className="size-3.5" aria-hidden="true" />;
                      })()}
                      01 · {ownershipLabel[hero.ownership]}
                    </p>
                    <h3 className="mt-3 font-display text-3xl tracking-tight text-foreground">
                      {hero.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-secondary">
                      {hero.category}
                    </p>
                    <p className="mt-5 line-clamp-5 text-sm leading-relaxed text-muted">
                      {hero.summary}
                    </p>
                    <p className="mt-4 font-mono text-[0.65rem] leading-relaxed text-muted">
                      {hero.technologies.slice(0, 6).join(" · ")}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${hero.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
                  >
                    Open case study
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        <Stagger className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {restFeatured.map((project, index) => {
            const image = project.images.find((item) => item.src);
            const live = project.links[0];
            return (
              <StaggerItem key={project.slug}>
                <article className="hover-lift group h-full overflow-hidden rounded-2xl border border-border bg-surface/30">
                  <div className="relative aspect-[16/10] overflow-hidden bg-background">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <p className="inline-flex flex-wrap items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
                      {(() => {
                        const Icon = ownershipIcon[project.ownership];
                        return <Icon className="size-3.5" aria-hidden="true" />;
                      })()}
                      {String(index + 2).padStart(2, "0")} ·{" "}
                      {ownershipLabel[project.ownership]}
                      {live ? (
                        <span className="inline-flex items-center gap-1">
                          <Globe2 className="size-3" aria-hidden="true" />
                          Live
                        </span>
                      ) : null}
                    </p>
                    <h3 className="mt-2 font-display text-2xl tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    {live ? (
                      <p className="mt-3 font-mono text-[0.65rem] text-accent">
                        {live.label}
                      </p>
                    ) : null}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent"
                    >
                      Case study
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {supporting.length > 0 ? (
          <>
            <Reveal className="mt-16" delay={0.05}>
              <h3 className="font-display text-2xl tracking-tight text-foreground">
                Additional work
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted">
                Supporting evidence with visuals — team classifications stay
                explicit.
              </p>
            </Reveal>

            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {supporting.map((project) => {
                const live = project.links[0];
                return (
                  <StaggerItem key={project.slug}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className={cn(
                        "hover-lift block h-full rounded-xl border border-border bg-background-secondary/60 p-4",
                        "hover:bg-surface",
                        live && "border-accent/25",
                      )}
                    >
                      <p className="inline-flex flex-wrap items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                        {(() => {
                          const Icon = ownershipIcon[project.ownership];
                          return (
                            <Icon className="size-3 text-accent" aria-hidden="true" />
                          );
                        })()}
                        {ownershipLabel[project.ownership]}
                        {live ? (
                          <span className="inline-flex items-center gap-1 text-accent">
                            <Globe2 className="size-3" aria-hidden="true" />
                            Live
                          </span>
                        ) : null}
                        {project.recognition ? " · Recognised" : ""}
                      </p>
                      <h4 className="mt-2 font-display text-lg tracking-tight text-foreground">
                        {project.title}
                      </h4>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground-secondary">
                        {project.summary}
                      </p>
                      {live ? (
                        <p className="mt-3 font-mono text-[0.65rem] text-accent">
                          {live.label}
                        </p>
                      ) : null}
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </>
        ) : null}
      </Container>
    </section>
  );
}
