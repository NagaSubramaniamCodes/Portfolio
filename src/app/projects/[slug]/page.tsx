import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
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
      <TextLink href="/#work">Selected work</TextLink>
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
  const rows: ProjectImage[][] = [];

  for (let index = 0; index < project.images.length; index += 2) {
    rows.push(project.images.slice(index, index + 2));
  }

  return (
    <Container className="py-16 md:py-24">
      <TextLink href="/#work">Selected work</TextLink>
      <p className="mt-10 font-mono text-xs tracking-[0.16em] text-accent uppercase">
        {ownershipLabel[project.ownership]}
        <span className="text-muted"> · {project.category}</span>
      </p>
      <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {project.title}
      </h1>
      {project.recognition ? (
        <p className="mt-4 text-accent">{project.recognition}</p>
      ) : null}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {project.summary}
      </p>
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
      ) : (
        <p className="mt-8 font-mono text-xs text-muted">
          No public link is available.
        </p>
      )}

      <div className="mt-16 max-w-3xl space-y-10">
        {sections.map((section) => (
          <section key={section.id}>
            <h2 className="text-2xl font-medium tracking-tight text-foreground">
              {section.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          Images
        </h2>
        {rows.length > 0 ? (
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
                          className="h-auto w-full border border-line"
                        />
                        {image.concept ? (
                          <p className="absolute top-3 left-3 border border-line bg-background/90 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
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
        ) : (
          <p className="mt-8 border border-line bg-surface px-6 py-10 text-muted">
            No image has been added.
          </p>
        )}
      </div>
    </Container>
  );
}
