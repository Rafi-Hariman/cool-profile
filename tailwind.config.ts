import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        metadata: {
          DEFAULT: "hsl(var(--metadata))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Marketing surface palette (homepage). Deliberately separate from the
        // dark portfolio tokens so /profile and /articles keep their theme.
        brand: {
          blue: "#2457E6",
          navy: "#101A38",
          cyan: "#0EA5E9",
          ink: "#121827",
          muted: "#657083",
          light: "#F7F9FD",
          line: "#E4E9F2",
          green: "#12A477",
          "green-soft": "#E6F7F0",
        },
        // Scoped article theme tokens (docs/10-MOTION exception note + the
        // /articles light/dark feature). Homepage tokens are untouched.
        "article-background": "hsl(var(--article-background))",
        "article-surface": "hsl(var(--article-surface))",
        "article-surface-muted": "hsl(var(--article-surface-muted))",
        "article-foreground": "hsl(var(--article-foreground))",
        "article-body": "hsl(var(--article-body))",
        "article-muted": "hsl(var(--article-muted))",
        "article-border": "hsl(var(--article-border))",
        "article-accent": "hsl(var(--article-accent))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        // Light, restrained elevation for the marketing cards.
        card: "0 1px 2px 0 rgb(16 26 56 / 0.04), 0 12px 32px -18px rgb(16 26 56 / 0.18)",
        "card-hover":
          "0 2px 4px 0 rgb(16 26 56 / 0.04), 0 20px 44px -20px rgb(16 26 56 / 0.24)",
        "brand-glow": "0 18px 50px -20px rgb(36 87 230 / 0.55)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
