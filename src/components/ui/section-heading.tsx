import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  icon: Icon,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-accent uppercase">
        {Icon ? <Icon className="size-3.5" aria-hidden="true" /> : null}
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 font-display text-[1.85rem] leading-tight tracking-tight text-balance text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-foreground-secondary sm:text-base sm:leading-7">
          {description}
        </p>
      ) : null}
    </div>
  );
}
