import Link from "next/link";
import { mainNav } from "@/content/navigation";
import { profileLinks, site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { TextLink } from "@/components/ui/text-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-2xl font-medium tracking-tight text-foreground">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm leading-relaxed text-muted">{site.role}</p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
            On this page
          </p>
          <ul className="mt-4 space-y-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
            Profiles
          </p>
          <ul className="mt-4 space-y-3">
            {profileLinks.map((link) => (
              <li key={link.href}>
                <TextLink
                  href={link.href}
                  rel={link.href.startsWith("http") ? "me noopener noreferrer" : "me"}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-sm text-muted">
          © {site.copyrightYear} {site.name}
        </p>
      </Container>
    </footer>
  );
}
