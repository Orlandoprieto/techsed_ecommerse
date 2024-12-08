import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#DC2626",    // Azul brillante
        secondary: "#1E3A8A",  // Amarillo
        danger: "#AC0C0C",     // Rojo intenso
        dark: "#1B1B1B",       // Negro grisáceo
        neutral: "#8C8582",    // Gris neutro
      },
    },
  },
  plugins: [],
} satisfies Config;
