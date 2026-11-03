"use client";

import {
  ThemeProvider as NextThemesProvider,
  useTheme,
} from "next-themes";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_APPEARANCE,
  DEFAULT_PALETTE,
  PALETTE_COOKIE_KEY,
  PALETTE_STORAGE_KEY,
  THEME_SWITCHING_ENABLED,
  type PaletteId,
  isPaletteId,
  resolvePalette,
} from "@/themes/palettes";

type PaletteContextValue = {
  palette: PaletteId;
  setPalette: (id: PaletteId) => void;
  mounted: boolean;
  switchingEnabled: boolean;
};

const PaletteContext = createContext<PaletteContextValue | null>(null);

function persistPalette(id: PaletteId) {
  document.documentElement.dataset.palette = id;
  window.localStorage.setItem(PALETTE_STORAGE_KEY, id);
  document.cookie = `${PALETTE_COOKIE_KEY}=${id};path=/;max-age=31536000;samesite=lax`;
}

function lockFixedBrand() {
  document.documentElement.dataset.palette = DEFAULT_PALETTE;
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
}

function PaletteController({
  children,
  initialPalette,
}: {
  children: ReactNode;
  initialPalette: PaletteId;
}) {
  const [palette, setPaletteState] = useState<PaletteId>(
    THEME_SWITCHING_ENABLED ? initialPalette : DEFAULT_PALETTE,
  );
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (!THEME_SWITCHING_ENABLED) {
      lockFixedBrand();
      setPaletteState(DEFAULT_PALETTE);
      setTheme(DEFAULT_APPEARANCE);
      setMounted(true);
      return;
    }

    const stored = window.localStorage.getItem(PALETTE_STORAGE_KEY);
    const next = resolvePalette(stored ?? initialPalette);
    setPaletteState(next);
    persistPalette(next);
    setMounted(true);
  }, [initialPalette, setTheme]);

  const setPalette = useCallback((id: PaletteId) => {
    if (!THEME_SWITCHING_ENABLED) return;
    if (!isPaletteId(id)) return;
    setPaletteState(id);
    persistPalette(id);
  }, []);

  const value = useMemo(
    () => ({
      palette,
      setPalette,
      mounted,
      switchingEnabled: THEME_SWITCHING_ENABLED,
    }),
    [palette, setPalette, mounted],
  );

  return (
    <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>
  );
}

export function ThemeProvider({
  children,
  initialPalette = DEFAULT_PALETTE,
}: {
  children: ReactNode;
  initialPalette?: PaletteId;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={THEME_SWITCHING_ENABLED ? "system" : DEFAULT_APPEARANCE}
      forcedTheme={THEME_SWITCHING_ENABLED ? undefined : DEFAULT_APPEARANCE}
      enableSystem={THEME_SWITCHING_ENABLED}
      disableTransitionOnChange={false}
    >
      <PaletteController initialPalette={initialPalette}>
        {children}
      </PaletteController>
    </NextThemesProvider>
  );
}

export function usePalette() {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error("usePalette must be used within ThemeProvider");
  }
  return context;
}

export function useAppearance() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  return { theme, setTheme, resolvedTheme, systemTheme };
}
