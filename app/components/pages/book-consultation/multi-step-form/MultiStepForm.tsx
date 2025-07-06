"use client";

import { useState } from "react";
import { FaUser, FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import Select from "./Select";
import { DatePicker } from "../date-picker/DatePicker";
import PhoneNumber from "./PhoneNumber";
import { formatTimeTo12Hour } from "@/app/utils/formatTime";
import { formatDate } from "@/app/utils/formatDate";

const steps = [
  { id: 1, label: "Info", icon: FaUser },
  { id: 2, label: "Date", icon: FaCalendarAlt },
  { id: 3, label: "Time", icon: FaClock },
  { id: 4, label: "Booked", icon: FaCheckCircle },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    date: "",
    time: "",
  });
  const [selectedService, setSelectedService] = useState("");

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
              {/* Line before step */}
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

      {step === 1 && (
        <div className="flex flex-col mt-8 sm:mt-12">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[hsl(0,0%,80%)] text-sm">Full name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[hsl(0,0%,80%)] text-sm">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
              />
            </div>
            <PhoneNumber
              value={formData.phone}
              onChange={(formatted) => setFormData({ ...formData, phone: formatted })}
            />
            <div className="flex flex-col">
              <Select
                label="Service"
                selected={selectedService}
                onChange={(value) => {
                  setSelectedService(value);
                  setFormData((prev) => ({ ...prev, service: value }));
                }}
                options={[
                  { value: "", label: "Choose a service" },
                  { value: "web-development", label: "Web Development" },
                  { value: "web-design", label: "Web Design" },
                  { value: "maintenance-support", label: "Maintenance & Support" },
                  { value: "web-hosting", label: "Web Hosting" },
                  { value: "domain-name", label: "Domain Name" },
                  { value: "seo-optimization", label: "SEO Optimization" },
                  { value: "performance-optimization", label: "Performance Optimization" },
                  { value: "additional-pages", label: "Additional Pages" },
                  { value: "3rd-party-api-integration", label: "3rd Party API Integration" },
                ]}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-[hsl(0,0%,80%)] text-sm">Message</label>
              <textarea
                id="message"
                placeholder="Aditional information"
                value={formData.message}
                rows={4}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg resize-none active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
              />
            </div>
          </div>
          <button
            onClick={nextStep}
            className="bg-[hsl(198,100%,40%)] text-[hsl(0,0%,92%)] mt-4 w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(198,100%,48%)]"
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex items-center flex-col mt-8 sm:mt-12">
          <DatePicker
            onSelectDate={(date) => {
              setFormData((prev) => ({
                ...prev,
                date: date.toISOString().split("T")[0], // Store as YYYY-MM-DD
              }));
            }}
          />
          <div className="mt-4 flex gap-x-1">
            <button
              onClick={prevStep}
              className="bg-[hsl(0,0%,40%)] text-[hsl(0,0%,92%)] w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(0,0%,48%))]"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="bg-[hsl(198,100%,40%)] text-[hsl(0,0%,92%)] w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(198,100%,48%)]"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col mt-8 sm:mt-12">
          <label htmlFor="time" className="text-[hsl(0,0%,80%)] text-sm">Time</label>
          <input
            type="time"
            id="time"
            placeholder="1:45 PM"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
          />
          <div className="mt-4 flex gap-x-1">
            <button
              onClick={prevStep}
              className="bg-[hsl(0,0%,40%)] text-[hsl(0,0%,92%)] w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(0,0%,48%))]"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[hsl(198,100%,40%)] text-[hsl(0,0%,92%)] w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(198,100%,48%)]"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
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
              {formatTimeTo12Hour(formData.time)}
            </p>
            <p className="text-[hsl(0,0%,92%)] mt-1 text-lg sm:text-xl">
              {formatDate(formData.date)}
            </p>
          </div>
        </div>
      )}
    </form>
  );
}