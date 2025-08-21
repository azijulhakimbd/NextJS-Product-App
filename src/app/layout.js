"use client";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ConditionalLayout>{children}</ConditionalLayout>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

// Conditional Layout 
function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // Navbar/Footer should be hidden
  const hideLayoutPaths = ["/dashboard", "/dashboard/add-product", "/dashboard/profile"];

  const hideLayout = hideLayoutPaths.some((path) => pathname?.startsWith(path));

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
