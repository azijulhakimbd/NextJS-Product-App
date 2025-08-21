"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    
    Swal.fire({
      title: "Logging in...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const result = await signIn("google", { redirect: false });

    Swal.close(); 

    if (result?.ok) {
      Swal.fire({
        icon: "success",
        title: "Login successful!",
        text: "Redirecting to dashboard...",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/"; 
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 text-gray-800">
          Login
        </h2>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-3 rounded-lg font-medium mb-6"
        >
          <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
