import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "neural-green": "#00FF9C",
        "neural-glow": "#38FFB3",
        "deep-emerald": "#00C17A",
        "workspace-bg": "#0B0F0C",
        "workspace-card": "#111814",
        "workspace-accent": "#00C97B",
        "deep-black": "#0A0F14",
        "dark-graphite": "#111827",
        "text-white": "#E5E7EB",
        "subtext-gray": "#9CA3AF",
        "divider-gray": "#1F2937"
      },
      fontFamily: {
        headline: ["'Exo 2'", "'Orbitron'", ...fontFamily.sans],
        body: ["Inter", ...fontFamily.sans]
      },
      boxShadow: {
        neural: "0 0 25px rgba(0, 255, 156, 0.35)"
      },
      backgroundImage: {
        "neural-gradient":
          "radial-gradient(circle at top, rgba(0,255,156,0.2), transparent 60%), radial-gradient(circle at bottom, rgba(56,255,179,0.15), transparent 55%)"
      },
      animation: {
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "neural-pulse": "neural-pulse 1.2s ease-in-out infinite"
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        "neural-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(0,255,156,0.6)" },
          "70%": { boxShadow: "0 0 0 10px rgba(0,255,156,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0,255,156,0)" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

