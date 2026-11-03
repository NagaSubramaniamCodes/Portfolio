import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type RiseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Rise({ children, className, delay = 0 }: RiseProps) {
  const style =
    delay > 0
      ? ({ animationDelay: `${delay}s` } as CSSProperties)
      : undefined;

  return (
    <div className={cn("motion-rise", className)} style={style}>
      {children}
    </div>
  );
}
