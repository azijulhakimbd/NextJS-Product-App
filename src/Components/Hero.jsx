"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Discover Amazing{" "}
            <span className="text-blue-600 dark:text-blue-400">Products</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Shop the latest products with ease. Enjoy fast checkout, secure
            payment, and exclusive deals tailored just for you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
            >
              <FaShoppingCart /> Shop Now
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 rounded-lg border border-gray-400 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <Image
            src="https://i.postimg.cc/nVY9btB4/make-an-image-for-the-product-page-hero-section-website.jpg"
            alt="Shopping Illustration"
            width={500}
            height={500}
            priority
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
