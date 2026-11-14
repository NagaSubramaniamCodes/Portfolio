"use client";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, credentials } from "@/data/credentials";

const credentialProofs = [
  {
    src: "/images/credentials/nptel-motivated-learner.png",
    alt: "NPTEL Motivated Learner certificate of appreciation for Nagasubramaniam G, JAN–APR 2025.",
    label: "NPTEL Motivated Learner",
  },
  {
    src: "/images/credentials/nptel-enthusiast.png",
    alt: "NPTEL Enthusiast certificate of appreciation for Nagasubramaniam G, JUL–DEC 2024.",
    label: "NPTEL Enthusiast",
  },
  {
    src: "/images/credentials/azure-ai-fundamentals.png",
    alt: "Microsoft Certified Azure AI Fundamentals certificate for Nagasubramaniam G.",
    label: "Azure AI Fundamentals",
  },
  {
    src: "/images/credentials/azure-fundamentals.png",
    alt: "Microsoft Certified Azure Fundamentals certificate for Nagasubramaniam G.",
    label: "Azure Fundamentals",
  },
] as const;

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
            description="Verified awards, patent attribution, publication authorship, Microsoft/NASSCOM/Oracle credentials, and NPTEL recognition — only claims backed by certificate records."
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

        <Reveal className="mt-12" delay={0.05}>
          <h3 className="font-display text-2xl tracking-tight text-foreground">
            Certificate proof
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Scans of key Microsoft and NPTEL appreciation certificates. Course
            PDFs remain on file for verification.
          </p>
        </Reveal>

        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
          {credentialProofs.map((proof) => (
            <StaggerItem key={proof.src}>
              <figure className="hover-lift overflow-hidden rounded-2xl border border-border bg-surface/40">
                <div className="relative aspect-[4/3] bg-background">
                  <Image
                    src={proof.src}
                    alt={proof.alt}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-border px-4 py-3 font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                  {proof.label}
                </figcaption>
              </figure>
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
                      Time-bounded
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
