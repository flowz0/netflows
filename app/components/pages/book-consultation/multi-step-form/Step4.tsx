import { formatTimeTo12Hour } from "@/app/utils/formatTime";
import { formatDate } from "@/app/utils/formatDate";

import { FaCheckCircle } from "react-icons/fa";

interface Step4Props {
  time: string;
  date: string;
}

export default function Step4({time, date}: Step4Props) {
  return (
    <div className="flex flex-col items-center mt-8 sm:mt-12">
      <FaCheckCircle className="text-[#00b4ff] h-16 w-16" />
      <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">
        Consultation Booked
      </h2>
      <p className="mt-4 max-w-md text-center">
        Congratulations! You successfully booked a consultation with Netflows. Make sure to set a reminder so you don&apos;t miss it.
      </p>
      <div className="bg-[hsl(0,0%,20%)] rounded-lg mt-6 py-6 px-12 sm:px-16 text-center">
        <p className="text-[hsl(0,0%,60%)] text-sm">Consultation Details</p>
        <p className="text-[hsl(0,0%,92%)] mt-2 text-2xl sm:text-3xl">
          {formatTimeTo12Hour(time)}
        </p>
        <p className="text-[hsl(0,0%,92%)] mt-1 text-lg sm:text-xl">
          {formatDate(date)}
        </p>
      </div>
    </div>
  );
}