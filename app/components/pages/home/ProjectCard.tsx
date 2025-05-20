"use client";

import Image from "next/image";
import { ProjectProps } from "@/app/types/project";

import { FaArrowUp } from "react-icons/fa";
import PlaceholderImg from "@/public/1920x1080.svg";
import { useRouter } from "next/navigation";
import { slugify } from "@/app/lib/slugify";

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const router = useRouter();
  const {
    brandName,
    industry,
    projectCoverImg,
    development = false,
    design = false,
    maintenance = false,
    comingSoon = false,
  } = project;

  const handleClick = () => {
    if (comingSoon) return;

    const brandSlug = slugify(brandName);
    const industrySlug = slugify(industry);
    router.push(`/projects/${brandSlug}-${industrySlug}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-[hsl(0,0%,14%)] py-6 px-6 rounded-3xl ${comingSoon
        ? "cursor-not-allowed"
        : "cursor-pointer"
        }`}>
      <div className="flex justify-between items-center">
        <h3 className="text-[#f5f5f5] text-2xl font-semibold md:text-3xl">
          {brandName || "Project Name"}
        </h3>
        <p className="text-[#a8a8a8] flex items-center transition-colors duration-300 hover:text-[#00b4ff]">
          <span>View Project</span>
          <FaArrowUp className="w-6 h-6 rotate-45 ml-2" />
        </p>
      </div>
      <p className="text-[#a8a8a8] mt-2 lg:mx-0">
        {industry}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {/* Tags */}
        {development ?
          (
            <p className="bg-sky-200/80 text-sky-950 py-1 px-4 font-medium rounded-full">
              Development
            </p>
          ) : ""
        }
        {design ?
          (
            <p className="bg-indigo-200/80 text-indigo-950 py-1 px-4 font-medium rounded-full">
              Web Design
            </p>
          ) : ""
        }
        {maintenance ?
          (
            <p className="bg-emerald-200/80 text-emerald-950 py-1 px-4 font-medium rounded-full">
              Maintenance
            </p>
          ) : ""
        }
      </div>

      <div className="relative overflow-hidden bg-cover bg-no-repeat mt-8 rounded-3xl">
        {comingSoon ?
          (
            <p className="bg-[rgba(36,36,36,0.9)] absolute border border-[#a8a8a8] flex items-center justify-center h-full w-full text-lg rounded-3xl backdrop-blur-xs">
              Coming soon...
            </p>
          ) : ""
        }
        <Image
          src={projectCoverImg || PlaceholderImg}
          alt={`${brandName} project image`}
          className="h-fit w-auto rounded-3xl transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
}

export default ProjectCard;