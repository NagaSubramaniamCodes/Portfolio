"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Container as DockerIcon,
  Cpu,
  Database,
  Eye,
  FileCode2,
  GitBranch,
  Layers,
  MessageSquareCode,
  Network,
  Package,
  Radar,
  Server,
  Sparkles,
  SquareStack,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/cn";

const statusLabel = {
  project: "Project-backed",
  working: "Working knowledge",
  learning: "Learning",
} as const;

const categoryIcons: Record<string, LucideIcon> = {
  "ai-ml": BrainCircuit,
  genai: Cpu,
  analytics: Layers,
  "data-eng": Database,
  fullstack: Code2,
  cloud: Cloud,
};

const skillIcons: Record<string, LucideIcon> = {
  "Machine Learning": BrainCircuit,
  "Deep Learning": Network,
  PyTorch: Cpu,
  "Scikit-learn": Radar,
  NLP: MessageSquareCode,
  "Computer Vision": Eye,
  "Model Evaluation": BarChart3,
  LLMs: Sparkles,
  RAG: Boxes,
  Embeddings: SquareStack,
  FAISS: Database,
  "Sentence Transformers": Workflow,
  "Hugging Face": Package,
  "Prompt Engineering": MessageSquareCode,
  Llama: Sparkles,
  Mistral: Sparkles,
  Python: FileCode2,
  SQL: Database,
  "Data Analysis": BarChart3,
  "Data Visualization": BarChart3,
  Statistics: BarChart3,
  "Data Cleaning": Workflow,
  "Data Processing": Workflow,
  "ETL concepts": Workflow,
  PostgreSQL: Database,
  Databases: Database,
  "Data Pipelines": Workflow,
  "Next.js": SquareStack,
  React: Code2,
  TypeScript: FileCode2,
  "Node.js": Server,
  FastAPI: Server,
  Prisma: Database,
  Supabase: Database,
  Docker: DockerIcon,
  Cloudflare: Cloud,
  "Git/GitHub": GitBranch,
  Linux: Terminal,
  Deployment: Cloud,
};

function iconForSkill(name: string): LucideIcon {
  return skillIcons[name] ?? Layers;
}

export function SkillBoard() {
  const [activeId, setActiveId] = useState(skillCategories[0]?.id ?? "");
  const active =
    skillCategories.find((category) => category.id === activeId) ??
    skillCategories[0];

  return (
    <section id="skills" className="scroll-mt-24 border-b border-border py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            icon={BrainCircuit}
            eyebrow="Skills"
            title="Interactive capability map"
            description="Capabilities grouped by domain. Labels reflect project evidence where available — not invented proficiency scores."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6">
            <div className="ambient-glow pointer-events-none absolute inset-0 opacity-70" />
            <p className="relative font-mono text-[0.65rem] tracking-[0.18em] text-muted uppercase">
              Constellation
            </p>
            <div className="relative mt-8 grid grid-cols-2 gap-3">
              {skillCategories.map((category) => {
                const selected = category.id === active?.id;
                const Icon = categoryIcons[category.id] ?? Layers;
                return (
                  <motion.button
                    key={category.id}
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveId(category.id)}
                    className={cn(
                      "rounded-xl border px-4 py-4 text-left transition-colors duration-200",
                      selected
                        ? "border-accent bg-highlight text-foreground shadow-[0_0_0_1px_var(--accent)]"
                        : "border-border bg-background/40 text-foreground-secondary hover:border-foreground-secondary/40 hover:text-foreground",
                    )}
                    aria-pressed={selected}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon
                        className={cn(
                          "size-4",
                          selected ? "text-accent" : "text-muted",
                        )}
                        aria-hidden="true"
                      />
                      <span className="font-display text-sm tracking-tight">
                        {category.title}
                      </span>
                    </span>
                    <span className="mt-2 block font-mono text-[0.65rem] text-muted">
                      {category.items.length} signals
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-border bg-background-secondary p-6 md:p-8"
              >
                <h3 className="inline-flex items-center gap-2 font-display text-2xl tracking-tight text-foreground">
                  {(() => {
                    const Icon = categoryIcons[active.id] ?? Layers;
                    return <Icon className="size-5 text-accent" aria-hidden="true" />;
                  })()}
                  {active.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground-secondary">
                  {active.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {active.items.map((item, index) => {
                    const Icon = iconForSkill(item.name);
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.04 * index, duration: 0.25 }}
                        whileHover={{ y: -2, scale: 1.03 }}
                        className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 transition-colors hover:border-accent/40"
                        title={item.note}
                      >
                        <Icon
                          className="size-3.5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-foreground">{item.name}</span>
                        <span className="font-mono text-[0.6rem] tracking-wide text-muted uppercase">
                          {statusLabel[item.status]}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Reveal>
      </Container>
    </section>
  );
}
