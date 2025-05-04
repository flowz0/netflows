"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import BrandLogo from "@/public/Netflows-brand.png";
import AnimatedLink from "./AnimatedLink";

export default function Navbar() {
  const Links = [
    { name: "About", href: "/about" },
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
    <nav className="bg-[#EFEFEF] fixed h-16 w-full z-50">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-6">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
        >
          {isOpen
            ? ""
            : <Image
              src={BrandLogo}
              alt="Netflows logo"
              className="h-16 w-auto duration-500 transition-transform hover:scale-105"
              draggable="false"
              priority
            />
          }
        </Link>

        {/* Desktop Links */}
        <ul className="hidden text-[#595454] font-bold text-base/[32px] tracking-[0.016em] md:flex md:items-center md:gap-x-6">
          {Links.map((link) => (
            <li key={link.href}>
              <AnimatedLink
                href={link.href}
                className={`${pathname === link.href
                  ? "duration-300 transition-colors text-[#01BAEF]"
                  : "duration-300 transition-colors hover:text-[#252323]"
                  }`}
              >
                {link.name}
              </AnimatedLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center cursor-pointer py-2.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`bg-[#595454] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm ${isOpen ?
              'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`} >
          </span>
          <span className={`bg-[#595454] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm my-0.5 ${isOpen ?
              'opacity-0' : 'opacity-100'
            }`} >
          </span>
          <span className={`bg-[#595454] block transition-all duration-300 ease-out
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
            className="md:hidden bg-[#efefef]"
          >
            <ul className="text-[#595454] flex flex-col gap-y-2 px-8 font-bold text-3xl/[42px] tracking-[0.016em]">
              {Links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${pathname === link.href
                      ? "text-[#252323]"
                      : "hover:text-[#252323]"
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