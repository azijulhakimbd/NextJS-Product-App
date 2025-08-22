"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-base-200"
    >
      <div className="max-w-4xl mx-auto bg-base-100 rounded-3xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-base-content">
          Privacy Policy
        </h1>

        <p className="mb-4 leading-relaxed text-base-content/80">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-base-content">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-base-content/80">
          We may collect personal information such as your name, email address, and payment information when you use our services. Non-personal information like browser type and IP address may also be collected for analytics purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-base-content">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 text-base-content/80">
          The information we collect helps us improve our services, provide personalized experiences, and ensure security. We do not sell your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-base-content">
          3. Cookies
        </h2>
        <p className="mb-4 text-base-content/80">
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and remember your preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-base-content">
          4. Data Security
        </h2>
        <p className="mb-4 text-base-content/80">
          We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-base-content">
          5. Changes to This Policy
        </h2>
        <p className="mb-4 text-base-content/80">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>

        <p className="mt-6 text-base-content/80">
          By using our services, you agree to this Privacy Policy. If you have any questions, please contact us at{" "}
          <a href="mailto:azijul.info@gmail.com" className="link link-primary">
            azijul.info@gmail.com
          </a>.
        </p>
      </div>
    </motion.div>
  );
}
