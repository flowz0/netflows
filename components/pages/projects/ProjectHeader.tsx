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
import ProjectTech from "./ProjectTech";
import { ProjectProps } from "@/types/project.type";
import { SERVICE_STYLES } from "@/constants/service.constant";

export default function ProjectHeader({ project }: ProjectProps) {
  const {
    brandName,
    summary,
    link,
    projectBanner,
    techStack,
    services
  } = project;
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
        <div>
          <Link href={`${link}`} target="_blank" className="flex flex-col w-fit group">
            <h1 className="text-black text-h4 sm:text-h3 font-bold font-nunito text-wrap flex items-center gap-x-6 lg:text-h1">
              {brandName}
              <HiExternalLink className="text-black50 transition-transform duration-300 ease-in-out w-8 h-8 group-hover:text-primary group-hover:scale-110 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </h1>
          </Link>
        </div>

        <div className="md:flex md:justify-between md:items-start gap-x-8 mt-4 cursor-default">
          <div className="md:max-w-1/2">
            <p className="text-black75 text-p font-inter max-w-lg lg:mx-0 md:text-lg">
              {summary}
            </p>
          </div>
          <div className="md:max-w-1/2 flex flex-col gap-8 mt-8 md:mt-0">
            <div>
              <h6 className="text-black font-bold font-nunito text-h6">Scope of work</h6>
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
                          className={`text-small font-inter px-3 py-1 rounded-full ${bg} ${text}`}
                        >
                          {title}
                        </div>
                      );
                    })}
              </div>
            </div>
            <div>
              <h3 className="text-black font-bold font-nunito text-h6">Tech stack</h3>
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
          className="object-cover h-36 md:h-full max-h-96 w-full rounded-2xl"
          draggable={false}
          priority={true}
          quality={100}
          loading="eager"
        />
      </div>
    </>
  );
}