import Link from "next/link";
import { ElementType } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ValueCardProps {
  Icon: ElementType;
  title: string;
  desc: string;
}

export default function ValueCard({ Icon, title, desc }: ValueCardProps) {
  return (
    <div className="border border-black75 rounded-2xl py-8 px-8">
      <div className="bg-primary h-12 w-12 flex items-center justify-center rounded-2xl">
        <Icon className="text-black5 h-6 w-6" />
      </div>
      <h6 className="text-black text-h6 font-bold font-nunito mt-8">
        {title}
      </h6>
      <p className="text-black75 font-p font-inter mt-4">
        {desc}
      </p>
      <Link href="/" className="mt-12 flex items-center transition-all duration-300 gap-x-2 w-fit hover:gap-x-4">
        <span className="text-black50 text-small font-inter font-medium">
          Learn more
        </span>
        <FaArrowRight className="h-4 w-4 text-black50" />
      </Link>
    </div>
  );
}