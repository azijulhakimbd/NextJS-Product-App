"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      {/* Google Login */}
      <button
        onClick={() => signIn("google")}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Continue with Google
      </button>

      {/* Credentials Login */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          signIn("credentials", { email, password, redirect: true });
        }}
        className="flex flex-col gap-2"
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login with Credentials
        </button>
      </form>
    </div>
  );
}
