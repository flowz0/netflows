import Stat from "./Benefit";
import { FaRocket, FaStar, FaSmile } from "react-icons/fa";

export default function Benefits() {
  return (
    <div className="bg-[#FBFBFF] flex justify-center px-6 py-8 sm:py-32">
      <div className="max-w-6xl">
        <div className="flex flex-wrap justify-center gap-y-7 gap-x-4">
          <Stat icon={FaRocket} title="54" desc="Projects Launched" />
          <Stat icon={FaStar} title="7+" desc="Years of Experience" />
          <Stat icon={FaSmile} title="99%" desc="Customer Satisfaction" />
        </div>
      </div>
    </div>
  );
};