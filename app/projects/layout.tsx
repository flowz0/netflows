import { Metadata } from "next";
import Testimonials from "../components/pages/home/Testimonials";

export const metadata: Metadata = {
  title: "Case Studies | Netflows",
  description: "Netflows is a web development agency that builds, designs, and maintains high-performance websites and apps for startups and small businesses.",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Testimonials />
    </>
  );
}