import { FaStar } from "react-icons/fa";

export default function ReviewsTag() {
  return (
    <div className="bg-[hsl(203,69%,8%)] ring ring-[rgba(250,250,255,0.5)] py-1 px-4 rounded-full">
      <div className="flex items-center gap-x-2">
        <p className="text-[rgba(250,250,255,0.7)] text-[1.125rem]/[32px] tracking-[0.016em]">100+</p>
        <div className="flex gap-x-0.5">
          <FaStar className="text-amber-300 w-4 h-4" />
          <FaStar className="text-amber-300 w-4 h-4" />
          <FaStar className="text-amber-300 w-4 h-4" />
          <FaStar className="text-amber-300 w-4 h-4" />
          <FaStar className="text-amber-300 w-4 h-4" />
        </div>
        <p className="text-[rgba(250,250,255,0.7)] text-[1rem]/[34px] tracking-[0.016em]">
          reviews
        </p>
      </div>
    </div>
  );
};