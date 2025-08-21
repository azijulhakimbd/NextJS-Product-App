import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-xl font-bold text-white">MyApp</h1>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0 text-center">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com/azijulhakimbd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com/azijulhakimbd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com/in/azijulhakimbd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com/azijulhakimbd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Optional small print */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Built with ❤️ using Next.js and Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
