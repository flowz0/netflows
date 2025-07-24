import CTA from "@/components/pages/home/CTA";
import FAQs from "@/components/pages/home/FAQ/FAQs";
import Testimonials from "@/components/pages/home/Testimonial/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Web Design, Web Development, Maintenance, and Managed Hosting",
  description: "We offer services that can help businesses improve their visibility, business reputation online, expand market reach, and increase turnover through effective digital strategies."
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