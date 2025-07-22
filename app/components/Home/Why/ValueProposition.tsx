import ValueCard from "./ValueCard";

import { FaBolt, FaTools, FaCheck } from "react-icons/fa";

export default function ValueProposition() {
  return (
    <section className="mt-48 max-w-7xl mx-auto">
      {/* <div className="flex flex-col items-start justify-center">
        <h2 className="text-h2 font-bold font-nunito text-black">
          Why Businesses Choose Netflows
        </h2>
        <p className="mt-4 text-p max-w-6xl font-inter text-black75">
          You need more than just a pretty website, you need real results. We build fast, tailored digital solutions designed to boost visibility, capture leads, and help your business grow with confidence. Here&apos;s what sets us apart.
        </p>
      </div> */}

      <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
        <ValueCard
          Icon={FaBolt}
          title="Results Driven Design"
          desc="We create interfaces that not only look great but guide users toward action and drive real results."
        />
        <ValueCard
          Icon={FaTools}
          title="Scalable Solutions"
          desc="Our custom builds are future-ready making it easy to add new solutions without starting over."
        />
        <ValueCard
          Icon={FaCheck}
          title="Strategic Consulting"
          desc="Expert guidance on what to build and why, helping you with solutions that deliver high ROI."
        />
      </div>
    </section>
  );
}