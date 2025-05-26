import CTA from "@/app/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development for Startups and Small Businesses | Netflows",
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
      <CTA />
    </>
  );
}