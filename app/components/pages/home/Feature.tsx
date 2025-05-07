import { ElementType } from "react";

interface FeatureProps {
  Icon: ElementType;
  title: string;
  desc: string;
  className?: string;
  iconColor?: string;
}

export default function Feature({ Icon, title, desc, className, iconColor }: FeatureProps) {
  return (
    <div className={`${className} bg-[#252323] text-[#EFEFEF] shadow shadow-[#252323] rounded-2xl w-full py-8 px-6`}>
      <div className="border border-[hsl(0,3%,24%)] rounded-xl w-fit p-3">
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="mt-5 text-xl font-semibold md:text-2xl/[2rem]">
        {title}
      </h3>
      <p className="text-[#EFEFEF]/60 mt-2 leading-[1.8rem]">
        {desc}
      </p>
    </div>
  );
};