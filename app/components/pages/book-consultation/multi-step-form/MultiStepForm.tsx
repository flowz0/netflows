"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUser, FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import Select from "./Select";

const steps = [
  { id: 1, label: "Contact", icon: FaUser },
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
    <form className="bg-[#242424] mt-12 py-20 px-12 rounded-2xl shadow-xs shadow-[#242424]">
      {/* Stepper */}
      <div className="flex items-center justify-center gap-x-6">
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
            <div key={s.id} className="flex items-center gap-x-6">
              {/* Line before step */}
              {i !== 0 && (
                <div
                  className={`h-px w-16 ${step > s.id - 1 ? "bg-[hsl(0,0%,80%)]" : "bg-[hsl(0,0%,40%)]"
                    }`}
                />
              )}

              {/* Step icon and label */}
              <div
                className={`flex flex-col items-center gap-y-2 ${colorClass} transition-colors duration-300`}
                aria-current={isCurrent ? "step" : undefined}
              >
                <Icon className="w-6 h-6" />
                <p className="mt-2 text-sm font-medium">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-y-4 mt-16">
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
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-[hsl(0,0%,80%)] text-sm">Phone number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 555-5555"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
            />
          </div>
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
          <button
            onClick={nextStep}
            className="bg-[hsl(198,100%,40%)] text-[hsl(0,0%,92%)] mt-6 w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(198,100%,48%)]"
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col mt-16">
          <label htmlFor="date" className="text-[hsl(0,0%,80%)] text-sm">Date</label>
          <input
            type="date"
            id="date"
            placeholder="01/01/2025"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
          />
          <div className="mt-8 flex gap-x-2">
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
        <div className="flex flex-col mt-16">
          <label htmlFor="time" className="text-[hsl(0,0%,80%)] text-sm">Time</label>
          <input
            type="time"
            id="time"
            placeholder="1:45 PM"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
          />
          <div className="mt-8 flex gap-x-2">
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
        <div className="flex flex-col items-center mt-16">
          <FaCheckCircle className="text-[#00b4ff] h-16 w-16" />
          <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">Congratulations!</h2>
          <p className="mt-4 max-w-md text-center">You booked a consultation with Netflows. Set a reminder for your scheduled consultation so you don&apos;t miss it.</p>
          <Link
            href="/"
            className="bg-[hsl(198,100%,40%)] text-[hsl(0,0%,92%)] mt-8 w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(198,100%,48%)]"
          >
            Return home
          </Link>
        </div>
      )}
    </form>
  );
}