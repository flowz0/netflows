import { SERVICE_STYLES } from "@/app/constants/serviceStyles";
import Image, { StaticImageData } from "next/image";

import { FaExternalLinkAlt } from "react-icons/fa";

interface CaseStudyCardProps {
  company: string;
  industry: string;
  img: StaticImageData;
  services: Record<string, boolean>;
}

export default function CaseStudyCard({ company, industry, img, services }: CaseStudyCardProps) {
  return (
    <div className="border border-black75 rounded-2xl py-8 px-8 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-[0_16px_60px_#924bf7]">
      <div className="flex items-center justify-between">
        <h5 className="text-h5 font-bold font-nunito text-black">{company}</h5>
        <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center">
          <FaExternalLinkAlt className="text-black5 h-4 w-4" />
        </div>
      </div>
      <p className="mt-2 text-p font-inter text-black75">{industry}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {Object.entries(services)
          .filter(([, value]) => value)
          .map(([key]) => {
            const { title, bg, text } = SERVICE_STYLES[key] || {
              title: key.charAt(0).toUpperCase() + key.slice(1),
              bg: "bg-black10",
              text: "text-black",
            };

            return (
              <div
                key={key}
                className={`text-sm font-medium font-inter px-3 py-1 rounded-full ${bg} ${text}`}
              >
                {title}
              </div>
            );
          })}
      </div>

      <Image
        src={img}
        alt="Case study thumbnail"
        className="mt-8 rounded-2xl object-cover h-48 sm:h-80"
        draggable={false}
        priority={false}
      />
    </div>
  );
}