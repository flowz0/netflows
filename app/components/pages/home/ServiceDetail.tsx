"use client";

import { ServiceType } from "@/app/types/service";
import Image from "next/image";

type Props = {
  service: ServiceType;
};

function ServiceDetail({ service }: Props) {
  return (
    <div className="bg-[#252323] p-6 rounded-xl md:px-8 md:py-6 lg:w-3/5">
      {/* Active Service Content */}
      <h4 className="text-[#EFEFEF] text-3xl/[2.491rem] font-bold md:text-4xl/[3.399rem]">
        {service.title}
      </h4>
      <p className="text-[rgba(239,239,239,0.8)] leading-[2.124rem] md:text-base/[2.224rem] mt-3 md:mt-2">
        {service.description}
      </p>
      <div className="flex justify-center">
        <Image
          src={service.image}
          alt={`${service.title} image`}
          className="object-cover h-auto max-w-fit pointer-events-none mt-8"
        />
      </div>
    </div>
  );
}

export default ServiceDetail;