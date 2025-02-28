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

        bgColor: "#121212",
        bgSecondary: "#3c3c3c",
        textColor: "#E0E0E0",
        yellowPrimary: "#FFC107",
        highlight: "#00AEEF",
        secondary: "#D89D00",
      },
      backgroundImage: {
        city: "url('/porec.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
