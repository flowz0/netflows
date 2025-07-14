import ProjectData from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="pt-32 pb-16 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-[#f5f5f5] text-4xl font-semibold text-center md:text-start md:text-5xl">
            What We&apos;ve <span className="text-[#00b4ff] font-bold">Built</span>
          </h2>
          <p className="text-[#a8a8a8] text-base mt-4 max-w-md text-center md:text-start lg:mx-0 md:text-lg">
            Explore the web design and development solutions we&apos;ve crafted for clients across industries.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ProjectData.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}