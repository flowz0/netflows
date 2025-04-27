import Image, { StaticImageData } from "next/image";

import { FaLongArrowAltRight } from "react-icons/fa";

interface ServiceProps {
  title: string;
  img: StaticImageData;
}

export default function Service({ title, img }: ServiceProps) {
  return (
    <div className="rounded-xl cursor-pointer group sm:max-w-sm">
      <Image
        src={img}
        alt="Service image"
        className="object-cover h-64 w-full rounded-xl border border-[rgba(4,15,22,1.0)] shadow shadow-[#040F16]/70 sm:h-60"
        draggable={false}
      />
      <div className="bg-[#040F16] shadow shadow-[#040F16]/70 flex gap-x-4 rounded-xl -translate-y-6 py-4 px-5">
        <h3 className="text-[rgba(251,251,255,0.7)] group-hover:text-[#FBFBFF] duration-300 transition-colors font-bold">{title}</h3>
        <FaLongArrowAltRight className="text-[rgba(251,251,255,0.7)] h-6 w-6 duration-300 transition-transform trnasition-colors group-hover:text-[#01BAEF] group-hover:translate-x-2" />
      </div>
    </div>
  );
};