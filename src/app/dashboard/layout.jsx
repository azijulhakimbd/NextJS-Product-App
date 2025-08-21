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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 dark:text-gray-200">You must login to access dashboard.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`bg-white dark:bg-gray-800 w-64 transition-all ${open ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 shadow-lg`}>
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">MyShop</h1>
          <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
        </div>
        <ul className="mt-6">
          <li>
            <Link href="/dashboard" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard/add-product" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaBoxOpen /> Add Product
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full text-left flex items-center gap-3 px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
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
