import ProjectData from "@/app/data/projects";
import { slugify } from "@/app/lib/slugify";
import { notFound } from "next/navigation";
import ProjectHeader from "@/app/components/pages/projects/ProjectHeader";
import ProjectBody from "@/app/components/pages/projects/ProjectBody";

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
    <article className="pt-24 px-6 max-w-7xl mx-auto">
      <ProjectHeader
        id={project.id}
        brandName={project.brandName}
        industry={project.industry}
        summary={project.summary}
        brandLogo={project.brandLogo}
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
  );
}