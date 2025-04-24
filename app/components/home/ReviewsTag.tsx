import { FaStar } from "react-icons/fa";

export default function ReviewsTag() {
  return (
    <div className="bg-[hsl(203,69%,5%)] text-[rgba(250,250,255,0.7)] absolute top-56 sm:top-60">
      <div className="flex items-center gap-x-2.5">
        <p className="text-[1rem]/[32px] font-bold tracking-[0.016em]">5.0</p>
        <div className="flex gap-x-0.5">
          <FaStar className="text-[#01BAEF] w-[1rem] h-[1rem]" />
          <FaStar className="text-[#01BAEF] w-[1rem] h-[1rem]" />
          <FaStar className="text-[#01BAEF] w-[1rem] h-[1rem]" />
          <FaStar className="text-[#01BAEF] w-[1rem] h-[1rem]" />
          <FaStar className="text-[#01BAEF] w-[1rem] h-[1rem]" />
        </div>
        <p className="text-[1rem]/[30px] tracking-[0.016em]">
          (129 Reviews)
        </p>
      </div>
    </div>
  );
};