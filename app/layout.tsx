import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  title: "Netflows | Web Development for Startups and Small Businesses",
  description: "Netflows is a web development agency that builds, designs, and maintains high-performance websites and apps for startups and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} bg-[#efefef] text-[#252323] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
