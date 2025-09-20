"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NetflowsLogo from "@/public/netflows-logo-transparent.png";
import Button from "./Button";
import useScrollDirection from "@/hooks/useScrollDirection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const Links = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: scrollDirection === "down" ? -200 : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-black5 h-24 top-0 sticky z-30 w-full"
    >
      <nav className="max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center justify-center gap-x-12">
            <Link href="/">
              <Image
                src={NetflowsLogo}
                alt="Netflows logo"
                className="h-12 w-auto"
                priority
                quality={100}
              />
            </Link>

            <div className="hidden md:flex gap-x-8">
              {Links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-h6 font-bold font-nunito ${
                    pathname.startsWith(href)
                      ? "text-primary"
                      : "text-black50 hover:text-black"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/booking">
            <Button
              text="Book Free 15-Min Call"
              className="hidden lg:block"
              variant="gradient"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center cursor-pointer w-12 h-12 relative z-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`bg-black50 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${
                isOpen ? "rotate-45 top-1/2" : "top-[calc(50%-10px)]"
              }`}
            />
            <span
              className={`bg-black50 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${
                isOpen ? "opacity-0 top-1/2" : "top-1/2"
              }`}
            />
            <span
              className={`bg-black50 block transition-all duration-300 ease-in-out h-1 w-9 rounded-sm absolute ${
                isOpen ? "-rotate-45 top-1/2" : "top-[calc(50%+10px)]"
              }`}
            />
          </button>
        </div>

        {/* Mobile menu links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden bg-black5"
            >
              <ul className="flex flex-col gap-y-4 px-6 text-h4 font-bold font-nunito">
                {Links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${
                        pathname.startsWith(href)
                          ? "text-primary"
                          : "text-black50 hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}