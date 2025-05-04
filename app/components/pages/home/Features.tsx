import Feature from "./Feature";

import { FaBolt, FaLock, FaChartLine, FaShoppingCart } from "react-icons/fa";

export default function Features() {
  return (
    <section>
      <div className="max-w-7xl px-6 mx-auto grid lg:justify-evenly gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Feature
          title="Lightning-Fast Experiences"
          desc="Optimized websites and apps that load in seconds to keep users engaged and reduce bounce rates."
          Icon={FaBolt}
        />
        <Feature
          title="Enterprise-Level Protection"
          desc="Safeguard your business with secure architecture, encryption, and proactive monitoring."
          Icon={FaLock}
        />
        <Feature
          title="Ready to Grow With You"
          desc="Built with flexible infrastructure to support your growth—no matter the size or stage of your business."
          Icon={FaChartLine}
        />
        <Feature
          title="Turn Visitors Into Customers"
          desc="User-focused design and strategy that turn visitors into loyal customers and drive real results."
          Icon={FaShoppingCart}
        />
      </div>
    </section>
  );
};