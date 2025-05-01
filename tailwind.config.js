/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all JSX files
  ],
  darkMode: "media",
  theme: {
    extend: {
      animation: {
        "bg-scroll": "bg-scroll 30s linear infinite",
      },
      keyframes: {
        scrollRight: {
          "0%": { backgroundPosition: "left center" },
          "100%": { backgroundPosition: "right center" },
        },
      },
      animation: {
        "scroll-right": "scrollRight 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
  darkMode: "class",
};
