import { skillCategories } from "@/data/skills";
import { Container } from "@/components/layout/container";
import { SkillBoard } from "@/components/home/skill-board";
import { SectionHeading } from "@/components/ui/section-heading";

export function Expertise() {
  const categories = skillCategories.filter((category) =>
    category.groups.some((group) => group.items.length > 0),
  );

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="border-b border-line"
    >
      <Container className="py-24 md:py-32">
        <SectionHeading
          id="expertise-heading"
          eyebrow="Technical expertise"
          title="Four areas of technical work."
          description="Project and working-knowledge labels follow the featured work and this site."
        />
        {categories.length > 0 ? (
          <SkillBoard categories={categories} />
        ) : (
          <p className="mt-14 border border-line bg-surface px-6 py-10 text-muted">
            Technologies have not been listed.
          </p>
        )}
      </Container>
    </section>
  );
}
