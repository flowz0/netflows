import Feature from "./Feature";

import { FaCode, FaPaintBrush, FaWrench, FaSearchDollar } from "react-icons/fa";

export default function Features() {
  return (
    <section>
      <div className="max-w-7xl pb-32 px-6 mx-auto grid lg:justify-evenly gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Feature
          title="Web Development"
          desc="Get a custom, responsive website/app designed to drive traffic and conversions, tailored to your business needs."
          Icon={FaCode}
        />
        <Feature
          title="Web Design"
          desc="We create intuitive, modern designs that enhance user experience and boost engagement across all devices."
          Icon={FaPaintBrush}
        />
        <Feature
          title="Website Maintenance"
          desc="Ensure your site runs smoothly with regular updates, backups, and performance optimizations so you can focus on your business."
          Icon={FaWrench}
        />
        <Feature
          title="SEO Optimizations"
          desc="Boost your site&apos;s Google ranking and optimize for mobile, ensuring fast, accessible experiences for all users."
          Icon={FaSearchDollar}
        />
      </div>
    </section>
  );
};