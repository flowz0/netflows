"use client";

import { useEffect, useRef, useState } from "react";
import { inView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import HeroImg from "@/public/projects/dddc-thumbnail.jpg";

export default function Hero() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const [linkVisible, setLinkVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      const stopHeader = inView(headerRef.current, () => {
        setHeaderVisible(true);
        stopHeader();
      });
    }

    if (paragraphRef.current) {
      const stopParagraph = inView(paragraphRef.current, () => {
        setTimeout(() => setParagraphVisible(true), 50);
        stopParagraph();
      });
    }

    if (linkRef.current) {
      const stopLink = inView(linkRef.current, () => {
        setTimeout(() => setLinkVisible(true), 100);
        stopLink();
      });
    }

    if (imageRef.current) {
      const stopImage = inView(imageRef.current, () => {
        setTimeout(() => setImageVisible(true), 150);
        stopImage();
      });
    }
  }, []);

  return (
    <section className="mt-8 max-w-7xl mx-auto lg:mt-16">
      <div className="flex flex-col items-center cursor-default px-6">
        {/* Heading */}
        <h1
          ref={headerRef}
          className={`text-h3 font-bold font-nunito text-center sm:text-h2 transition-all duration-200 ease-in-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-secondary">Websites</span> That Not Only Look{" "}
          <br className="hidden lg:inline-block" />
          Good But <span className="text-primary">Grow</span> Your Business
        </h1>

        {/* Paragraph */}
        <p
          ref={paragraphRef}
          className={`text-black75 text-p text-center font-inter max-w-2xl mt-4 transform transition-all duration-200 ease-in-out ${
            paragraphVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          We build high-performance websites with optimized SEO to attract
          traffic, convert visitors into leads, and help you scale. Every site
          is fast, secure, and tailored to your brand.
        </p>

        {/* CTA Button */}
        <Link
          href="/booking"
          ref={linkRef}
          className={`mt-8 md:mt-12 transform transition-all duration-200 ease-in-out ${
            linkVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Button text="Get My Free Strategy Call" variant="gradient" />
        </Link>
      </div>

      {/* Image Section */}
      <div
        ref={imageRef}
        className={`h-56 w-full mt-16 px-6 sm:h-[680px] md:mt-32 transform transition-all duration-200 ease-in-out ${
          imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Image
          src={HeroImg}
          alt="Hero image"
          className="h-full w-full object-cover rounded-lg animate-drop-shadow"
          draggable={false}
          priority={true}
          quality={100}
          loading="eager"
        />
      </div>
    </section>
  );
}