import ProjectData from "@/app/data/projects";
import ProjectCard from "@/app/components/pages/home/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto lg:pb-32">
      <div className="flex flex-col items-center">
        <h1 className="text-[#f5f5f5] mt-4 text-4xl font-semibold text-center md:text-5xl">
          What We&apos;ve <span className="text-[#00b4ff] font-bold">Built</span> {" "}
          <br className="hidden sm:block" />
          With Our Partners
        </h1>
        <p className="text-[#a8a8a8] text-base mt-4 max-w-xl text-center lg:mx-0 md:text-lg">
          Take a look at projects where we helped partners bring their ideas to
          life through thoughtful design and modern web solutions.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ProjectData.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
