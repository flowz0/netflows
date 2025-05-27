import Feature from "./Feature";

import { FaDollarSign, FaRocket, FaChartLine, FaBrain } from "react-icons/fa";

export default function Features() {
  return (
    <section>
      <div className="max-w-7xl pb-32 px-6 mx-auto grid lg:justify-evenly gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Feature
          title="Results-Driven Design That Converts"
          desc="We use proven design strategies to create interfaces that not only look great but guide users toward action and drive real results."
          Icon={FaDollarSign}
        />
        <Feature
          title="Lightning-Fast Load Times"
          desc="We build performance-first websites that load quickly and keep users engaged from the first click."
          Icon={FaRocket}
        />
        <Feature
          title="Scalable Solutions Built for Growth"
          desc="Our builds are future-ready making it easy to add features like e-commerce or booking systems without starting over."
          Icon={FaChartLine}
        />
        <Feature
          title="Strategic Consulting Included"
          desc="Get expert guidance on what to build and why, helping you invest in features that deliver the highest return."
          Icon={FaBrain}
        />
      </div>
    </section>
  );
};