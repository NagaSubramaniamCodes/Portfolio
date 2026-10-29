import { profileLinks } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-line">
      <Container className="py-24 md:py-32">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="A freelance practice across AI and the web."
        />
        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
          <p>
            Freelance engagements cover generative AI applications, assistants
            grounded in a document set, automated workflows, SaaS platforms, and
            websites prepared for deployment.
          </p>
          <p>
            Each project states whether it was freelance, solo, or built with a
            team.
          </p>
        </div>
        <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-8">
          {profileLinks.map((link) => (
            <li key={link.href}>
              <TextLink
                href={link.href}
                rel={
                  link.href.startsWith("http")
                    ? "me noopener noreferrer"
                    : "me"
                }
              >
                {link.label}
              </TextLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
