import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta de marca Romi Second Hand
        rosa: { DEFAULT: "#F4C6D3", medio: "#E89BB0" },
        fucsia: "#E5308A",
        burdeos: "#7A2E44",
        dorado: "#C9A24B",
        crema: "#FDF6F3",
        carbon: "#2E2A2C",
      },
      fontFamily: {
        script: ['"Dancing Script"', "cursive"],
        display: ['"Playfair Display"', "serif"],
        sans: ['"Poppins"', "system-ui", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
      },
      animation: { float: "float 3s ease-in-out infinite" },
    },
  },
  plugins: [],
} satisfies Config;
