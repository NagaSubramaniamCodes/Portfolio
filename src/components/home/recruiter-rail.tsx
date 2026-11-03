"use client";

import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  FileText,
  Globe2,
  GraduationCap,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { liveSites, site } from "@/content/site";

const proofs = [
  {
    icon: Briefcase,
    label: "Target roles",
    value: "AI/ML · GenAI · LLM/RAG",
    href: "/#experience",
  },
  {
    icon: Globe2,
    label: "Live delivery",
    value: `${liveSites.length} production sites`,
    href: "/#work",
  },
  {
    icon: Award,
    label: "Recognition",
    value: "Hack-AI-thon, 1st place",
    href: "/#credentials",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech AI & ML, 2025",
    href: "/#about",
  },
] as const;

const jumps = [
  { href: "/#work", label: "Projects", icon: ScrollText },
  {
    href: site.resumeReady ? site.resumePath : "/#contact",
    label: site.resumeReady ? "Resume" : "Request resume",
    icon: FileText,
  },
  { href: "/#contact", label: "Contact", icon: Briefcase },
] as const;

export function RecruiterRail() {
  return (
    <section
      aria-label="Recruiter quick view"
      className="border-b border-border bg-background-secondary/40"
    >
      <Container className="py-8 md:py-10">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
                For recruiters
              </p>
              <p className="mt-2 max-w-xl text-sm text-muted">
                Skim proof in seconds, then jump to projects, resume, or contact.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {jumps.map((item) => {
                const isResume =
                  site.resumeReady && item.href === site.resumePath;
                const className =
                  "inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent";

                if (isResume) {
                  return (
                    <a
                      key={item.href + item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      <item.icon className="size-3.5" aria-hidden="true" />
                      {item.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    className={className}
                  >
                    <item.icon className="size-3.5" aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {proofs.map((proof) => (
            <StaggerItem key={proof.label}>
              <Link href={proof.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group flex h-full gap-3 rounded-2xl border border-border bg-surface/50 p-4 transition-colors hover:border-accent/40 hover:bg-surface"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-accent transition-colors group-hover:border-accent/40">
                    <proof.icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                      {proof.label}
                    </span>
                    <span className="mt-1 block text-sm text-foreground">
                      {proof.value}
                    </span>
                  </span>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
