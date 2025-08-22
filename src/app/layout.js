"use client";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <SessionProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </SessionProvider>
      </body>
    </html>
  );
}

// ✅ Conditional Layout
function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // Navbar/Footer hide on specific routes
  const hideLayoutPaths = ["/dashboard/add-product", "/dashboard/profile"];
  const hideLayout = hideLayoutPaths.some((path) => pathname?.startsWith(path));

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
