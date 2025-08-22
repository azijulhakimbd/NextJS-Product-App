import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-xl text-blue-700 font-bold">MAH TECH</h1>
            <p>We provide the latest smartphones, tablets, and smartwatches from top brands,<br /> helping you find the perfect device with expert guidance.</p>
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0 text-center font-medium">
            <a href="/" className="hover:text-primary transition">Home</a>
            <a href="/products" className="hover:text-primary transition">Products</a>
            <a href="/dashboard" className="hover:text-primary transition">Dashboard</a>
            <a href="/privacy" className="hover:text-primary transition">Privacy</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Optional small print */}
        <div className="mt-6 text-center text-sm opacity-70">
          Built with ❤️ using Next.js + TailwindCSS + DaisyUI. Develop by <Link className="text-blue-600" href="https://azijulhakimbd.netlify.app">Md Azijul Hakim</Link>
        </div>
      </div>
    </footer>
  );
}
