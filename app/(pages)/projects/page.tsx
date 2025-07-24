import { Metadata } from "next";

import CaseStudyCard from "@/app/components/Home/Study/CaseStudyCard";
import ProjectData from "@/app/data/projects.data";

export const metadata: Metadata = {
  title: "Web Design & Development Case Studies",
};

export default function ProjectsPage() {
  return (
    <main className="mt-16 px-6 max-w-7xl mx-auto lg:mt-24">
      <div className="flex flex-col">
        <h1 className="text-black text-h3 font-bold font-nunito sm:text-h1">
          What We&apos;ve Built
        </h1>
        <p className="mt-4 max-w-3xl text-p font-inter text-black75">
          Take a look at projects where we helped partners bring their ideas to
          life through strategic design and modern web solutions.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ProjectData.slice(0, 4).map((project) => (
          <CaseStudyCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
