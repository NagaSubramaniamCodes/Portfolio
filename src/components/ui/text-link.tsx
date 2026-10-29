import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  rel?: string;
};

export function TextLink({ href, children, className, rel }: TextLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-1.5 underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-foreground",
    className,
  );

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} rel={rel}>
        {children}
      </a>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel={rel ?? "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
