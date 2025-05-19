import ProjectData from "@/app/data/project";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-[#f5f5f5] text-4xl/[2.4rem] font-bold text-center lg:text-start md:text-5xl/[3rem]">
            Case Studies
          </h2>
          <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4 max-w-2xl mx-auto text-center lg:text-start lg:mx-0 md:text-lg/[2rem]">
            A closer look at how we help businesses grow through design and development.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ProjectData.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}