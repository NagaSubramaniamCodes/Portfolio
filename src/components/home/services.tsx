"use client";

import { BriefcaseBusiness, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { liveSites } from "@/content/site";
import { serviceOffers } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-border py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            icon={BriefcaseBusiness}
            eyebrow="Services"
            title="What I can build for you"
            description="For founders and operators who need a production website, storefront, or practical GenAI feature — with clear ownership and live evidence where available."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
          {serviceOffers.map((offer) => (
            <StaggerItem key={offer.id}>
              <article className="hover-lift flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6">
                <h3 className="font-display text-xl tracking-tight text-foreground">
                  {offer.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {offer.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {offer.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10" delay={0.05}>
          <div className="flex flex-col gap-4 rounded-2xl border border-accent/30 bg-highlight/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.16em] text-accent uppercase">
                Live client delivery
              </p>
              <p className="mt-2 text-sm text-foreground-secondary">
                Public evidence:{" "}
                {liveSites.map((site, index) => (
                  <span key={site.href}>
                    {index > 0 ? " · " : null}
                    <a
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
                    >
                      {site.label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground hover:brightness-110"
            >
              Start a project
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
