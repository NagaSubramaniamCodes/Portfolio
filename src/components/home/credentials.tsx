"use client";

import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, credentials } from "@/data/credentials";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="scroll-mt-24 border-b border-border py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            icon={BadgeCheck}
            eyebrow="Credentials"
            title="Recognition, research, and certifications"
            description="Only verified awards, patent attribution, publication authorship, and credentials from the reference records."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {achievements.map((item) => (
            <StaggerItem key={item.id}>
              <article className="hover-lift h-full rounded-2xl border border-border bg-surface/50 p-6">
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-xl tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
          {credentials.map((item) => (
            <StaggerItem key={item.id}>
              <div className="hover-lift rounded-xl border border-border bg-background-secondary/70 px-5 py-4">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                    {item.label}
                  </p>
                  {item.status === "historical" ? (
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.6rem] text-foreground-secondary uppercase">
                      Historical
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-base font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
