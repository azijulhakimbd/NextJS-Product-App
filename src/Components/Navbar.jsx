"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 dark:bg-base-300 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          🛍️ MAH TECH
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 font-medium">
          <li>
            <Link href="/" className="haver:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-primary">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
          </li>

          {/* Auth Buttons */}
          {!session ? (
            <li>
              <Link href="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="btn btn-error btn-sm"
              >
                Logout
              </button>
            </li>
          )}

          {/* Theme Toggle */}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-3 px-6 py-4 bg-base-200 dark:bg-base-300 font-medium">
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary-focus"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary-focus "
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary-focus "
            >
              Dashboard
            </Link>
          </li>

          {!session ? (
            <li>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary btn-sm w-full text-center"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  setMenuOpen(false);
                }}
                className="btn btn-error btn-sm w-full text-center"
              >
                Logout
              </button>
            </li>
          )}

          {/* Theme Toggle in mobile menu */}
          <li>
            <ThemeToggle className="w-full" />
          </li>
        </ul>
      )}
    </nav>
  );
}
