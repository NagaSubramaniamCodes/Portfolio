"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";

type BackButtonProps = {
  fallback?: string;
  className?: string;
};

export function BackButton({ fallback = "/", className }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
          return;
        }

        router.push(fallback);
      }}
      className={cn(
        "inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground",
        className,
      )}
    >
      <ArrowLeft aria-hidden="true" className="size-4" />
      Back
    </button>
  );
}
