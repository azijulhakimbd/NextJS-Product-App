"use client";

import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center transition-colors duration-300">
        {/* Avatar */}
        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-md"
            />
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
          {session?.user?.name || "Guest User"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{session?.user?.email}</p>

        {/* Details Card */}
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-xl p-4 flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-200">Name:</span>
            <span className="text-gray-900 dark:text-gray-100">{session?.user?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-200">Email:</span>
            <span className="text-gray-900 dark:text-gray-100">{session?.user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-200">Role:</span>
            <span className="text-gray-900 dark:text-gray-100">User</span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-6 w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
