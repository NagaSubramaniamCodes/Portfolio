"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutStory, site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
          <Reveal>
            <div className="mx-auto w-40 sm:w-48 lg:mx-0 lg:w-full">
              <div className="relative aspect-square overflow-hidden rounded-full border border-accent/50 p-1 shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_25%,transparent),0_0_40px_-12px_var(--glow)]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
                  <Image
                    src={site.portraitPath}
                    alt={`${site.name} — professional portrait`}
                    fill
                    sizes="(max-width: 1024px) 192px, 208px"
                    className="object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-4 text-center font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase lg:text-left">
                {site.name}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:gap-10">
            <Reveal delay={0.05}>
              <SectionHeading
                icon={UserRound}
                eyebrow="About"
                title="Human story behind the systems"
                description={aboutStory.intro}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="max-w-2xl space-y-5 text-[0.975rem] leading-7 text-foreground-secondary sm:text-base sm:leading-7">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {aboutStory.timeline.map((item, index) => (
            <StaggerItem key={item.title}>
              <div className="hover-lift relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-5">
                <span className="font-mono text-[0.65rem] tracking-[0.16em] text-accent uppercase">
                  {String(index + 1).padStart(2, "0")} · {item.period}
                </span>
                <h3 className="mt-3 font-display text-lg tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  {item.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
