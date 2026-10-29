import { credentials } from "@/data/credentials";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Credentials() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="border-b border-line"
    >
      <Container className="py-24 md:py-32">
        <SectionHeading
          id="credentials-heading"
          eyebrow="Credentials"
          title="Recognition that can be stated plainly."
          description="Listed only where the recognition was specified."
        />
        {credentials.length > 0 ? (
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {credentials.map((credential) => (
              <article
                key={credential.id}
                className="border border-line bg-surface p-6 md:p-8"
              >
                <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                  {credential.label}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground">
                  {credential.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                  {credential.detail}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-16 border border-line bg-surface px-6 py-10 text-muted">
            Credentials have not been added.
          </p>
        )}
      </Container>
    </section>
  );
}
