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
  metadataBase: new URL("https://www.netflows.xyz"),
  title: {
    default: "Web Design, Development, and Managed Hosting for Small Businesses | Netflows",
    template: "%s | Netflows"
  },
  description: "Netflows based in California offers expert web design, development, and hassle-free hosting for growing businesses.",
  openGraph: {
    title: "Web Development & Design | Netflows",
    description: "Professional web development, design, and fully managed hosting by Netflows.",
    url: "https://www.netflows.dev",
    siteName: "Netflows",
    images: [
      {
        url: "/app/opengraph-image.png", // Make sure this path exists
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
    title: "Web Development & Design | Netflows",
    description: "Professional web development, design, and fully managed hosting by Netflows.",
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
        className={`${roboto.variable} ${inter.variable} bg-[#0a0a0a] text-[#f5f5f5] antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
