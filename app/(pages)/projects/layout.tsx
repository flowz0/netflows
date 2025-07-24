import CTA from "@/components/pages/home/CTA";
import FAQs from "@/components/pages/home/FAQ/FAQs";
import Testimonials from "@/components/pages/home/Testimonial/Testimonials";

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