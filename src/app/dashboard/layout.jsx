"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { FaHome, FaBoxOpen, FaUser } from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(true);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-base-300">
        <p className="text-base-content">You must login to access dashboard.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-base-200 dark:bg-base-300">
      {/* Sidebar */}
      <div
        className={`bg-base-100 dark:bg-base-300 w-64 transition-all ${
          open ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 shadow-lg`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-base-300 dark:border-base-400">
          <Link
            href="/"
            className="text-2xl font-bold text-primary dark:text-primary-content"
          >
            🛍️ MAH TECH
          </Link>
          <button className="md:hidden btn btn-ghost" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        <ul className="mt-6">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-6 py-3 hover:bg-base-200 dark:hover:bg-base-400 rounded-lg"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-product"
              className="flex items-center gap-3 px-6 py-3 hover:bg-base-200 dark:hover:bg-base-400 rounded-lg"
            >
              <FaBoxOpen /> Add Product
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 px-6 py-3 hover:bg-base-200 dark:hover:bg-base-400 rounded-lg"
            >
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full text-left btn btn-error flex items-center gap-3 px-6 py-3 hover:bg-error-focus rounded-lg"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
