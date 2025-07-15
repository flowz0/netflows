import ProjectData from "@/app/data/projects";
import { slugify } from "@/app/lib/slugify";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cache } from "react";
import ProjectHeader from "@/app/components/pages/projects/ProjectHeader";
import ProjectBody from "@/app/components/pages/projects/ProjectBody";

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
      <article className="pt-24 px-6 max-w-7xl mx-auto lg:pb-24">
        <ProjectHeader
          id={project.id}
          brandName={project.brandName}
          link={project.link}
          industry={project.industry}
          summary={project.summary}
          brandLogo={project.brandLogo}
          development={project.development}
          design={project.design}
          maintenance={project.maintenance}
          techStack={project.techStack}
          projectBanner={project.projectBanner}
        />
        <ProjectBody
          id={project.id}
          brandName={project.brandName}
          industry={project.industry}
          challenge={project.challenge}
          challengeDesc={project.challengeDesc}
          challengeImg={project.challengeImg}
          solution={project.solution}
          solutionDesc={project.solutionDesc}
          solutionImg={project.solutionImg}
          solutionImg2={project.solutionImg2}
          solutionImg3={project.solutionImg3}
          solutionImg4={project.solutionImg4}
          results={project.results}
          resultsDesc={project.resultsDesc}
          resultsImg={project.resultsImg}
          takeaways={project.takeaways}
          takeawaysDesc={project.takeawaysDesc}
          takeawaysImg={project.takeawaysImg}
          takeawaysImg2={project.takeawaysImg2}
          takeawaysImg3={project.takeawaysImg3}
        />
      </article>
    </main>
  );
}