import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#1A1A1C",
        "surface-2": "#2A2A2D",
        text: "#FAFAFA",
        muted: "#8C8C8C",
        accent: {
          purple: "#8B2BC2",
          red: "#FF2D55",
          orange: "#CC4400",
        },
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.08)",
        subtle: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        pill: "9999px",
      },
      maxWidth: {
        container: "48rem",
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
