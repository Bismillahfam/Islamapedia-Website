/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all JSX files
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#978259",
        primaryDark: "#756547",
        secondary: "#8C7750",
        secondaryDark: "#6F6344",
      },
    },
  },
  plugins: [],
};
