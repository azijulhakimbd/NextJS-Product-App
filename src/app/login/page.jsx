"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 text-gray-800">
          Login
        </h2>

        {/* Google Login */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-3 rounded-lg font-medium mb-6"
        >
          <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Credentials Login */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            signIn("credentials", { email, password, redirect: true });
          }}
          className="flex text-black flex-col gap-4"
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none rounded-lg px-4 py-3"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none rounded-lg px-4 py-3"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-3 rounded-lg font-medium"
          >
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
