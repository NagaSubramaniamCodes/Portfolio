"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Globe2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { NeuralField } from "@/components/visuals/neural-field";
import { liveSites, site } from "@/content/site";

export function Hero() {
  const reduced = useReducedMotion();

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : 0.08 + i * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="ambient-glow motion-glow pointer-events-none absolute inset-0" />
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-35" />
      <NeuralField className="pointer-events-none absolute inset-0 hidden opacity-40 lg:block" />

      <Container className="relative grid items-center gap-10 py-10 md:gap-12 md:py-14 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-12">
        <motion.div
          className="relative z-10 max-w-3xl"
          initial="hidden"
          animate="show"
        >
          <motion.p
            custom={0}
            variants={item}
            className="inline-flex flex-wrap items-center gap-2 font-mono text-[0.7rem] tracking-[0.18em] text-accent uppercase"
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            AI × Human
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1.5 text-foreground-secondary">
              <MapPin className="size-3.5" aria-hidden="true" />
              {site.location}
            </span>
          </motion.p>
          <motion.h1
            custom={1}
            variants={item}
            className="mt-4 font-display text-[clamp(2.35rem,6.5vw,4.5rem)] leading-[0.98] font-medium tracking-[-0.045em] text-foreground"
          >
            {site.name}
          </motion.h1>
          <motion.p
            custom={2}
            variants={item}
            className="mt-4 max-w-2xl font-mono text-xs tracking-[0.08em] text-foreground-secondary uppercase sm:text-sm"
          >
            {site.role}
          </motion.p>
          <motion.p
            custom={3}
            variants={item}
            className="mt-6 max-w-2xl font-display text-xl leading-snug tracking-tight text-foreground sm:text-2xl md:text-3xl"
          >
            {site.headline}
          </motion.p>
          <motion.p
            custom={4}
            variants={item}
            className="mt-4 max-w-xl text-base leading-relaxed text-foreground-secondary sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            custom={5}
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Magnetic>
              <Button href="/#work">
                View Selected Projects
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href={site.resumePath} variant="secondary" newTab>
                Download Resume
                <Download className="size-4" aria-hidden="true" />
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            custom={6}
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-xs tracking-[0.14em] text-foreground-secondary uppercase transition-colors hover:text-accent"
            >
              Email
            </a>
            <a
              href={site.phoneHref}
              className="font-mono text-xs tracking-[0.14em] text-foreground-secondary uppercase transition-colors hover:text-accent"
            >
              Phone
            </a>
            <a
              href={site.whatsappHref}
              className="font-mono text-xs tracking-[0.14em] text-foreground-secondary uppercase transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={site.linkedin}
              className="font-mono text-xs tracking-[0.14em] text-foreground-secondary uppercase transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={site.github}
              className="font-mono text-xs tracking-[0.14em] text-foreground-secondary uppercase transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </motion.div>

          <motion.div
            custom={7}
            variants={item}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 font-mono text-xs tracking-wide text-accent">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </p>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted">
              <span className="inline-flex items-center gap-1.5 tracking-[0.14em] uppercase">
                <Globe2 className="size-3.5 text-accent" aria-hidden="true" />
                Live
              </span>
              {liveSites.map((entry) => (
                <a
                  key={entry.href}
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground-secondary underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {entry.label}
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                  <span className="sr-only">
                    {" "}
                    — {entry.title} (opens in a new tab)
                  </span>
                </a>
              ))}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-none lg:justify-self-end"
          initial={reduced ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[20rem] lg:max-w-[24rem]">
            <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-accent/55 p-1.5 shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_30%,transparent),0_0_60px_-10px_var(--glow)]">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
                <Image
                  src={site.portraitPath}
                  alt={`${site.name} — professional portrait`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 384px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
