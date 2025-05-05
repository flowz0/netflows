import { ElementType } from "react";

interface FeatureProps {
  Icon: ElementType;
  title: string;
  desc: string;
  className?: string;
  iconColor?: string;
  descTextColor?: string;
  borderClass?: string;
}

export default function Feature({ Icon, title, desc, className, iconColor, descTextColor, borderClass }: FeatureProps) {
  return (
    <div className={`${className} ${borderClass} rounded-2xl w-full pt-8 pb-6 px-5`}>
      <div>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className={`${className} text-xl font-semibold mt-5 md:text-2xl/[2rem]`}>
        {title}
      </h3>
      <p className={`${descTextColor} leading-[1.8rem] mt-2`}>
        {desc}
      </p>
    </div>
  );
};