import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type RiseProps = {
  children: ReactNode;
  className?: string;
};

export function Rise({ children, className }: RiseProps) {
  return <div className={cn("motion-rise", className)}>{children}</div>;
}
