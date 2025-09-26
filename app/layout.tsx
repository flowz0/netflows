import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    default: "Custom Web Design & Scalable Development for Small Businesses | Netflows",
    template: "%s | Netflows"
  },
  description: "Modern fast-loading websites and custom web applications that help small businesses and startups grow their leads, reach, and revenue. We handle everything from design and development to hosting and ongoing support. Let's build something that moves your business forward.",
  openGraph: {
    title: "Custom Web Design & Scalable Development for Small Businesses | Netflows",
    description: "Modern fast-loading websites and custom web applications that help small businesses and startups grow their leads, reach, and revenue. We handle everything from design and development to hosting and ongoing support. Let's build something that moves your business forward.",
    url: "https://www.netflows.xyz",
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
    title: "Custom Web Design & Scalable Development for Small Businesses | Netflows",
    description: "Modern fast-loading websites and custom web applications that help small businesses and startups grow their leads, reach, and revenue. We handle everything from design and development to hosting and ongoing support. Let's build something that moves your business forward.",
    images: ["/app/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Netflows",
    image: "https://www.netflows.xyz/assets/netflows-logo.png",
    "@id": "https://www.netflows.xyz",
    url: "https://www.netflows.xyz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "California",
      addressLocality: "California",
      addressRegion: "CA",
      postalCode: "",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/netflowsxyz",
      "https://www.instagram.com/netflowsxyz",
      "https://x.com/netflowsxyz",
    ],
    description:
      "Modern fast-loading websites and custom web applications that help small businesses and startups grow their leads, reach, and revenue. We handle everything from design and development to hosting and ongoing support. Let's build something that moves your business forward.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.variable} ${inter.variable} bg-black5 text-black antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-N5FZZBFY28" />
    </html>
  );
}
