import Link from "next/link";
import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg tracking-tight text-foreground">
            {site.name}
          </p>
          <p className="mt-2 max-w-md text-sm text-muted">{site.role}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-foreground-secondary">
          <a
            href={`mailto:${site.email}`}
            className="hover:text-foreground"
          >
            {site.email}
          </a>
          <a href={site.phoneHref} className="hover:text-foreground">
            {site.phone}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            WhatsApp
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/#contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </Container>
      <Container className="mt-8">
        <p className="font-mono text-[0.65rem] tracking-wide text-muted uppercase">
          © {site.copyrightYear} {site.name}. Built as an AI × Human portfolio.
        </p>
      </Container>
    </footer>
  );
}
