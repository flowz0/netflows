import { ElementType } from "react";

interface ValueCardProps {
  Icon: ElementType;
  title: string;
  desc: string;
}

export default function ValueCard({ Icon, title, desc }: ValueCardProps) {
  return (
    <div className="border border-black75 rounded-2xl py-8 px-8 transition-transform duration-300 ease-in-out cursor-default hover:-translate-y-4">
      <div className="bg-primary h-12 w-12 flex items-center justify-center rounded-lg">
        <Icon className="text-black5 h-8 w-8" />
      </div>
      <h6 className="text-black text-h6 font-bold font-nunito mt-8">
        {title}
      </h6>
      <p className="text-black75 font-p font-inter mt-4">
        {desc}
      </p>
    </div>
  );
}