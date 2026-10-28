import {
  Space_Grotesk,
  JetBrains_Mono,
  Source_Serif_4,
} from "next/font/google";

export const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Editorial serif, scoped to long-form article prose only (not the portfolio
// identity). Only the weights/styles the prose uses are loaded: 400 normal
// (body), 400 italic (pull-quotes), 600 normal (list lead-ins).
export const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});
