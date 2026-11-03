import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const shareImageSize = {
  width: 1200,
  height: 630,
};

export const shareImageContentType = "image/png";

export function createShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080D0B",
          color: "#F4F7F4",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#22C55E",
          }}
        >
          AI × Human portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "#A7B5AA",
              maxWidth: 900,
            }}
          >
            {site.role}
          </div>
        </div>
      </div>
    ),
    shareImageSize,
  );
}
