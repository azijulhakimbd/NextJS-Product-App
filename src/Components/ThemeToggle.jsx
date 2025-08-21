"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; 

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform ${className}`}
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <FaSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}
