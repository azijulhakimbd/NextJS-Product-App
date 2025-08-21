"use client";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ThemeProvider } from "next-themes";

// export const metadata = {
//   title: "Next JS Product App",
//   description: "Develop by Md Azijul Hakim",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"   
          enableSystem={true}    
        >
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
