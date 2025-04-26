"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import BrandLogo from "@/public/Netflows-brand.png";
import Button from "./Button";

export default function NavBar() {
  const Links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
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
    <nav className="bg-[#040F16] text-[rgba(250,250,255,0.7)] fixed h-20 w-full z-50 shadow shadow-[#040F16]">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-6">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
        >
          {isOpen
            ? ""
            : <Image src={BrandLogo} alt="Netflows logo" className="h-16 w-auto duration-300 transition-opacity hover:opacity-80" draggable="false" priority />
          }
        </Link>

        {/* Desktop Links */}
        <ul className="hidden font-bold text-lg/[32px] tracking-[0.016em] md:flex md:items-center md:gap-x-6">
          {Links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${pathname === link.href
                  ? "duration-300 transition-colors text-[#01BAEF]"
                  : "duration-300 transition-colors hover:text-[rgb(250,250,255)]"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link 
          href="/contact"
          className={`${pathname === "/contact"
            ? "duration-300 transition-colors text-[#01BAEF]"
            : "duration-300 transition-colors hover:text-[rgb(250,250,255)]"
            }`}
          >
            Contact
          </Link>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center cursor-pointer py-2.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`bg-[rgba(250,250,255,0.7)] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm ${isOpen ?
              'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`} >
          </span>
          <span className={`bg-[rgba(250,250,255,0.7)] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm my-0.5 ${isOpen ?
              'opacity-0' : 'opacity-100'
            }`} >
          </span>
          <span className={`bg-[rgba(250,250,255,0.7)] block transition-all duration-300 ease-out
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
            className="md:hidden bg-[#040F16]"
          >
            <ul className="flex flex-col gap-y-2 px-8 font-bold text-2xl/[36px] tracking-[0.016em]">
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
              <li>
                <Link
                  href="/contact"
                  className={`${pathname === "/contact"
                    ? "text-sky-500"
                    : "hover:text-sky-600"
                    }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};