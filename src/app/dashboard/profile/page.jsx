"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Profile</h2>
      <p><strong>Name:</strong> {session?.user?.name}</p>
      <p><strong>Email:</strong> {session?.user?.email}</p>
      <img src={session?.user?.image} alt="Profile" className="mt-4 rounded-full w-24 h-24" />
    </div>
  );
}
