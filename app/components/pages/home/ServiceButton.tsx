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
      className={`text-base/[1.466rem] font-bold p-4 rounded-2xl flex items-center gap-x-2 transition-all md:px-6 md:py-2 md:text-2xl/[2.649rem] ${
        isActive
        ? "bg-[#00b4ff] text-[#0a0a0a] cursor-not-allowed gap-x-3"
        : "bg-[#3d3d3d] text-[#f5f5f5] cursor-pointer active:bg-[hsl(0,0%,34%)] hover:text-[#f5f5f5] hover:gap-x-3"
      }`}
    >
      {service.title}
      <MdKeyboardArrowRight className="w-6 h-6" />
    </button>
  )
}

export default ServiceButton;