/**
 * Theme switching kill-switch.
 * - false: Emerald dark only (current product decision)
 * - true: restore 4 palettes + light/dark/system controls
 *
 * Flip this to `true` in a future prompt to bring switchers back.
 */
export const THEME_SWITCHING_ENABLED = false;

export const paletteIds = [
  "emerald",
  "aurora",
  "cyber",
  "spectrum",
] as const;

export type PaletteId = (typeof paletteIds)[number];

export const appearanceIds = ["dark", "light"] as const;

export type AppearanceId = (typeof appearanceIds)[number];

export type PaletteMeta = {
  id: PaletteId;
  label: string;
  description: string;
  swatch: string;
};

export const palettes: readonly PaletteMeta[] = [
  {
    id: "emerald",
    label: "Emerald Intelligence",
    description: "Default brand identity",
    swatch: "#22C55E",
  },
  {
    id: "aurora",
    label: "Aurora Intelligence",
    description: "Violet and cyan signals",
    swatch: "#8B5CF6",
  },
  {
    id: "cyber",
    label: "Cyber Nature",
    description: "Chartreuse technical light",
    swatch: "#B4E600",
  },
  {
    id: "spectrum",
    label: "Human Spectrum",
    description: "Warm human accents",
    swatch: "#FB923C",
  },
] as const;

export const DEFAULT_PALETTE: PaletteId = "emerald";
export const DEFAULT_APPEARANCE: AppearanceId = "dark";
export const PALETTE_STORAGE_KEY = "portfolio-palette";
export const PALETTE_COOKIE_KEY = "portfolio-palette";

export function isPaletteId(value: string | null | undefined): value is PaletteId {
  return paletteIds.includes(value as PaletteId);
}

export function resolvePalette(
  value: string | null | undefined,
): PaletteId {
  return isPaletteId(value) ? value : DEFAULT_PALETTE;
}
