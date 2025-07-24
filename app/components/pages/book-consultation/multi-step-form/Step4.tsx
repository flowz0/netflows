import { formatTimeTo12Hour } from "@/app/utils/formatTime";
import { formatDate } from "@/app/utils/formatDate";

import { FaCheckCircle } from "react-icons/fa";

interface Step4Props {
  firstName: string;
  time: string;
  date: string;
  service: string;
}

export default function Step4({firstName, time, date, service}: Step4Props) {
  return (
    <div className="flex flex-col items-center mt-16">
      <FaCheckCircle className="text-primary h-32 w-32" />
      <h2 className="text-black75 text-h4 font-bold font-nunito text-center mt-8 sm:text-h3">
        Consultation Booked
      </h2>
      <p className="text-black75 text-p font-inter mt-4 max-w-xl text-center">
        Congratulations, {firstName}! You successfully booked a consultation with Netflows for {service}. Make sure to set a reminder so you don&apos;t miss it.
      </p>
      <div className="bg-primary rounded-lg mt-12 py-6 px-12 sm:px-16 text-center">
        <p className="text-black5 text-small font-inter">
          Consultation Details
        </p>
        <h3 className="text-black5 text-h5 font-bold font-nunito mt-4 sm:text-h4">
          {formatTimeTo12Hour(time)}
        </h3>
        <h4 className="text-black5 text-p font-inter mt-2">
          {formatDate(date)}
        </h4>
      </div>
    </div>
  );
}