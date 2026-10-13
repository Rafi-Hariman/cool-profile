import { ImageResponse } from "next/og";

export const alt =
  "Rafi Hariman — Frontend Developer at BSI UII";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card (og:image) generated at build time — no third-party
 * image tooling. Colours mirror the design tokens: deep-space background,
 * cyan accent (#0da2e7 ≈ hsl(199 89% 48%)), near-white foreground.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#020409",
          color: "#f4f7fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#0da2e7",
            }}
          />
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.2em",
              color: "#0da2e7",
              textTransform: "uppercase",
              marginLeft: 16,
            }}
          >
            Portfolio
          </div>
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginTop: 48,
          }}
        >
          Rafi Hariman
        </div>

        <div style={{ fontSize: 34, color: "#9aa7b5", marginTop: 24 }}>
          Frontend Developer at BSI UII
        </div>
      </div>
    ),
    { ...size }
  );
}
