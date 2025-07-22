import NetflowsImg from "@/public/netflows-brand-transparent.png";
import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="my-64 max-w-7xl mx-auto">
      <div className="h-[200px] grid grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col justify-between w-fit">
          {/* brand */}
          <Link href="/">
            <Image
              src={NetflowsImg}
              alt="Netflows brand"
              className="h-8 w-auto"
            />
          </Link>

          <div>
            <p className="text-black75 text-p">
              ©2025 Netflows, LLC.
            </p>
            <p className="text-black75 text-small">
              <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-primary">Terms of Service</Link> 
              {" "} | {" "} 
              <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-primary">Privacy Policy</Link>
            </p>
          </div>
        </div>

        <div>
          {/* services */}
          <h6 className="text-black text-h6 font-bold font-nunito">
            Services
          </h6>
          <div className="flex flex-col gap-y-2 mt-4">
            <Link href="/" className="text-black75 text-p w-fit transition-colors duration-300 ease-in-out hover:text-primary">
              Web Development
            </Link>
            <Link href="/" className="text-black75 text-p w-fit transition-colors duration-300 ease-in-out hover:text-primary">
              UI/UX Design
            </Link>
            <Link href="/" className="text-black75 text-p w-fit transition-colors duration-300 ease-in-out hover:text-primary">
              Maintenance
            </Link>
          </div>
        </div>

        <div>
          {/* useful links */}
          <h6 className="text-black text-h6 font-bold font-nunito">
            Useful Links
          </h6>
          <div className="flex flex-col gap-y-2 mt-4">
            <Link href="/" className="text-black75 text-p w-fit transition-colors duration-300 ease-in-out hover:text-primary">
              About
            </Link>
            <Link href="/" className="text-black75 text-p w-fit transition-colors duration-300 ease-in-out hover:text-primary">
              Projects
            </Link>
            <Link href="/" className="text-black75 text-p w-fit transition-colors duration-300 ease-in-out hover:text-primary">
              Contact
            </Link>
          </div>
        </div>

        <div>
          {/* get in touch */}
          <h6 className="text-black text-h6 font-bold font-nunito">
            Useful Links
          </h6>
          <div className="flex flex-col gap-y-2 mt-4">
            <p className="text-black75 text-p">
              Questions or feedback?
            </p>
            <p className="text-black75 text-p">
              We&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-12 flex gap-x-6">
            <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-primary">
              <FaEnvelope className="w-8 h-8" />
            </Link>
            <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-primary">
              <SiFacebook className="w-8 h-8" />
            </Link>
            <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-primary">
              <SiLinkedin className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}