"use client";

import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-base-300 p-4">
      <div className="w-full max-w-md bg-base-100 dark:bg-base-300 rounded-3xl shadow-xl p-8 flex flex-col items-center transition-colors duration-300">
        {/* Avatar */}
        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-base-100 dark:border-base-300 shadow-md"
            />
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-3xl font-bold text-base-content mb-2 text-center">
          {session?.user?.name || "Guest User"}
        </h2>
        <p className="text-base-content/70 mb-4 text-center">{session?.user?.email}</p>

        {/* Details Card */}
        <div className="w-full bg-base-200 dark:bg-base-100 rounded-xl p-4 flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="font-medium text-base-content/80">Name:</span>
            <span className="text-base-content">{session?.user?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-base-content/80">Email:</span>
            <span className="text-base-content">{session?.user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-base-content/80">Role:</span>
            <span className="text-base-content">User</span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-6 w-full btn btn-error text-white font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
