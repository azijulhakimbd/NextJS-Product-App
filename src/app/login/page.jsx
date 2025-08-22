"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    const result = await signIn("google", { redirect: true });

    if (result?.ok) {
      window.location.href = "/products"; 
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 text-base-content">
          Login
        </h2>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full rounded-2xl flex items-center justify-center gap-3 btn btn-error text-white mb-6"
        >
          <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
