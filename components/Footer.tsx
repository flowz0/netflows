import NetflowsImg from "@/public/netflows-brand-transparent.png";
import Image from "next/image";
import Link from "next/link";
import { SiX, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-32 mb-16 px-6 max-w-7xl mx-auto md:mt-64 md:mb-32">
      <div className="flex items-center w-full h-full">
        <div className="grid grid-cols-1 gap-y-12 w-full sm:grid-cols-2 sm:justify-between lg:grid-cols-4">
          <div className="flex flex-col justify-between w-fit">
            {/* brand */}
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

          {/* services */}
          <div className="w-fit">
            <h6 className="text-black text-h6 font-bold font-nunito cursor-default">
              Services
            </h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <Link href="/services" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                Web Development
              </Link>
              <Link href="/services" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                UI/UX Design
              </Link>
              <Link href="/services" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                Maintenance
              </Link>
            </div>
          </div>

          {/* useful links */}
          <div className="w-fit">
            <h6 className="text-black text-h6 font-bold font-nunito cursor-default">
              Useful Links
            </h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <Link href="/about" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                About
              </Link>
              <Link href="/projects" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                Projects
              </Link>
              <Link href="/booking" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* get in touch */}
          <div className="w-fit cursor-default">
            <h6 className="text-black text-h6 font-bold font-nunito">
              Get In Touch
            </h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <p className="text-black75 text-p font-inter">
                Questions or feedback?
              </p>
              <p className="text-black75 text-p font-inter">
                We&apos;d love to hear from you.
              </p>
            </div>
            <div className="mt-12 flex gap-x-6">
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