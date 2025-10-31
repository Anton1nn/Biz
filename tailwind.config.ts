import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad6a5',
          300: '#f7b86d',
          400: '#f39133',
          500: '#f0730c',
          600: '#e15802',
          700: '#bb4206',
          800: '#95340c',
          900: '#792c0d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
