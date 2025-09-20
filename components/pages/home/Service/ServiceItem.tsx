"use client";

import { ServiceProps } from "@/types/service.type";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ServiceItem({ title, description, image, isOpen, onClick }: ServiceProps) {
  const [animateOpen, setAnimateOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => setAnimateOpen(true), 10); // Delay to trigger transition
      return () => clearTimeout(timeout);
    } else {
      setAnimateOpen(false); // Reset animation state when closed
    }
  }, [isOpen]);

  return (
    <div
      onClick={onClick}
      className={`${isOpen
        ? "py-16 grid grid-cols-1 lg:gap-x-4 lg:grid-cols-3 relative cursor-default"
        : "py-8 gap-x-4 flex items-center justify-between cursor-pointer"
        } group transition-all duration-300 ease-in-out items-center gap-x-2`}
    >
      {/* Title */}
      <h3
        className={`text-black text-h5 text-wrap sm:text-h4 font-nunito font-light transition-transform duration-300 ease-in-out ${
          isOpen ? "" : "group-hover:translate-x-4"
        }`}
      >
        {title}
      </h3>

      {/* Expanded Content */}
      {isOpen ? (
        <>
          {/* Description */}
          <p
            className={`text-black75 text-p font-inter text-start mt-4 sm:mt-0 transform transition-all duration-700 ease-out ${
              animateOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {description}
          </p>

          {/* Image */}
          {image && (
            <div
              className={`flex justify-start lg:block mt-4 lg:mt-0 transform transition-all duration-700 ease-out ${
                animateOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Image
                src={image}
                alt={`${title} image`}
                className="lg:absolute lg:right-[-32px] lg:top-1/2 lg:transform lg:-translate-y-1/2 h-[320px] opacity-80 lg:h-[400px] w-full z-10"
                priority={false}
                draggable={false}
                quality={80}
                loading="lazy"
              />
            </div>
          )}
        </>
      ) : (
        // Closed state icon
        <div className="bg-primary p-3 rounded-full flex items-center justify-center">
          <FaAngleLeft className="text-black5 h-8 w-8 sm:h-8 sm:w-8 transition-transform duration-500 ease-in-out group-hover:-rotate-90" />
        </div>
      )}
    </div>
  );
}