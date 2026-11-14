import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { seoKeywords } from "@/content/seo";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import {
  DEFAULT_PALETTE,
  THEME_SWITCHING_ENABLED,
} from "@/themes/palettes";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  keywords: [...seoKeywords],
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    types: {
      "application/ld+json": "/schema/person",
    },
  },
};

export const viewport: Viewport = THEME_SWITCHING_ENABLED
  ? {
      themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#080D0B" },
        { media: "(prefers-color-scheme: light)", color: "#F7FAF7" },
      ],
      colorScheme: "dark light",
    }
  : {
      themeColor: "#080D0B",
      colorScheme: "dark",
    };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-palette={DEFAULT_PALETTE}
      className={`${THEME_SWITCHING_ENABLED ? "" : "dark "}${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-background font-sans text-foreground">
        <ThemeProvider initialPalette={DEFAULT_PALETTE}>
          <MotionProvider>
            <SkipLink />
            <ScrollProgress />
            <SiteHeader />
            <main id="main" tabIndex={-1} className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
