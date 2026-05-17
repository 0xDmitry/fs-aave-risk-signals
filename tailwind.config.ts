import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#303549",
        "ink-muted": "#62677B",
        muted: "#A5A8B6",
        panel: "#F1F1F3",
        paper: "#FFFFFF",
        surface: "#F7F7F9",
        surface2: "#F9F9FB",
        line: "#EAEBEF",
        header: "#2B2D3C",
        aave: "#2EBAC6",
        signal: "#B6509E",
        accent: "#FF607B",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "Arial",
          "ui-sans-serif",
          "system-ui",
        ],
        mono: ["var(--font-mono)", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
}

export default config
