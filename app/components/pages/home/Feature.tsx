import { ElementType } from "react";

interface FeatureProps {
  Icon: ElementType;
  title: string;
  desc: string;
  className?: string;
  iconColor?: string;
  shadowColor?: string;
}

export default function Feature({ Icon, title, desc, className, iconColor, shadowColor = "shadow-[#f5f5f5]" }: FeatureProps) {
  return (
    <div className={`${className} bg-[#242424] shadow-xs shadow-[#242424] rounded-lg w-full py-8 px-6`}>
      <div className={`${shadowColor} shadow-xs rounded-full w-fit p-3`}>
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <h3 className="mt-8 text-xl font-semibold md:text-2xl/[1.8rem]">
        {title}
      </h3>
      <p className="text-[hsl(0,0%,66%)] mt-4 leading-[1.6rem]">
        {desc}
      </p>
    </div>
  );
};