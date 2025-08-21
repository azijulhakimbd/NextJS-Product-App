"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          🛍️ MyShop
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-product"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Dashboard
            </Link>
          </li>

          {/* Auth Buttons */}
          {!isLoggedIn ? (
            <>
              <li>
                <Link
                  href="/login"
                  className="px-4 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="px-4 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </li>
          )}

          {/* Dark / Light Toggle */}
          {mounted && (
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-transform duration-300 hover:scale-110"
              >
                {theme === "dark" ? (
                  <FaSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <FaMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                )}
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-100 dark:bg-gray-800 font-medium">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/dashboard/add-product" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          </li>

          {!isLoggedIn ? (
            <>
              <li>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-1 rounded-lg bg-blue-600 text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-1 rounded-lg bg-green-600 text-white"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setMenuOpen(false);
                }}
                className="px-4 py-1 rounded-lg bg-red-600 text-white"
              >
                Logout
              </button>
            </li>
          )}

          {mounted && (
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}
