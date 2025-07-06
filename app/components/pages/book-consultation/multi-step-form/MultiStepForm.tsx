"use client";

import { FormData } from "@/app/types/formData";
import { useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { FaUser, FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import Step1 from "./Step1";

const steps = [
  { id: 1, label: "Info", icon: FaUser },
  { id: 2, label: "Date", icon: FaCalendarAlt },
  { id: 3, label: "Time", icon: FaClock },
  { id: 4, label: "Booked", icon: FaCheckCircle },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    date: "",
    time: "",
  });

  const nextStep = () => step < 4 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    nextStep();
  };

  return (
    <form className="bg-[#242424] mt-12 py-12 px-4 rounded-2xl shadow-xs shadow-[#242424] sm:py-16 sm:px-10">
      {/* Stepper */}
      <div className="flex items-center justify-center gap-x-2 sm:gap-x-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isCurrent = step === s.id;
          const isCompleted = step > s.id;
          const colorClass = isCurrent
            ? "text-[#00b4ff]"
            : isCompleted
              ? "text-[hsl(0,0%,80%)]"
              : "text-[hsl(0,0%,40%)]";
          return (
            <div key={s.id} className="flex items-center gap-x-2 sm:gap-x-6">
              {i !== 0 && (
                <div
                  className={`h-px w-6 sm:w-16 ${step > s.id - 1 ? "bg-[hsl(0,0%,80%)]" : "bg-[hsl(0,0%,40%)]"
                    }`}
                />
              )}
              {/* Step icon and label */}
              <div
                className={`flex flex-col items-center gap-y-2 ${colorClass} transition-colors duration-300`}
                aria-current={isCurrent ? "step" : undefined}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                <p className="hidden mt-2 text-sm font-medium sm:block">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {step === 1 &&
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      }

      {step === 2 &&
        <Step2
          formData={formData}
          date={formData.date}
          setFormData={setFormData}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      }

      {step === 3 &&
        <Step3
          time={formData.time}
          setFormData={setFormData}
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      }

      {step === 4 &&
        <Step4
          name={formData.name}
          time={formData.time}
          date={formData.date}
          service={formData.service}
        />
      }
    </form>
  );
}