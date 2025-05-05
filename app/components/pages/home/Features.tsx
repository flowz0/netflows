import Feature from "./Feature";

import { FaBolt, FaLock, FaChartLine, FaShoppingCart } from "react-icons/fa";

export default function Features() {
  return (
    <section>
      <div className="max-w-7xl pb-32 px-6 mx-auto grid lg:justify-evenly gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Feature
          title="Lightning-Fast Experiences"
          desc="Optimized websites and apps that load in seconds to keep users engaged and reduce bounce rates."
          Icon={FaBolt}
          iconColor="text-yellow-400"
          className="bg-yellow-100 text-yellow-800"
          descTextColor="text-yellow-800/60"
          borderClass="border-2 border-yellow-800/60 shadow shadow-yellow-800/20"
        />
        <Feature
          title="Enterprise-Level Protection"
          desc="Safeguard your business with secure architecture, encryption, and proactive monitoring."
          Icon={FaLock}
          iconColor="text-sky-500"
          className="bg-sky-100 text-sky-800"
          descTextColor="text-sky-800/60"
          borderClass="border-2 border-sky-800/60 shadow shadow-sky-800/20"
        />
        <Feature
          title="Ready to Grow With You"
          desc="Built with flexible infrastructure to support your growth—no matter the size or stage of your business."
          Icon={FaChartLine}
          iconColor="text-purple-500"
          className="bg-purple-100 text-purple-800"
          descTextColor="text-purple-800/60"
          borderClass="border-2 border-purple-800/60 shadow-purple-800/20"
        />
        <Feature
          title="Turn Visitors Into Customers"
          desc="User-focused design and strategy that turn visitors into loyal customers and drive real results."
          Icon={FaShoppingCart}
          iconColor="text-green-500"
          className="bg-green-100 text-green-800"
          descTextColor="text-green-800/60"
          borderClass="border-2 border-green-800/60 shadow-purple-800/20"
        />
      </div>
    </section>
  );
};