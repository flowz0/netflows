"use client";

import { SERVICE_STYLES } from "@/constants/service.constant";
import { slugify } from "@/lib/slugify.lib";
import { ProjectProps } from "@/types/project.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";

const CaseStudyCard: React.FC<ProjectProps> = ({ project }) => {
  const router = useRouter();
  const {
    brandName,
    industry,
    services,
    projectThumbnail,
    comingSoon
  } = project;

  const handleClick = () => {
    if (comingSoon) return;

    const companySlug = slugify(brandName);
    const industrySlug = slugify(industry);
    router.push(`/projects/${companySlug}-${industrySlug}`);
  };

  return (
    <div onClick={handleClick} className={`border border-black75 rounded-2xl py-8 px-8 transition-shadow duration-300 ease-in-out ${comingSoon
      ? "cursor-not-allowed"
      : "cursor-pointer hover:shadow-[0_16px_60px_#924bf7]"
      }`}>
      <div className="flex items-center justify-between">
        <h5 className="text-h6 sm:text-h5 font-bold font-nunito text-black">
          {brandName}
        </h5>
        <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center">
          {comingSoon ? (
            <FaLock className = "text-black5 h-4 w-4" />
          ) : (
            <FaExternalLinkAlt className = "text-black5 h-4 w-4" />
          )}
        </div>
      </div>
      <p className="mt-2 text-p font-inter text-black75">{industry}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {services &&
          Object.entries(services)
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
      <div className="relative overflow-hidden bg-cover bg-no-repeat mt-8 rounded-2xl">
        {comingSoon &&
          (
            <p className="bg-[rgba(13,12,13,0.75)] text-black10 absolute flex items-center font-inter text-p justify-center h-full w-full backdrop-blur-md rounded-2xl">
              Coming soon...
            </p>
          )
        }
        <Image
          src={projectThumbnail!}
          alt={`${brandName} project image`}
          className="object-cover h-64 w-auto rounded-2xl sm:h-80"
          draggable={false}
          priority={false}
          quality={100}
        />
      </div>
    </div>
  );
}

export default CaseStudyCard;