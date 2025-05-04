import { ElementType } from "react";

interface FeatureProps {
  Icon: ElementType;
  title: string;
  desc: string;
  className?: string;
}

export default function Feature({ Icon, title, desc, className }: FeatureProps) {
  return (
    <div className={`${className} bg-[#252323] rounded-2xl w-full py-7 px-6`}>
      <div>
        <Icon className="w-6 h-6 text-[#EFEFEF]" />
      </div>
      <h3 className="text-[#EFEFEF] text-2xl font-semibold mt-5 md:text-3xl">
        {title}
      </h3>
      <p className="text-[rgba(239,239,239,0.8)] mt-2">
        {desc}
      </p>
    </div>
  );
};