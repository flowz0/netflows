"use client";

import { services } from "@/app/data/service";
import ServiceItem from "./ServiceItem";
import { useState } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="mt-64 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 items-center">
        <h2 className="text-h2 font-bold font-nunito text-black">
          What Services
          <br />
          We&apos;re Offering
        </h2>
        <p className="text-p max-w-6xl font-inter text-black75">
          We offer services that can help businesses improve their visibility and business reputation online, expand market reach, and increase turnover through effective digital strategies.
        </p>
      </div>

      <div className="mt-16">
        {services.map((service, index) => (
          <div key={index}>
            <ServiceItem
              title={service.title}
              description={service.description}
              image={service.image}
              isOpen={activeIndex === index}
              onClick={() => handleClick(index)}
            />
            {index !== services.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
}