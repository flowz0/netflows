import NetflowsImg from "@/public/netflows-brand-transparent.png";
import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-64 mb-32 px-6 max-w-7xl mx-auto">
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
              <p className="text-black75 text-small font-inter">
                ©2025 Netflows, LLC.
              </p>
              <p className="text-black75 text-small font-inter">
                <Link href="/tos" className="transition-colors duration-300 ease-in-out hover:text-secondary">Terms of Service</Link>
                {" "} | {" "}
                <Link href="/privacy" className="transition-colors duration-300 ease-in-out hover:text-secondary">Privacy Policy</Link>
              </p>
            </div>
          </div>

          {/* services */}
          <div className="w-fit">
            <h6 className="text-black text-h6 font-bold font-nunito">
              Services
            </h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <Link href="/services" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-secondary">
                Web Development
              </Link>
              <Link href="/services" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-secondary">
                UI/UX Design
              </Link>
              <Link href="/services" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-secondary">
                Maintenance
              </Link>
            </div>
          </div>

          {/* useful links */}
          <div className="w-fit">
            <h6 className="text-black text-h6 font-bold font-nunito">
              Useful Links
            </h6>
            <div className="flex flex-col gap-y-2 mt-4">
              <Link href="/about" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-secondary">
                About
              </Link>
              <Link href="/projects" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-secondary">
                Projects
              </Link>
              <Link href="/booking" className="text-black75 text-p w-fit font-inter transition-colors duration-300 ease-in-out hover:text-secondary">
                Contact
              </Link>
            </div>
          </div>

          {/* get in touch */}
          <div className="w-fit">
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
              <Link href="mailto:contact@netflows.xyz" className="transition-colors duration-300 ease-in-out hover:text-secondary">
                <FaEnvelope className="w-8 h-8" />
              </Link>
              <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-secondary">
                <SiFacebook className="w-8 h-8" />
              </Link>
              <Link href="https://www.linkedin.com/company/netflowsxyz/about" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-secondary">
                <SiLinkedin className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}