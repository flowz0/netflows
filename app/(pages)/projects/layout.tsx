import CTA from "@/app/components/Home/CTA";
import Testimonials from "@/app/components/Home/Testimonial/Testimonials";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Testimonials />
      <CTA />
    </>
  );
}