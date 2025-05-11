import Feature from "./Feature";

import { FaCode, FaDesktop, FaWrench, FaSearchDollar } from "react-icons/fa";

export default function Features() {
  return (
    <section>
      <div className="max-w-7xl pb-32 px-6 mx-auto grid lg:justify-evenly gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Feature
          title="Custom Website Development"
          desc="Get a custom, responsive website designed to drive traffic and conversions, tailored to your business needs."
          Icon={FaCode}
          iconColor="text-sky-400"
        />
        <Feature
          title="User-Focused Web Design"
          desc="We create intuitive, modern designs that enhance user experience and boost engagement across all devices."
          Icon={FaDesktop}
          iconColor="text-purple-500"
        />
        <Feature
          title="Ongoing Website Maintenance"
          desc="Ensure your site runs smoothly with regular updates, backups, and performance optimizations—so you can focus on your business."
          Icon={FaWrench}
          iconColor="text-orange-500"
        />
        <Feature
          title="SEO & Mobile Optimization Included"
          desc="Boost your site&apos;s Google ranking and optimize for mobile, ensuring fast, accessible experiences for all users."
          Icon={FaSearchDollar}
          iconColor="text-green-500"
        />
      </div>
    </section>
  );
};