"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useAppearance, usePalette } from "@/components/theme/theme-provider";
import { THEME_SWITCHING_ENABLED, palettes } from "@/themes/palettes";
import { cn } from "@/lib/cn";

export function ThemeControls({ compact = false }: { compact?: boolean }) {
  const { palette, setPalette, mounted: paletteMounted, switchingEnabled } =
    usePalette();
  const { theme, setTheme, resolvedTheme } = useAppearance();

  // Keep this component mounted in the tree; hide UI while switching is off.
  if (!THEME_SWITCHING_ENABLED || !switchingEnabled) {
    return null;
  }

  const ready = paletteMounted;

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        compact ? "flex-wrap" : "flex-wrap justify-end",
      )}
    >
      <div
        className="inline-flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1"
        role="group"
        aria-label="Appearance"
      >
        {(
          [
            { id: "light", label: "Light", icon: Sun },
            { id: "system", label: "System", icon: Monitor },
            { id: "dark", label: "Dark", icon: Moon },
          ] as const
        ).map(({ id, label, icon: Icon }) => {
          const active = ready && theme === id;
          return (
            <button
              key={id}
              type="button"
              aria-label={`${label} appearance`}
              aria-pressed={active}
              className={cn(
                "inline-flex size-8 items-center justify-center rounded-full text-muted transition-colors duration-200",
                active && "bg-accent text-accent-foreground",
                !active && "hover:text-foreground",
              )}
              onClick={() => setTheme(id)}
            >
              <Icon className="size-3.5" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div
        className="inline-flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1"
        role="group"
        aria-label="Colour palette"
      >
        {palettes.map((item) => {
          const active = ready && palette === item.id;
          return (
            <button
              key={item.id}
              type="button"
              title={item.label}
              aria-label={`${item.label} palette`}
              aria-pressed={active}
              className={cn(
                "relative size-8 rounded-full transition-transform duration-200",
                active &&
                  "scale-110 ring-2 ring-focus ring-offset-2 ring-offset-background",
              )}
              style={{ backgroundColor: item.swatch }}
              onClick={() => setPalette(item.id)}
            >
              <span className="sr-only">{item.label}</span>
            </button>
          );
        })}
      </div>

      <span className="sr-only">
        Current appearance: {resolvedTheme ?? "system"}. Current palette:{" "}
        {palette}.
      </span>
    </div>
  );
}
