import Image, { StaticImageData } from "next/image";

import { FaLongArrowAltRight } from "react-icons/fa";

interface ServiceProps {
  title: string;
  img: StaticImageData;
}

export default function Service({ title, img }: ServiceProps) {
  return (
    <div className="rounded-xl w-fit sm:max-w-sm">
      <Image
        src={img}
        alt="Service image"
        className="object-cover h-64 w-full rounded-xl border border-[rgba(4,15,22,1.0)] sm:h-60"
        draggable={false}
      />
      <div className="bg-[#040F16] flex items-center gap-x-2 rounded-xl -translate-y-6 py-4 px-6 cursor-pointer group">
        <h3 className="text-[#FBFBFF] font-bold">{title}</h3>
        <FaLongArrowAltRight className="text-[rgba(251,251,255,0.7)] h-6 w-6 duration-300 ease-in-out group-hover:translate-x-2" />
      </div>
    </div>
  );
};