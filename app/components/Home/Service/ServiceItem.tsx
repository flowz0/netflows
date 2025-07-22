"use client";

import Image, { StaticImageData } from "next/image";
import { FaAngleLeft } from "react-icons/fa";

interface ServiceItemProps {
  title: string;
  description: string;
  image?: StaticImageData | string;
  isOpen: boolean;
  onClick: () => void;
};

export default function ServiceItem({ title, description, image, isOpen, onClick }: ServiceItemProps) {
  return (
    <div
      onClick={onClick}
      className={`${isOpen
        ? "py-16 grid grid-cols-3 relative cursor-default"
        : "py-8 flex items-center justify-between cursor-pointer"
        } group transition-all duration-300 ease-in-out items-center`}
    >
      <h3 className={`text-black text-h3 font-nunito font-light transition-transform duration-300 ease-in-out ${isOpen ? "" : "group-hover:translate-x-4"}`}>
        {title}
      </h3>

      {isOpen ? (
        <>
          <p className="text-black75 text-p font-inter text-start">
            {description}
          </p>
          {image && (
            <Image
              src={image}
              alt={`${title} image`}
              className="absolute right-[-32px] h-[400px] w-auto object-cover z-10"
              priority={false}
              draggable={false}
            />
          )}
        </>
      ) : (
        <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center">
          <FaAngleLeft className="text-black5 h-8 w-8 transition-transform duration-500 ease-in-out group-hover:-rotate-90" />
        </div>
      )}
    </div>
  );
}