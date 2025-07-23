"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExpandingCircleButton from "./ExpandingCircleButton";
import Link from "next/link";
import NetflowsLogo from "@/public/netflows-logo-transparent.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const Links = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
  ];

  return (
    <header className="bg-black5 h-32 top-0 sticky z-30">
      <nav className="max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center justify-center gap-x-12">
            <Link href="/">
              <Image
                src={NetflowsLogo}
                alt="Netflows logo"
                className="h-16 w-auto"
              />
            </Link>

            <div className="hidden md:flex gap-x-8">
              {Links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-h6 font-bold font-nunito ${pathname === href ? 'text-black' : 'text-black50 hover:text-black'
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <ExpandingCircleButton text="Book Free Consultation" className="hidden lg:block" />

          {/* mobile */}
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center cursor-pointer w-12 h-12 relative z-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`bg-black50 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${isOpen
                ? 'rotate-45 top-1/2'
                : 'top-[calc(50%-10px)]'
                }`}
            ></span>
            <span
              className={`bg-black50 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${isOpen
                ? 'opacity-0 top-1/2'
                : 'top-1/2'
                }`}
            ></span>
            <span
              className={`bg-black50 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${isOpen
                ? '-rotate-45 top-1/2'
                : 'top-[calc(50%+10px)]'
                }`}
            ></span>
          </button>
        </div>
        {/* Mobile Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden bg-black5"
            >
              <ul className="flex flex-col gap-y-2 px-6 text-h5 font-bold font-nunito">
                {Links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${pathname === link.href
                        ? "text-primary"
                        : "text-black50"
                        }`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}