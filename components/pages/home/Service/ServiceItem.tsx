"use client";

import { ServiceProps } from "@/types/service.type";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";

export default function ServiceItem({ title, description, image, isOpen, onClick }: ServiceProps) {
  return (
    <div
      onClick={onClick}
      className={`${isOpen
        ? "py-16 grid grid-cols-1 lg:gap-x-4 lg:grid-cols-3 relative cursor-default"
        : "py-8 flex items-center justify-between cursor-pointer"
        } group transition-all duration-300 ease-in-out items-center gap-x-2`}
    >
      <h3 className={`text-black text-h5 text-wrap sm:text-h4 font-nunito font-light transition-transform duration-300 ease-in-out ${isOpen ? "" : "group-hover:translate-x-4"}`}>
        {title}
      </h3>

      {isOpen ? (
        <>
          <p className="text-black75 text-p font-inter text-start mt-4 sm:mt-0">
            {description}
          </p>
          {image && (
            <Image
              src={image}
              alt={`${title} image`}
              className="absolute bottom-[-184px] right-0 h-[280px] opacity-80 lg:bottom-auto md:right-[-32px] md:h-[320px] lg:h-[400px] w-auto object-cover z-10"
              priority={false}
              draggable={false}
              quality={80}
              loading="lazy"
            />
          )}
        </>
      ) : (
        <div className="bg-primary h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center">
          <FaAngleLeft className="text-black5 h-6 w-6 sm:h-8 sm:w-8 transition-transform duration-500 ease-in-out group-hover:-rotate-90" />
        </div>
      )}
    </div>
  );
}