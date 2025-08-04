import ValueCard from "./ValueCard";

import { MdTrendingUp, MdViewModule, MdInsights } from "react-icons/md";

export default function ValueProposition() {
  return (
    <section className="mt-32 max-w-7xl mx-auto md:mt-64">
      <div className="px-6 grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
        <ValueCard
          Icon={MdTrendingUp}
          title="Results Driven Design"
          desc="We create interfaces that not only look great but guide users toward action and drive real results."
        />
        <ValueCard
          Icon={MdViewModule}
          title="Scalable Solutions"
          desc="Our custom builds are future-ready making it easy to add new solutions without starting over."
        />
        <ValueCard
          Icon={MdInsights}
          title="Strategic Consulting"
          desc="Expert guidance on what to build and why, helping you with solutions that deliver high return on investment."
        />
      </div>
    </section>
  );
}