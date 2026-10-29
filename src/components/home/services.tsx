import { services } from "@/data/services";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-line"
    >
      <Container className="py-24 md:py-32">
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="What a freelance engagement can include."
          description="These are services offered. They describe available work and are separate from the projects above."
        />
        {services.length > 0 ? (
          <ol className="mt-16 border-t border-line">
            {services.map((service, index) => (
              <li
                key={service.id}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8"
              >
                <p className="font-mono text-xs text-accent md:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-medium tracking-tight text-foreground md:col-span-4">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-muted md:col-span-6">
                  {service.description}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-16 border border-line bg-surface px-6 py-10 text-muted">
            Services have not been added.
          </p>
        )}
      </Container>
    </section>
  );
}
