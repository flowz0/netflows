import Testimonials from "@/app/components/Home/Testimonial/Testimonials";
import FAQs from "@/app/components/Home/FAQ/FAQs";
import CTA from "@/app/components/Home/CTA";

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