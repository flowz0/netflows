"use client";

import { ServiceType } from "@/app/types/service";

type Props = {
  service: ServiceType;
  isActive: boolean;
  onClick: () => void;
};

function ServiceButton({ service, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`text-xl/[1.466rem] font-bold p-4 rounded-xl flex transition-colors md:px-5 md:py-2 md:text-2xl/[2.649rem] ${
        isActive ? "bg-[#00A5CF] text-[#EFEFEF] cursor-not-allowed" : "bg-[#CDCACC] text-[#252323] cursor-pointer hover:bg-[hsl(320,3%,70%)]"
      }`}
    >
      {service.title}
    </button>
  )
}

export default ServiceButton;