import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover",
  secondary:
    "border border-line bg-transparent text-foreground hover:border-line-strong",
} as const;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

function isSamePageHash(href: string) {
  return href.startsWith("#");
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center px-5 text-sm font-medium tracking-wide transition-colors",
    variants[variant],
    className,
  );

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
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
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (isSamePageHash(href)) {
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
