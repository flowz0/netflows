"use client";

import { ServiceType } from "@/app/types/service";
import { useState } from "react";

import ServiceButton from "./ServiceButton";
import ServiceDetail from "./ServiceDetail";

import WebDevImg from "@/public/home/web-development-img.svg";
import WebDesignImg from "@/public/home/web-design-img.svg";
import MaintenanceImg from "@/public/home/website-maintenance-img.svg";

const serviceData: ServiceType[] = [
  {
    id: 1,
    title: "Web Development",
    description: "We build fast, secure, and scalable websites that grow with your business from sleek landing pages to full-stack web applications.",
    image: WebDevImg,
  },
  {
    id: 2,
    title: "Web Design",
    description: "Our design approach blends aesthetics with functionality, delivering visually stunning and user-friendly interfaces that convert.",
    image: WebDesignImg,
  },
  {
    id: 3,
    title: "Website Maintenance",
    description: "Keep your website running smoothly with regular updates, security patches, and performance optimization services.",
    image: MaintenanceImg,
  },
];

function Services() {
  const [activeServiceId, setActiveServiceId] = useState<number>(1);
  const activeService = serviceData.find((s) => s.id === activeServiceId);

  return (
    <section id="services" className="pt-32 bg-[#0a0a0a] lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="bg-[#00b3ff] text-[#0a0a0a] font-bold py-1 px-5 w-fit rounded-full">
            Our Services
          </p>
          <h2 className="text-[#f5f5f5] text-4xl/[2.6rem] mt-4 font-semibold text-center md:text-5xl/[3.4rem]">
            What We Do Best
          </h2>
          <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4 max-w-lg mx-auto text-center lg:mx-0 md:text-lg/[2rem]">
            We build custom websites and web apps designed to convert. Optimized for performance and growth with secure, accessible, and responsive experiences on every device.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="bg-[#242424] px-4 py-6 rounded-2xl h-fit flex flex-col gap-y-3 md:p-4 lg:w-2/5">
            {/* Service Button */}
            {serviceData.map((service) => (
              <ServiceButton
                key={service.id}
                service={service}
                isActive={activeServiceId === service.id}
                onClick={() => setActiveServiceId(service.id)}
              />
            ))}
          </div>

          {/* Active Service Content */}
          {activeService && <ServiceDetail service={activeService} />}
        </div>
      </div>
    </section>
  );
}

export default Services;