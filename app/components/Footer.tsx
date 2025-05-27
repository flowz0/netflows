import Image from "next/image";
import Link from "next/link";

import NetflowsImg from "@/public/Netflows-brand.png";

type FooterLinkProps = {
  children: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href, className, target }) => {
  return (
    <Link
      href={href}
      target={target}
      className={`${className} text-[#f5f5f5] font-semibold transition-colors duration-300 hover:text-[#00b4ff]`}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#242424] py-16 md:py-24">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="flex flex-col flex-wrap justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#a8a8a8] uppercase">Resources</h3>
            <FooterLink href="/">
              Home
            </FooterLink>
            <FooterLink href="/projects">
              Projects
            </FooterLink>
            <FooterLink href="/#faqs">
              FAQs
            </FooterLink>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[#a8a8a8] uppercase">Services</h3>
            <FooterLink href="/#services">
              Web Design
            </FooterLink>
            <FooterLink href="/#services">
              Web Development
            </FooterLink>
            <FooterLink href="/#services">
              Website Maintenance
            </FooterLink>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[#a8a8a8] uppercase">Contact Us</h3>
            <FooterLink href="mailto:netflowsxyz@gmail.com">
              contact@netflows.xyz
            </FooterLink>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[#a8a8a8] uppercase">Follow Us</h3>
            <FooterLink href="https://www.instagram.com/netflowsxyz" target="_blank">
              Instagram
            </FooterLink>
            <FooterLink href="http://linkedin.com/in/netflowsxyz" target="_blank">
              LinkedIn
            </FooterLink>
            <FooterLink href="https://x.com/netflowsxyz" target="_blank">
              X
            </FooterLink>
          </div>
        </div>

        <Link href="/">
          <Image
            src={NetflowsImg}
            alt="Netflows Brand"
            className="h-fit w-full mt-16 transition-transform duration-500 hover:translate-y-2"
            draggable={false}
          />
        </Link>

        <hr className="text-[hsl(0,0%,26%)] mt-12" />

        <div className="flex gap-4 items-center justify-between mt-12">
          <h4 className="font-semibold sm:text-lg">
            © 2025 Netflows
          </h4>
          <FooterLink href="/legal/privacy-policy">
            Privacy Policy
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}