"use client";

import { Route } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experienceItems } from "@/data/credentials";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-border py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            icon={Route}
            eyebrow="Experience"
            title="Delivery without invented job titles"
            description="No formal employment history is recorded. This section reflects freelance delivery, solo product work, collaborative AI projects, education, and training."
          />
        </Reveal>

        <Stagger className="mt-12 space-y-0 border-t border-border">
          {experienceItems.map((item) => (
            <StaggerItem key={item.id}>
              <div className="grid gap-4 border-b border-border py-8 transition-colors hover:bg-surface/30 md:grid-cols-[10rem_1fr] md:gap-8 md:px-2">
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.16em] text-accent uppercase">
                    {item.kind}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.period}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    {item.org}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
