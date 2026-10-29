import { practiceNotes, site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Rise } from "@/components/motion/rise";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Rise>
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Freelance portfolio
          </p>
          <h1 className="mt-6 max-w-full text-[clamp(1.7rem,8.2vw,4.25rem)] leading-[1.05] font-medium tracking-[-0.04em] whitespace-nowrap text-foreground">
            {site.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-muted sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Generative AI applications, retrieval-based assistants, workflow
            automation, SaaS platforms, and websites, taken on as freelance
            engagements.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`}>Email me</Button>
            <Button href="/#work" variant="secondary">
              View selected work
            </Button>
          </div>
        </Rise>
      </Container>
      <Container className="pb-0">
        <dl className="grid border-t border-line sm:grid-cols-3">
          {practiceNotes.map((note) => (
            <div
              key={note.label}
              className="border-b border-line py-6 last:border-b-0 sm:border-r sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <dt className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
                {note.label}
              </dt>
              <dd className="mt-2 text-foreground">
                {note.href ? (
                  <a
                    href={note.href}
                    className="underline decoration-line-strong underline-offset-4 hover:decoration-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {note.value}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  note.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
