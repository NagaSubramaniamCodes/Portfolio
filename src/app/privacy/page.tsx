import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy notice for ${site.name}'s portfolio website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Container className="py-16 md:py-24">
      <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
        Privacy
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight text-foreground">
        Privacy notice
      </h1>
      <div className="mt-10 max-w-2xl space-y-6 text-sm leading-relaxed text-muted">
        <p>
          This portfolio collects only the information you choose to send through
          the contact form: name, email address, and message. Messages are used
          solely to respond to genuine enquiries about roles or project work.
        </p>
        <p>
          A contact email and phone number are published on the site for direct
          enquiries. Form delivery requires configured server credentials. Until
          delivery is configured, email, phone, or LinkedIn remain the public
          contact options.
        </p>
        <p>
          Privacy-friendly analytics from Vercel measure aggregate page views
          and basic performance. Advertising trackers are not used, and the
          contact form data is not sent to analytics.
        </p>
        <p>
          External links (GitHub, LinkedIn, live client sites) are governed by
          those services’ own policies. Client brand assets shown in case studies
          remain the property of their respective owners.
        </p>
        <p>
          For privacy questions, use the published email, phone, contact form, or
          LinkedIn. Do not send sensitive personal data through the form.
        </p>
      </div>
    </Container>
  );
}
