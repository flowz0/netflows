import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.netflows.xyz"),
  title: {
    default: "Web Design, Development, and Managed Hosting for Small Businesses | Netflows",
    template: "%s | Netflows"
  },
  description: "Netflows offers expert web design, development, and hassle-free hosting for growing businesses.",
  openGraph: {
    title: "Web Design, Development, and Managed Hosting for Small Businesses | Netflows",
    description: "Netflows offers expert web design, development, and hassle-free hosting for growing businesses.",
    url: "https://www.netflows.dev",
    siteName: "Netflows",
    images: [
      {
        url: "/app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Netflows Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, Development, and Managed Hosting for Small Businesses | Netflows",
    description: "Netflows offers expert web design, development, and hassle-free hosting for growing businesses.",
    images: ["/app/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.variable} ${inter.variable} bg-black5 text-black antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
