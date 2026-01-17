/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Bu satırı ekle
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}