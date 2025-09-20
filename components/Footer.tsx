"use client";

import NetflowsImg from "@/public/netflows-brand-transparent.png";
import Image from "next/image";
import Link from "next/link";
import { SiX, SiLinkedin, SiInstagram } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCols, setVisibleCols] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    columnRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCols((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 50); // stagger
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
    });
  }, []);

  return (
    <footer className="mt-32 mb-16 px-6 max-w-7xl mx-auto md:mt-64 md:mb-32">
      <div className="flex items-center w-full h-full">
        <div className="grid grid-cols-1 gap-y-12 w-full sm:grid-cols-2 sm:justify-between lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div
            ref={(el) => {
              (columnRefs.current[0] = el)
            }}
            className={`flex flex-col justify-between w-fit transform transition-all duration-700 ease-out ${
              visibleCols[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/">
              <Image
                src={NetflowsImg}
                alt="Netflows brand"
                className="h-8 w-auto"
                quality={100}
                priority={false}
                draggable={false}
                loading="lazy"
              />
            </Link>
            <div className="mt-8 sm:mt-0">
              <p className="text-black75 text-small font-inter cursor-default">
                ©2025 Netflows
              </p>
              <p className="text-black75 text-small font-inter">
                <Link href="/tos" className="transition-colors duration-300 ease-in-out hover:text-primary">Terms of Service</Link>
                <span className="cursor-default">{" "}|{" "}</span>
                <Link href="/privacy" className="transition-colors duration-300 ease-in-out hover:text-primary">Privacy Policy</Link>
              </p>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div
            ref={(el) => {
              (columnRefs.current[1] = el)
            }}
            className={`w-fit transform transition-all duration-700 ease-out ${
              visibleCols[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h6 className="text-black text-h6 font-bold font-nunito cursor-default">Services</h6>
            <div className="flex flex-col gap-y-2 mt-4">
              {[
                { href: "/services/#web-design-development", label: "Web Design & Development" },
                { href: "/services/#custom-web-apps", label: "Custom Web Applications" },
                { href: "/services/#third-party-api", label: "3rd-Party API Integrations" },
                { href: "/services/#fully-managed-hosting", label: "Fully-Managed Hosting" },
                { href: "/services/#domain-management", label: "Domain Management" },
                { href: "/services/#maintenance-support", label: "Web Maintenance & Support" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Useful Links */}
          <div
            ref={(el) => {
              (columnRefs.current[2] = el)
            }}
            className={`w-fit transform transition-all duration-700 ease-out ${
              visibleCols[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h6 className="text-black text-h6 font-bold font-nunito cursor-default">Useful Links</h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <Link href="/about" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">About</Link>
              <Link href="/projects" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">Projects</Link>
              <Link href="/booking" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">Contact</Link>
            </div>
          </div>

          {/* Column 4 - Get In Touch */}
          <div
            ref={(el) => {
              (columnRefs.current[3] = el)
            }}
            className={`w-fit cursor-default transform transition-all duration-700 ease-out ${
              visibleCols[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h6 className="text-black text-h6 font-bold font-nunito">Get In Touch</h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <p className="text-black75 text-p font-inter">Questions or feedback?</p>
              <p className="text-black75 text-p font-inter">We&apos;d love to hear from you.</p>
            </div>
            <div className="mt-8 flex gap-x-6">
              <Link href="https://www.linkedin.com/company/netflowsxyz/about" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-primary">
                <SiLinkedin className="w-8 h-8" />
              </Link>
              <Link href="https://www.instagram.com/netflowsxyz/" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-primary">
                <SiInstagram className="w-8 h-8" />
              </Link>
              <Link href="https://x.com/Netflowsxyz" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-primary">
                <SiX className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}