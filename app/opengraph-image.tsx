import { ImageResponse } from "next/og";

export const alt =
  "Rahesa Digital Systems — jasa pembuatan sistem informasi dan aplikasi custom";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Marketing social card generated at build time. Mirrors the homepage brand
 * tokens: white/light surface, blue #2457E6 → cyan #0EA5E9, navy #101A38.
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
          justifyContent: "space-between",
          padding: "76px 84px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f7f9fd 58%, #e8f3fd 100%)",
          color: "#121827",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 440,
            height: 440,
            borderRadius: 9999,
            background: "rgba(36, 87, 230, 0.10)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #2457e6, #0ea5e9)",
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 700 }}>Rahesa Digital Systems</div>
            <div style={{ fontSize: 16, color: "#657083" }}>
              Sistem &amp; Aplikasi Custom
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.16em",
              color: "#2457e6",
              textTransform: "uppercase",
            }}
          >
            Jasa Pembuatan Sistem
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            <span>Sistem &amp; Aplikasi</span>
            <span style={{ color: "#2457e6" }}>Sesuai Kebutuhan</span>
          </div>
          <div style={{ fontSize: 26, color: "#657083", maxWidth: 820 }}>
            Sistem informasi, aplikasi web, Android, dashboard, dan integrasi.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#101A38",
          }}
        >
          <span style={{ fontWeight: 600 }}>rafihariman.my.id</span>
          <span style={{ color: "#657083" }}>Yogyakarta, Indonesia</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
