import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:brightness-110 shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_40%,transparent)]",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-hover",
  ghost: "text-foreground-secondary hover:text-foreground hover:bg-surface",
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  newTab?: boolean;
};

function isNativeHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.endsWith(".pdf")
  );
}

function opensInNewTab(href: string, external?: boolean, newTab?: boolean) {
  if (newTab || external) return true;
  if (href.startsWith("http") || href.endsWith(".pdf")) return true;
  return false;
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const href = props.href;
    if (isNativeHref(href) || props.external || props.newTab) {
      const newTab = opensInNewTab(href, props.external, props.newTab);
      return (
        <a
          href={href}
          className={classes}
          {...(newTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
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

  const {
    children: _children,
    className: _className,
    variant: _variant,
    href: _href,
    ...rest
  } = props as ButtonAsButton & { href?: undefined };

  return (
    <button type={rest.type ?? "button"} className={classes} {...rest}>
      {children}
    </button>
  );
}
