import { slugify } from "@/lib/slugify.lib";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cache } from "react";
import ProjectHeader from "@/components/pages/projects/ProjectHeader";
import ProjectBody from "@/components/pages/projects/ProjectBody";
import ProjectData from "@/data/project.data";

type Props = {
  params: Promise<{ slug: string }>;
};

const getProject = cache(async (slug: string) => {
  return ProjectData.find(
    (project) =>
      `${slugify(project.brandName)}-${slugify(project.industry)}` === slug
  ) || null;
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.brandName} - Case Study`,
    description: project.summary,
    ...(project.projectThumbnail && {
      openGraph: {
        images: [
          {
            url: project.projectThumbnail?.src
          }
        ]
      }
    })
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <main>
      <article className="mt-16 px-6 max-w-7xl mx-auto lg:mt-24">
        <ProjectHeader
          project={project}
        />
        <ProjectBody
          project={project}
        />
      </article>
    </main>
  );
}