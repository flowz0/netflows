import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Development for Startups and Small Businesses | Netflows",
  description: "Netflows is a web development agency that builds, designs, and maintains high-performance websites and apps for startups and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${inter.variable} bg-[#0a0a0a] text-[#f5f5f5] antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
