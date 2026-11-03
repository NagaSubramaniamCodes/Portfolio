"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeControls } from "@/components/theme/theme-controls";
import { BackButton } from "@/components/ui/back-button";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function sectionIdFromHref(href: string) {
  return href.replace(/^\/#/, "").replace(/^#/, "");
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const clickLockUntil = useRef(0);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId("");
      return;
    }

    const sectionIds = mainNav.map((item) => sectionIdFromHref(item.href));

    const resolveActive = () => {
      // Ignore scroll-driven updates briefly after a nav click so the underline
      // doesn't flicker while smooth-scroll is mid-flight.
      if (performance.now() < clickLockUntil.current) return;

      const sections = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, el } : null;
        })
        .filter((entry): entry is { id: string; el: HTMLElement } =>
          Boolean(entry),
        );

      if (sections.length === 0) return;

      const headerHeight = headerRef.current?.offsetHeight ?? 64;
      // Probe in the upper third of the viewport (below the sticky header).
      // A line glued to the header fails for tall sections + scroll-margin:
      // Selected Work can fill the screen while Skills still "owns" the top edge.
      const probeOffset = Math.max(headerHeight + 24, window.innerHeight * 0.32);
      const probe = window.scrollY + probeOffset;

      let current = sections[0].id;
      for (const section of sections) {
        const top = section.el.getBoundingClientRect().top + window.scrollY;
        if (probe >= top) {
          current = section.id;
        } else {
          break;
        }
      }

      const doc = document.documentElement;
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 8;
      if (atBottom) {
        current = sections[sections.length - 1].id;
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    let frame = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(resolveActive);
    };

    resolveActive();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("hashchange", resolveActive);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", resolveActive);
    };
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  const onNavClick = (href: string) => {
    const id = sectionIdFromHref(href);
    setActiveId(id);
    clickLockUntil.current = performance.now() + 700;
    closeMenu();
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-6 md:px-8">
        <div className="flex min-w-0 items-center gap-3">
          {pathname !== "/" ? <BackButton /> : null}
          <Link
            href="/"
            className="truncate font-display text-lg font-medium tracking-tight text-foreground"
          >
            <span className="sm:hidden">{site.shortName}</span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const id = sectionIdFromHref(item.href);
            const active = activeId === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onNavClick(item.href)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative px-2.5 py-2 text-sm transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeControls compact />
          </div>
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-xs font-medium text-accent hover:bg-accent/15 lg:inline-flex"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Resume
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-xs font-medium text-accent-foreground hover:brightness-110 lg:inline-flex"
          >
            Contact
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground xl:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border xl:hidden"
          >
            <nav className="flex flex-col px-6 py-3" aria-label="Mobile">
              {mainNav.map((item) => {
                const id = sectionIdFromHref(item.href);
                const active = activeId === id;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => onNavClick(item.href)}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "flex min-h-11 items-center text-base",
                      active ? "text-accent" : "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-border px-6 py-4 md:hidden">
              <ThemeControls />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
