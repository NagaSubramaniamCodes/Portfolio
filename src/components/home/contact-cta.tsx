import { profileLinks, site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { TextLink } from "@/components/ui/text-link";

export function ContactCta() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <Container className="py-24 md:py-32">
        <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-4 max-w-2xl text-3xl tracking-tight text-balance text-foreground sm:text-4xl"
        >
          Tell me about the work.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Send a short note about the product and whether the work is AI, web,
          or both.
        </p>
        <p className="mt-10">
          <a
            href={`mailto:${site.email}`}
            className="inline-block max-w-full text-[clamp(1.15rem,6vw,2.25rem)] leading-snug tracking-tight text-foreground underline decoration-line-strong underline-offset-8 transition-colors hover:decoration-accent"
          >
            {site.email}
          </a>
        </p>
        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
          {profileLinks
            .filter((link) => link.label !== "Email")
            .map((link) => (
              <li key={link.href}>
                <TextLink href={link.href} rel="me noopener noreferrer">
                  {link.label}
                </TextLink>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}
