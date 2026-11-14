import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BackButton } from "@/components/ui/back-button";
import { TextLink } from "@/components/ui/text-link";
import { getProject, ownershipLabel, projects } from "@/data/projects";
import type { ProjectImage } from "@/types/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

function isPortrait(image: ProjectImage) {
  return Boolean(image.width && image.height && image.height > image.width);
}

function ProjectFallback() {
  return (
    <Container className="py-16 md:py-24">
      <BackButton fallback="/#work" />
      <p className="mt-10 text-muted">Loading project.</p>
    </Container>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectFallback />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const sections = project.caseStudy.filter((block) => block.body);
  const media = project.images.filter((image) => Boolean(image.src));
  const rows: ProjectImage[][] = [];

  for (let index = 0; index < media.length; index += 2) {
    rows.push(media.slice(index, index + 2));
  }

  return (
    <Container className="py-16 md:py-24">
      <BackButton fallback="/#work" />
      <p className="mt-10 font-mono text-xs tracking-[0.16em] text-accent uppercase">
        {ownershipLabel[project.ownership]}
        <span className="text-muted"> · {project.category}</span>
      </p>
      <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {project.title}
      </h1>
      {project.recognition ? (
        <p className="mt-4 text-accent">{project.recognition}</p>
      ) : null}
      <p className="mt-6 max-w-2xl text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
        {project.summary}
      </p>
      <div className="mt-8 max-w-2xl rounded-2xl border border-accent/25 bg-surface/60 p-5 sm:p-6">
        <p className="font-mono text-[0.65rem] tracking-[0.16em] text-accent uppercase">
          My contribution
        </p>
        <p className="mt-3 text-sm leading-7 text-foreground-secondary sm:text-[0.95rem]">
          {project.contribution}
        </p>
      </div>
      {project.technologies.length > 0 ? (
        <p className="mt-6 font-mono text-xs leading-relaxed text-muted">
          {project.technologies.join(" · ")}
        </p>
      ) : null}
      {project.links.length > 0 ? (
        <ul className="mt-8 space-y-2">
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
      ) : null}

      <div className="mt-16 max-w-3xl space-y-10">
        {sections.map((section) => (
          <section key={section.id}>
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
              {section.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-foreground-secondary">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      {rows.length > 0 ? (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
            Visuals
          </h2>
          <div className="mt-8 space-y-12">
            {rows.map((row) => (
              <div
                key={row.map((image) => image.src).join("|")}
                className={
                  row.length > 1 && isPortrait(row[1])
                    ? "grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]"
                    : "grid items-start gap-8"
                }
              >
                {row.map((image) => (
                  <figure
                    key={image.src}
                    className={isPortrait(image) ? "mx-auto w-full max-w-xs" : "min-w-0"}
                  >
                    {image.width && image.height ? (
                      <div className="relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes={
                            isPortrait(image)
                              ? "(min-width: 1024px) 288px, 70vw"
                              : "(min-width: 1024px) 720px, 100vw"
                          }
                          className="h-auto w-full rounded-xl border border-border"
                        />
                        {image.concept ? (
                          <p className="absolute top-3 left-3 rounded-md border border-border bg-background/90 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                            Concept visual
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                    {image.caption ? (
                      <figcaption className="mt-3 text-sm leading-relaxed text-muted">
                        {image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="mt-16">
        <BackButton fallback="/#work" />
      </div>
    </Container>
  );
}
