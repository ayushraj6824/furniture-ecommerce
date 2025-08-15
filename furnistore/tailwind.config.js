/******** Tailwind CSS Configuration ********/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F5F1E9",
        beige: "#F3EDE4",
        charcoal: "#1F2937",
        brown: {
          600: "#6B4F4F",
          700: "#5A3E36",
          800: "#4A332E",
        },
      },
      boxShadow: {
        card: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
}