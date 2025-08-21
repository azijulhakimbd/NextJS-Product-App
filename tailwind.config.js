/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        primary: {
          light: "#3b82f6", // blue-500
          dark: "#2563eb",  // blue-600
        },
        secondary: {
          light: "#f59e0b", // amber-500
          dark: "#d97706",  // amber-600
        },
        background: {
          light: "#ffffff",
          dark: "#0f172a", // slate-900
        },
        text: {
          light: "#1e293b", // slate-800
          dark: "#f1f5f9",  // slate-100
        },
      },
    },
  },
  plugins: [],
};
