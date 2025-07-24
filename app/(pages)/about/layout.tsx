import CTA from "@/components/pages/home/CTA";
import FAQs from "@/components/pages/home/FAQ/FAQs";
import Testimonials from "@/components/pages/home/Testimonial/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Web Design & Development Agency",
  description: "Netflows is a web design and development agency focused on helping startups and service-based businesses turn visitors into loyal customers. From fast-loading landing pages to scalable full-stack solutions, we build web experiences that don't just look great but drive results."
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Testimonials />
      <FAQs />
      <CTA />
    </>
  );
}