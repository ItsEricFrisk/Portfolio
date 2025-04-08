/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#1c1c1c",
        light: "#fafafa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}