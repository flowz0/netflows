import { ElementType } from "react";

interface FeatureProps {
  Icon: ElementType;
  title: string;
  desc: string;
  className?: string;
}

export default function Feature({ Icon, title, desc, className }: FeatureProps) {
  return (
    <div className={`${className} bg-[#242424] shadow-xs shadow-[#242424] rounded-lg w-full py-8 px-6`}>
      <div className="bg-[#00b4ff] shadow-xs rounded-lg w-fit p-3">
        <Icon className="text-[#0a0a0a] w-4 h-4" />
      </div>
      <h3 className="mt-6 text-xl font-semibold md:text-2xl/[1.8rem]">
        {title}
      </h3>
      <p className="text-[hsl(0,0%,66%)] mt-2 leading-[1.6rem]">
        {desc}
      </p>
    </div>
  );
};