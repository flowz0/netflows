import Image from "next/image";
import Link from "next/link";
import PlaceholderLogo from "@/public/2000x2000.svg";
import { HiExternalLink } from "react-icons/hi";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { ProjectType } from "@/app/types/project";
import ProjectTech from "./ProjectTech";

export default function ProjectHeader({
  brandLogo,
  brandName,
  summary,
  link,
  projectBanner,
  techStack,
  development,
  design,
  maintenance
}: ProjectType) {
  const techMap: Record<
    string,
    {
      name: string,
      Icon: React.ElementType,
      color: string;
    }
  > = {
    nextjs: {
      name: "Next.js",
      Icon: SiNextdotjs,
      color: "#ffffff"
    },
    typescript: {
      name: "TypeScript",
      Icon: SiTypescript,
      color: "#3178C6"
    },
    tailwind: {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      color: "#38bdf8"
    },
    express: {
      name: "Express",
      Icon: SiExpress,
      color: "#ffffff"
    },
    node: {
      name: "Node.js",
      Icon: SiNodedotjs,
      color: "#66cc33"
    },
    mongodb: {
      name: "MongoDB",
      Icon: SiMongodb,
      color: "#00ed64"
    },
  };

  return (
    <>
      <div className="md:flex md:flex-col">
        <Link href={`${link}`} target="_blank" className="flex items-center gap-4 w-fit group">
          <Image
            src={brandLogo || PlaceholderLogo}
            alt={`${brandName} brand logo`}
            className="w-12 h-auto object-cover rounded-lg"
            draggable={false}
          />
          <h1 className="text-[#f5f5f5] text-3xl font-semibold flex items-baseline gap-x-2 md:text-4xl">
            {brandName}
            <HiExternalLink className="text-[hsl(0,0%,60%)] transition-transform duration-300 ease-in-out w-6 h-6 group-hover:text-[#00b4ff] group-hover:scale-110 group-hover:translate-x-2" />
          </h1>
        </Link>

        <div className="md:flex md:justify-between md:items-start gap-x-8 mt-4">
          <div className="md:max-w-1/2">
            <p className="text-[#a8a8a8] text-base max-w-lg lg:mx-0 md:text-lg">
              {summary}
            </p>
          </div>
          <div className="md:max-w-1/2 flex flex-col gap-4 mt-4 md:mt-0">
            <div>
              <h3 className="font-semibold sm:text-lg">Scope of work</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {design && (
                  <p className="bg-purple-200 text-purple-900 font-bold py-1 px-4 rounded-full">Web Design</p>
                )}
                {development && (
                  <p className="bg-sky-200 text-sky-900 font-bold py-1 px-4 rounded-full">Web Development</p>
                )}
                {maintenance && (
                  <p className="bg-amber-200 text-amber-900 font-bold py-1 px-4 rounded-full">Website Maintenance</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold sm:text-lg">Tech stack</h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {techStack &&
                  Object.entries(techStack).map(([techName, isUsed]) =>
                    isUsed && techMap[techName] ? (
                      <ProjectTech
                        key={techName}
                        Icon={techMap[techName].Icon}
                        name={techMap[techName].name}
                        iconColor={techMap[techName].color}
                      />
                    ) : null
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Image
          src={projectBanner || PlaceholderLogo}
          alt={`${brandName} project cover image`}
          className="object-cover max-h-96 h-full w-full rounded-xl"
          draggable={false}
          priority={true}
          quality={100}
        />
      </div>
    </>
  );
}