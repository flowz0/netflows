import { caseStudies } from "@/app/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudies() {
  return (
    <section className="mt-64 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-h2 font-bold text-center font-nunito text-black">
          Case Studies
        </h2>
        <p className="mt-4 text-p max-w-6xl text-center font-inter text-black75">
          These are some of our most recent projects.
        </p>
      </div>
      
      <div className="mt-16 grid grid-cols-1 gap-y-6 md:gap-x-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.company}
            company={study.company}
            industry={study.industry}
            img={study.img}
            services={study.services}
          />
        ))}
      </div>
    </section>
  );
}