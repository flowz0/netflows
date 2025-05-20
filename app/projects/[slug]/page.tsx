import ProjectData from "@/app/data/projects";
import { slugify } from "@/app/lib/slugify";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = ProjectData.find(
    (project) =>
      `${slugify(project.brandName)}-${slugify(project.industry)}` === slug
  )

  if (!project) notFound();

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-[#f5f5f5] text-4xl/[2.4rem] font-semibold text-center lg:text-start md:text-5xl/[3rem]">
        {project.brandName}
      </h1>
      <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4 max-w-2xl mx-auto text-center lg:text-start lg:mx-0 md:text-lg/[2rem]">
        {project.industry}
      </p>
    </section>
  );
}