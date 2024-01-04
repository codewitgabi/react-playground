/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--primary-background)",
        bgSecondary: "var(--secondary-background)",
        textPrimary: "var(--primary-color)",
        textSecondary: "var(--secondary-color)",
        textYellow: "var(--yellow)"
      }
    },
  },
  plugins: [],
}

