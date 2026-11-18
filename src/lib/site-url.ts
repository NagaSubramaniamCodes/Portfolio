export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  let value =
    configured && configured.length > 0
      ? configured
      : "http://localhost:3000";

  // Allow bare domains in env (e.g. nagabuilds.in) without breaking metadataBase.
  if (!/^https?:\/\//i.test(value)) {
    value = `https://${value}`;
  }

  return value.replace(/\/+$/, "");
}
