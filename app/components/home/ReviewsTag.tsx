import { FaStar } from "react-icons/fa";

export default function ReviewsTag() {
  return (
    <div className="bg-[hsl(203,69%,5%)] text-[rgba(250,250,255,0.7)] absolute bottom-36 sm:bottom-48">
      <div className="flex gap-x-2">
        <p className="text-[1.125rem] leading-none">5.0</p>
        <div className="flex">
          <FaStar className="text-[#01BAEF] w-[1.063rem] h-[1.063rem]" />
          <FaStar className="text-[#01BAEF] w-[1.063rem] h-[1.063rem]" />
          <FaStar className="text-[#01BAEF] w-[1.063rem] h-[1.063rem]" />
          <FaStar className="text-[#01BAEF] w-[1.063rem] h-[1.063rem]" />
          <FaStar className="text-[#01BAEF] w-[1.063rem] h-[1.063rem]" />
        </div>
        <p className="text-[1rem] leading-none">
          (129 Reviews)
        </p>
      </div>
    </div>
  )
};