"use client";

import { ServiceType } from "@/app/types/service";
import Image from "next/image";

type Props = {
  service: ServiceType;
};

function ServiceDetail({ service }: Props) {
  return (
    <article className="bg-[#242424] py-12 px-6 rounded-xl md:px-8 md:py-8 lg:w-3/5">
      {/* Active Service Content */}
      <div className="flex flex-col items-center">
        <h4 className="text-[#f5f5f5] text-3xl/[1.8rem] font-bold text-center md:text-4xl/[3rem]">
          {service.title}
        </h4>
        <p className="text-[#a8a8a8] text-base/[1.6rem] md:text-base/[1.8rem] mt-4 text-center max-w-lg md:mt-2">
          {service.description}
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <Image
          src={service.image}
          alt={`${service.title} image`}
          className="object-cover h-full sm:h-80 w-auto pointer-events-none"
        />
      </div>
    </article>
  );
}

export default ServiceDetail;