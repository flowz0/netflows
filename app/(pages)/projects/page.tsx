import { Metadata } from "next";

import ProjectData from "@/data/project.data";
import CaseStudyCard from "@/components/pages/home/Study/CaseStudyCard";

export const metadata: Metadata = {
  title: "Web Design & Development Projects",
  description: "Take a look at projects where we helped partners bring their ideas to life through strategic design and modern web solutions."
};

export default function ProjectsPage() {
  return (
    <main className="mt-16 px-6 max-w-7xl mx-auto md:mt-32">
      <div className="flex flex-col cursor-default">
        <h1 className="text-black text-h3 font-bold font-nunito sm:text-h1">
          What We&apos;ve Built
        </h1>
        <p className="mt-4 max-w-3xl text-p font-inter text-black75">
          Take a look at projects where we helped partners bring their ideas to
          life through strategic design and modern web solutions.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-y-6 md:gap-x-6 md:grid-cols-2 md:mt-12">
        {ProjectData.slice(0, 4).map((project) => (
          <CaseStudyCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
