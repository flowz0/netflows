import Feature from "./Feature";

import { FaDollarSign, FaRocket, FaChartLine, FaBrain } from "react-icons/fa";

export default function Features() {
  return (
    <section>
      <div className="max-w-7xl pb-32 px-6 mx-auto grid lg:justify-evenly gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Feature
          title="Results-Driven Design That Converts"
          desc="We create interfaces that not only look great but guide users toward action and drive real results."
          Icon={FaDollarSign}
        />
        <Feature
          title="Lightning-Fast Load Times"
          desc="We build performance-first websites that load quickly and keep users engaged."
          Icon={FaRocket}
        />
        <Feature
          title="Scalable Solutions Built for Growth"
          desc="Our builds are future-ready making it easy to add new features without starting over."
          Icon={FaChartLine}
        />
        <Feature
          title="Strategic Consulting Included"
          desc="Expert guidance on what to build and why, helping you with features that deliver high ROI."
          Icon={FaBrain}
        />
      </div>
    </section>
  );
};