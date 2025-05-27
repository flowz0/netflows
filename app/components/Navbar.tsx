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
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "FAQ", href: "/#faq" },
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
    <nav className="bg-[#0a0a0a] fixed h-16 w-full z-50">
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
              className="h-16 w-auto"
              draggable="false"
              priority={false}
            />
          }
        </Link>

        {/* Desktop Links */}
        <ul className="hidden text-[#f5f5f5] font-semibold text-base/[32px] tracking-[0.016em] md:flex md:items-center md:gap-x-6">
          {Links.map((link) => (
            <li key={link.href}>
              <AnimatedLink
                href={link.href}
                className={`${pathname === link.href
                  ? "duration-300 transition-colors text-[#00b4ff]"
                  : ""
                  }`}
              >
                {link.name}
              </AnimatedLink>
            </li>
          ))} <li>

            <Link
              href="/book-consultation"
              className={`hidden duration-300 transition-colors py-1 px-4 font-semibold text-base/[32px] tracking-[0.016em] rounded-lg md:block
            ${pathname === "/book-consultation"
                  ? " bg-[#00b4ff] text-[#0a0a0a]"
                  : "bg-[#242424] text-[#f5f5f5] hover:bg-[hsl(0,0%,24%)] active:bg-[hsl(0,0%,34%)]"
                } `}
            >
              Book Free Consultation
            </Link>
          </li>
        </ul>


        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center cursor-pointer py-2.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`bg-[#f5f5f5] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm ${isOpen ?
              'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`} >
          </span>
          <span className={`bg-[#f5f5f5] block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm my-0.5 ${isOpen ?
              'opacity-0' : 'opacity-100'
            }`} >
          </span>
          <span className={`bg-[#f5f5f5] block transition-all duration-300 ease-out
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
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0a0a]"
          >
            <ul className="flex flex-col gap-y-4 px-8 font-bold text-3xl/[42px] tracking-[0.016em]">
              {Links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${pathname === link.href
                      ? "text-[#00b4ff]"
                      : "text-[#f5f5f5]"
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