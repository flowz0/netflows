import ProjectData from "@/data/project.data";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudies() {
  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto md:mt-64">
      <div className="flex flex-col items-center cursor-default">
        <h2 className="text-h4 font-bold font-nunito text-black sm:text-h2">
          Case Studies
        </h2>
        <p className="mt-4 text-p max-w-6xl text-center font-inter text-black75">
          These are some of our most recent projects.
        </p>
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-y-6 md:gap-x-6 md:grid-cols-2 md:mt-12">
        {ProjectData.slice(0, 2).map((project) => (
          <CaseStudyCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}