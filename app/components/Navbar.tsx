"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import BrandLogo from "@/public/Netflows-brand.png";

export default function NavBar() {
  const Links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="bg-[#040F16] text-[#FBFBFF] fixed h-24 z-50 w-full shadow-lg shadow-[#040F16]/30">
      <div className="px-6 flex justify-between items-center h-full max-w-7xl mx-auto">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
        >
          {isOpen
            ? ""
            : <Image src={BrandLogo} alt="Netflows logo" className="h-28 w-auto" draggable="false" priority />
          }
        </Link>

        {/* Desktop Links */}
        <ul className="hidden font-bold text-lg sm:flex sm:gap-x-4">
          {Links.map((link) => (
            <li key={link.href} className="group">
              <Link
                href={link.href}
                className={`${pathname === link.href
                  ? "text-[#01BAEF]"
                  : "hover:text-[#01BAEF] group-last:hover:text-[#040F16]"
                  } group-last:text-[#040F16] group-last:bg-[#01BAEF] group-last:px-4 group-last:py-2 group-last:rounded-lg group-last:hover:bg-[hsl(193,99%,37%)]`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex flex-col justify-center items-center cursor-pointer py-2.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`bg-[#FBFBFF] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm ${isOpen ?
              'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`} >
          </span>
          <span className={`bg-[#FBFBFF] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm my-0.5 ${isOpen ?
              'opacity-0' : 'opacity-100'
            }`} >
          </span>
          <span className={`bg-[#FBFBFF] block transition-all duration-300 ease-out
            h-0.5 w-7 rounded-sm ${isOpen ?
              '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`} >
          </span>
        </button>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="sm:hidden bg-[#040F16]"
          >
            <ul className="flex flex-col gap-y-2 px-8 font-bold text-2xl">
              {Links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${pathname === link.href
                      ? "text-sky-500"
                      : "hover:text-sky-600"
                      }`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};