import Testimonials from "@/app/components/pages/home/Testimonials";
import CTA from "@/app/components/CTA";

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