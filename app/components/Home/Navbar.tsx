"use client";

import Image from "next/image";

import NetflowsLogo from "@/public/netflows-logo-transparent.png";
import Link from "next/link";
import ExpandingCircleButton from "../ExpandingCircleButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
  ];

  return (
    <header className="bg-black5 h-32 top-0 sticky z-30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="flex items-center justify-center gap-x-12">
          <Image
            src={NetflowsLogo}
            alt="Netflows logo"
            className="h-14 w-auto"
          />

          <div className="flex gap-x-8">
            {navLinks.map(({ label, href }) => (
              <Link
              key={href}
              href={href}
              className={`text-h6 font-bold font-nunito ${
                pathname === href ? 'text-black' : 'text-black50 hover:text-black'
              }`}
              >
                {label}
              </Link>
            ))}
          </div>

        </div>
        <ExpandingCircleButton text="Book Free Consultation" />
      </nav>
    </header>
  );
}