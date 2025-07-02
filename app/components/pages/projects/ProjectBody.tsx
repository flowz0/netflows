import Image from "next/image";

import PlaceholderImg from "@/public/1920x1080.svg";
import { ProjectType } from "@/app/types/project";

export default function ProjectBody({
  challenge,
  challengeDesc,
  challengeImg,
  solution,
  solutionDesc,
  solutionImg,
  solutionImg2,
  solutionImg3,
  solutionImg4,
  results,
  resultsDesc,
  resultsImg,
  takeaways,
  takeawaysDesc,
  takeawaysImg,
  takeawaysImg2,
  takeawaysImg3
}: ProjectType) {
  return (
    <div>
      <h2 className="text-[#f5f5f5] text-4xl/[2.4rem] font-semibold mt-12 md:text-5xl/[3rem]">
        {challenge}
      </h2>
      <p className="text-[#a8a8a8] text-base/[1.6rem] mt-3 lg:mx-0 md:text-lg/[1.8rem]">
        {challengeDesc}
      </p>
      <Image
        src={challengeImg || PlaceholderImg}
        alt="Project image"
        className="object-cover h-full w-full mt-8 rounded-xl"
        draggable={false}
      />
      <h2 className="text-[#f5f5f5] text-4xl/[2.4rem] font-semibold mt-12 md:text-5xl/[3rem]">
        {solution}
      </h2>
      <p className="text-[#a8a8a8] text-base/[1.6rem] mt-3 lg:mx-0 md:text-lg/[1.8rem]">
        {solutionDesc}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Image
          src={solutionImg || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
        />
        <Image
          src={solutionImg2 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
        />
        <Image
          src={solutionImg3 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
        />
        <Image
          src={solutionImg4 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
        />
      </div>
      <h2 className="text-[#f5f5f5] text-4xl/[2.4rem] font-semibold mt-12 md:text-5xl/[3rem]">
        {results}
      </h2>
      <p className="text-[#a8a8a8] text-base/[1.6rem] mt-3 lg:mx-0 md:text-lg/[1.8rem]">
        {resultsDesc}
      </p>
      <Image
        src={resultsImg || PlaceholderImg}
        alt="Project image"
        className="object-cover h-full w-full mt-8 rounded-xl"
        draggable={false}
      />
      <h2 className="text-[#f5f5f5] text-4xl/[2.4rem] font-semibold mt-12 md:text-5xl/[3rem]">
        {takeaways}
      </h2>
      <p className="text-[#a8a8a8] text-base/[1.6rem] mt-3 lg:mx-0 md:text-lg/[1.8rem]">
        {takeawaysDesc}
      </p>
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
        <Image
          src={takeawaysImg || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
        />
        <Image
          src={takeawaysImg2 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
        />
        <Image
          src={takeawaysImg3 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl sm:col-span-2"
          draggable={false}
        />
      </div>
    </div>
  );
}