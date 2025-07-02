import Image from "next/image";

import PlaceholderLogo from "@/public/2000x2000.svg";

import NextjsLogo from "@/public/logos/nextjs.svg";
import TypeScriptLogo from "@/public/logos/typescript.svg";
import TailwindLogo from "@/public/logos/tailwindcss.svg";
import Link from "next/link";
import { ProjectType } from "@/app/types/project";

export default function ProjectHeader({
  brandLogo,
  brandName,
  summary,
  link,
  projectBanner
}: ProjectType) {
  return (
    <>
      <div className="md:flex md:flex-col">
        <Link href={`${link}`} target="_blank" className="flex items-center gap-4 w-fit">
          <Image
            src={brandLogo || PlaceholderLogo}
            alt={`${brandName} brand logo`}
            className="w-12 h-auto object-cover rounded-lg"
            draggable={false}
          />
          <h1 className="text-[#f5f5f5] text-3xl/[2.4rem] font-semibold hover:underline md:text-4xl/[3rem]">
            {brandName}
          </h1>
        </Link>

        <div className="md:flex md:justify-between md:items-start gap-x-8 mt-4">
          <div className="md:max-w-1/2">
            <p className="text-[#a8a8a8] text-base/[1.6rem] max-w-lg lg:mx-0 md:text-lg/[1.8rem]">
              {summary}
            </p>
          </div>
          <div className="md:max-w-1/2 flex flex-col gap-4 mt-4 md:mt-0">
            <div>
              <h3 className="font-semibold sm:text-lg">Scope of work</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <p className="bg-purple-200 text-purple-900 font-bold py-1 px-4 rounded-full">Web Design</p>
                <p className="bg-sky-200 text-sky-900 font-bold py-1 px-4 rounded-full">Web Development</p>
                <p className="bg-amber-200 text-amber-900 font-bold py-1 px-4 rounded-full">Website Maintenance</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold sm:text-lg">Tech stack</h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="bg-[hsl(0,0%,14%)] flex items-center gap-2 py-2 px-3 rounded-lg">
                  <Image
                    src={NextjsLogo}
                    alt="Tech stack logo"
                    className="text-[#06B6D4] bg-[#ffffff] p-1 w-6 h-6 rounded-md"
                    draggable={false}
                  />
                  <p>
                    Next.js
                  </p>
                </li>
                <li className="bg-[hsl(0,0%,14%)] flex items-center gap-2 py-2 px-3 rounded-lg">
                  <Image
                    src={TypeScriptLogo}
                    alt="Tech stack logo"
                    className="text-[#06B6D4] bg-[#3178C6] p-1 w-6 h-6 rounded-md"
                    draggable={false}
                  />
                  <p>
                    TypeScript
                  </p>
                </li>
                <li className="bg-[hsl(0,0%,14%)] flex items-center gap-2 py-2 px-3 rounded-lg">
                  <Image
                    src={TailwindLogo}
                    alt="Tech stack logo"
                    className="text-[#06B6D4] bg-[#06B6D4] p-1 w-6 h-6 rounded-md"
                    draggable={false}
                  />
                  <p>
                    Tailwind CSS
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Image
          src={projectBanner || PlaceholderLogo}
          alt={`${brandName} project cover image`}
          className="object-cover max-h-96 h-full w-auto rounded-xl"
          draggable={false}
        />
      </div>
    </>
  );
}