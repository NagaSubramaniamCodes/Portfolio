export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const value =
    configured && configured.length > 0
      ? configured
      : "http://localhost:3000";

  return value.replace(/\/+$/, "");
}
