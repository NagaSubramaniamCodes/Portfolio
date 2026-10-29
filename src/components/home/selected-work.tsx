import { projects } from "@/data/projects";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-b border-line">
      <Container className="py-24 md:py-32">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Projects, labeled by how they were made."
          description="Freelance, solo, and team projects are labeled on each card. Summaries stay with the work that was built."
        />
        {projects.length > 0 ? (
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="mt-16 border border-line bg-surface px-6 py-10 text-muted">
            Featured projects have not been added.
          </p>
        )}
      </Container>
    </section>
  );
}
