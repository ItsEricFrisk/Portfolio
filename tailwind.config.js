/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#1c1c1c",
        light: "#fafafa",
        gray:  "#6B7280",
        hoverBg: "#f5f5f5",
        borderPrimary: "#a3a3a3",
        borderSecondary: "#e5e5e5",
        socials: "#1d4ed8",
        success: "#22c55e",
        error: "#ef4444",
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}