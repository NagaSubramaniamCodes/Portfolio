import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="py-32">
      <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        This page is not on the site.
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-muted">
        The address may be mistyped, or the page has not been published.
      </p>
      <div className="mt-10">
        <Button href="/">Back to home</Button>
      </div>
    </Container>
  );
}
