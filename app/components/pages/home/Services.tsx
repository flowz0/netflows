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
    description: "We build fast, secure, and scalable websites that grow with your business — from sleek landing pages to full-stack web applications.",
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
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#252323] text-4xl/[2.466rem] font-bold md:text-5xl/[3.416rem]">
          <span className="text-[#00A5CF]">What</span> We Do Best
        </h2>
        <p className="text-[rgba(37,35,35,0.8)] text-base/[2.224rem] mt-4 md:text-lg/[2.274rem]">
          Tailored web solutions designed to grow your business faster.
        </p>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="bg-[#252323] px-4 py-6 md:px-6 md:py-8 rounded-xl h-fit flex flex-col gap-y-4 lg:w-2/5">
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