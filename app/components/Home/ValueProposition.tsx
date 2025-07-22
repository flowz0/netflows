import ValueCard from "./ValueCard";

import { FaBolt, FaTools, FaCheck } from "react-icons/fa";

export default function ValueProposition() {
  return (
    <section className="mt-64 max-w-7xl mx-auto">
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-h2 font-bold font-nunito text-black">
          Why Businesses Choose Netflows
        </h2>
        <p className="mt-4 text-p max-w-6xl font-inter text-black75">
          You need more than just a pretty website, you need real results. We build fast, tailored digital experiences designed to boost visibility, capture leads, and help your business grow with confidence. Here&apos;s what sets us apart.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
        <ValueCard
          Icon={FaBolt}
          title="Fast Turnaround"
          desc="We deliver high-quality, lead-focused websites in days, not weeks, so you can grow faster and stay ahead."
        />
        <ValueCard
          Icon={FaTools}
          title="Solutions That Convert"
          desc="Every site is built around your brand and goals, no templates, just strategy-driven design that converts."
        />
        <ValueCard
          Icon={FaCheck}
          title="Satisfaction Guaranteed"
          desc="We work closely with you from start to finish. If something isn't right, we'll make it right, no questions asked."
        />
      </div>
    </section>
  );
}