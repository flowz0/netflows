"use client";

import { ServiceType } from "@/app/types/service";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  service: ServiceType;
  isActive: boolean;
  onClick: () => void;
};

function ServiceButton({ service, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`text-xl/[1.466rem] font-bold p-4 rounded-xl flex items-center gap-x-2 transition-colors md:px-5 md:py-2 md:text-2xl/[2.649rem] ${
        isActive
        ? "bg-linear-to-r from-[#00A5CF] to-[#00cfcf] text-[#EFEFEF] cursor-not-allowed"
        : "bg-[#CDCACC] text-[#252323] cursor-pointer hover:bg-[hsl(320,3%,70%)]"
      }`}
    >
      {service.title}
      <MdKeyboardArrowRight className="w-6 h-6" />
    </button>
  )
}

export default ServiceButton;