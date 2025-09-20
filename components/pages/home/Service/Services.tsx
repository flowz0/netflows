"use client";

import { services } from "@/data/service.data";
import ServiceItem from "./ServiceItem";
import { useState } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto md:mt-64">
      <div className="flex flex-col cursor-default lg:flex-row">
        <h2 className="text-h4 font-bold font-nunito text-black lg:w-3/5 sm:text-h2">
          What Services
          <br />
          We&apos;re Offering
        </h2>
        <p className="mt-4 text-p font-inter text-black75 md:mt-0 lg:w-2/5">
          We offer digital solutions to help you grow your online presence, generate leads, and scale your business. From responsive websites to scalable web apps, our services are tailored to your goals and built for results.
        </p>
      </div>

      <div className="mt-8 md:mt-12">
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