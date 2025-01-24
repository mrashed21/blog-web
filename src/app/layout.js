import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Blog",
  description: "Next Blog is the latest in the blog collection",
};

export default function RootLayout({ children }) {
  return (

      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header>
            <nav className="bg-gray-50 sm:px-8">
              <Navber />
            </nav> 
          </header>
          <main className="min-h-[calc(100vh-64px)] mb-12">
            {children}
          </main>
          <footer >
            <Footer />
          </footer>
        </body>
      </html>



  );
}
