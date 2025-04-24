import Stat from "./Feature";
import { FaRocket, FaStar, FaSmile } from "react-icons/fa";

export default function Features() {
  return (
    <div className="bg-[#FBFBFF] flex justify-center px-6 py-4">
      <div className="max-w-6xl">
        <div className="flex flex-wrap justify-center">
          <Stat icon={FaRocket} title="54" desc="Projects Launched" />
          <Stat icon={FaStar} title="7+" desc="Years of Experience" />
          <Stat icon={FaSmile} title="99%" desc="Customer Satisfaction" />
        </div>
      </div>
    </div>
  );
};