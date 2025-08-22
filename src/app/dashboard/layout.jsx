"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaHome, FaBoxOpen, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false); // sidebar initially closed on mobile
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (!session) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [session, router]);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-base-300">
        <p className="text-base-content text-center px-4">
          You must login to access dashboard. Redirecting to login...
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-base-200 dark:bg-base-300">
      {/* Sidebar (Overlay for Mobile) */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-base-100 dark:bg-base-300 shadow-lg w-64 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-64 md:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-base-300 dark:border-base-400">
          <h2 className="font-bold text-lg">Dashboard</h2>
          <button
            className="md:hidden btn btn-ghost btn-sm"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-6 space-y-1">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-6 py-3 hover:bg-base-200 dark:hover:bg-base-400 rounded-lg"
              onClick={() => setOpen(false)}
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-product"
              className="flex items-center gap-3 px-6 py-3 hover:bg-base-200 dark:hover:bg-base-400 rounded-lg"
              onClick={() => setOpen(false)}
            >
              <FaBoxOpen /> Add Product
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 px-6 py-3 hover:bg-base-200 dark:hover:bg-base-400 rounded-lg"
              onClick={() => setOpen(false)}
            >
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full text-left flex items-center gap-3 px-6 py-3 hover:bg-red-500 hover:text-white rounded-lg"
            >
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar (for mobile toggle) */}
        <div className="md:hidden flex items-center justify-between bg-base-100 dark:bg-base-300 px-4 py-3 shadow-md">
          <button className="btn btn-ghost btn-sm" onClick={() => setOpen(true)}>
            ☰
          </button>
          <span className="font-medium">Dashboard</span>
        </div>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
