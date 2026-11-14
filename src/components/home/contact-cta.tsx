"use client";

import { useState } from "react";
import {
  Download,
  LoaderCircle,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type FormState = "idle" | "submitting" | "success" | "error" | "pending-config";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validateFields(input: {
  name: string;
  email: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (!input.name.trim()) errors.name = "Name is required.";
  if (!input.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!input.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function ContactCta() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const body = String(data.get("message") ?? "");

    const errors = validateFields({ name, email, message: body });
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setState("error");
      setMessage("Please fix the highlighted fields.");
      return;
    }

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: body,
          company: data.get("company"),
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
        pending?: boolean;
      };

      if (response.status === 503 || payload.pending) {
        setState("pending-config");
        setMessage(
          payload.error ??
            "Contact delivery is awaiting server configuration. Please reach out on LinkedIn, email, or WhatsApp.",
        );
        return;
      }

      if (!response.ok || !payload.ok) {
        setState("error");
        setMessage(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      setMessage("Message received. I usually reply within two business days.");
      setFieldErrors({});
      form.reset();
    } catch {
      setState("error");
      setMessage("Network error. Please try email, WhatsApp, or LinkedIn.");
    }
  }

  const busy = state === "submitting";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-accent/20 py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/35 bg-surface/70 p-6 shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_12%,transparent),0_30px_80px_-48px_var(--glow)] sm:p-8 md:p-10">
            <div className="ambient-glow pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
              <div>
                <SectionHeading
                  icon={Send}
                  eyebrow="Contact"
                  title="Let’s talk about a role or project"
                  description="Hiring managers: share the role and stack. Founders and clients: share the website, storefront, or GenAI scope. I usually reply within two business days."
                />
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/60 px-4 py-2 font-mono text-xs tracking-wide text-accent">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  {site.availability}
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                      <Mail className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                        Email
                      </span>
                      <span className="mt-0.5 block">{site.email}</span>
                    </span>
                  </a>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                      <Phone className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                        Phone
                      </span>
                      <span className="mt-0.5 block">{site.phone}</span>
                    </span>
                  </a>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                      <MessageCircle className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.6rem] tracking-[0.16em] text-muted uppercase">
                        WhatsApp
                      </span>
                      <span className="mt-0.5 block">{site.phone}</span>
                    </span>
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Magnetic className="w-full sm:w-auto">
                    <Button href={site.resumePath} className="w-full sm:w-auto">
                      Download resume
                      <Download className="size-4" aria-hidden="true" />
                    </Button>
                  </Magnetic>
                  <Button
                    href={site.linkedin}
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    href={site.github}
                    variant="ghost"
                    className="w-full sm:w-auto"
                  >
                    GitHub
                  </Button>
                </div>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-secondary">
                  Prefer the form for structured enquiries, or reach out
                  directly by email, phone, or WhatsApp.
                </p>
              </div>

              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-border bg-background/80 p-5 sm:p-6 md:p-7"
                noValidate
              >
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-4">
                  <label className="block">
                    <span className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                      Name
                    </span>
                    <input
                      name="name"
                      required
                      maxLength={120}
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={
                        fieldErrors.name ? "contact-name-error" : undefined
                      }
                      className={cn(
                        "mt-2 w-full rounded-lg border bg-surface px-3 py-3 text-sm text-foreground outline-none transition-colors focus-visible:border-accent/50 focus-visible:ring-2 focus-visible:ring-focus",
                        fieldErrors.name ? "border-red-500/70" : "border-border",
                      )}
                    />
                    {fieldErrors.name ? (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {fieldErrors.name}
                      </p>
                    ) : null}
                  </label>
                  <label className="block">
                    <span className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email ? "contact-email-error" : undefined
                      }
                      className={cn(
                        "mt-2 w-full rounded-lg border bg-surface px-3 py-3 text-sm text-foreground outline-none transition-colors focus-visible:border-accent/50 focus-visible:ring-2 focus-visible:ring-focus",
                        fieldErrors.email
                          ? "border-red-500/70"
                          : "border-border",
                      )}
                    />
                    {fieldErrors.email ? (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {fieldErrors.email}
                      </p>
                    ) : null}
                  </label>
                  <label className="block">
                    <span className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                      Message
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      maxLength={4000}
                      placeholder="Role details, or website / GenAI project scope…"
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={
                        fieldErrors.message
                          ? "contact-message-error"
                          : undefined
                      }
                      className={cn(
                        "mt-2 w-full resize-y rounded-lg border bg-surface px-3 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors focus-visible:border-accent/50 focus-visible:ring-2 focus-visible:ring-focus",
                        fieldErrors.message
                          ? "border-red-500/70"
                          : "border-border",
                      )}
                    />
                    {fieldErrors.message ? (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {fieldErrors.message}
                      </p>
                    ) : null}
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Magnetic className="w-full sm:w-auto">
                    <Button
                      type="submit"
                      disabled={busy || state === "success"}
                      className="w-full min-w-[10rem] sm:w-auto"
                    >
                      {busy ? (
                        <>
                          <LoaderCircle
                            className="size-4 animate-spin"
                            aria-hidden="true"
                          />
                          Sending
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="size-4" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </Magnetic>
                  {message ? (
                    <p
                      className={
                        state === "success"
                          ? "text-sm text-accent"
                          : "text-sm text-foreground-secondary"
                      }
                      role="status"
                    >
                      {message}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
