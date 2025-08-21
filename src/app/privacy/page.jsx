"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We may collect personal information such as your name, email address, and payment information when you use our services. Non-personal information like browser type and IP address may also be collected for analytics purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The information we collect helps us improve our services, provide personalized experiences, and ensure security. We do not sell your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          3. Cookies
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and remember your preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          4. Data Security
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          5. Changes to This Policy
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mt-6">
          By using our services, you agree to this Privacy Policy. If you have any questions, please contact us at <a href="mailto:azijul.info@gmail.com" className="text-blue-500 hover:underline">azijul.info@gmail.com</a>.
        </p>
      </div>
    </motion.div>
  );
}
