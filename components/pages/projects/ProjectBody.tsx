import Image from "next/image";

import PlaceholderImg from "@/public/1920x1080.svg";
import { ProjectProps } from "@/types/project.type";

export default function ProjectBody({ project }: ProjectProps) {
  const {
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
  } = project;

  return (
    <div className="mt-32">
      <h2 className="text-black text-h5 font-bold font-nunito sm:text-h4 md:text-h2">
        {challenge}
      </h2>
      <p className="text-black75 text-p font-inter mt-4 lg:mx-0">
        {challengeDesc}
      </p>
      <Image
        src={challengeImg || PlaceholderImg}
        alt="Project image"
        className="object-cover h-full w-full mt-8 rounded-xl"
        draggable={false}
        priority={false}
        quality={80}
        loading="lazy"
      />
      <h2 className="text-black text-h5 font-bold font-nunito mt-32 sm:text-h4 md:text-h2">
        {solution}
      </h2>
      <p className="text-black75 text-p font-inter mt-4 lg:mx-0">
        {solutionDesc}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Image
          src={solutionImg || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
          priority={false}
          quality={80}
          loading="lazy"
        />
        <Image
          src={solutionImg2 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
          priority={false}
          quality={80}
          loading="lazy"
        />
        <Image
          src={solutionImg3 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
          priority={false}
          quality={80}
          loading="lazy"
        />
        <Image
          src={solutionImg4 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
          priority={false}
          quality={80}
          loading="lazy"
        />
      </div>
      <h2 className="text-black text-h5 font-bold font-nunito mt-32 sm:text-h4 md:text-h2">
        {results}
      </h2>
      <p className="text-black75 text-p font-inter mt-4 lg:mx-0">
        {resultsDesc}
      </p>
      <Image
        src={resultsImg || PlaceholderImg}
        alt="Project image"
        className="object-cover h-full w-full mt-8 rounded-xl"
        draggable={false}
        priority={false}
        quality={80}
        loading="lazy"
      />
      <h2 className="text-black text-h5 font-bold font-nunito mt-32 sm:text-h4 md:text-h2">
        {takeaways}
      </h2>
      <p className="text-black75 text-p mt-4 font-inter lg:mx-0">
        {takeawaysDesc}
      </p>
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
        <Image
          src={takeawaysImg || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
          priority={false}
          quality={80}
          loading="lazy"
        />
        <Image
          src={takeawaysImg2 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl"
          draggable={false}
          priority={false}
          quality={80}
          loading="lazy"
        />
        <Image
          src={takeawaysImg3 || PlaceholderImg}
          alt="Project image"
          className="object-cover h-full w-full rounded-xl sm:col-span-2"
          draggable={false}
          priority={false}
          quality={80}
          loading="lazy"
        />
      </div>
    </div>
  );
}