import type { Metadata, Viewport } from "next";
import { fontMono, fontSans } from "@/components/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adi — Creative Developer",
  description:
    "Portfolio of a creative developer building kinetic, high-performance interfaces. Explore featured work, stack and contact.",
  keywords: ["creative developer", "portfolio", "frontend engineer", "react", "motion"],
  authors: [{ name: "Adi" }],
};

export const viewport: Viewport = {
  themeColor: "#030407",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
