import { skillGroups } from "@/data/skills";
import { Container } from "@/components/layout/container";
import { SkillBoard } from "@/components/home/skill-board";
import { SectionHeading } from "@/components/ui/section-heading";

export function Expertise() {
  const groups = skillGroups.filter((group) => group.items.length > 0);

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
          title="Technologies named in the work."
          description="Each name is tied to a featured project or to this site. The list is not a proficiency scale, and it does not include tools that are not on record."
        />
        {groups.length > 0 ? (
          <SkillBoard groups={groups} />
        ) : (
          <p className="mt-14 border border-line bg-surface px-6 py-10 text-muted">
            Technologies have not been listed.
          </p>
        )}
      </Container>
    </section>
  );
}
