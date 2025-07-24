"use client";

import { useRef, useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { FaUser, FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import Step1 from "./Step1";
import { FormData } from "@/app/types/formData";
import { format } from "date-fns";
import { sendConsultationFormAction } from "@/app/actions/email";

const steps = [
  { id: 1, label: "Info", icon: FaUser },
  { id: 2, label: "Date", icon: FaCalendarAlt },
  { id: 3, label: "Time", icon: FaClock },
  { id: 4, label: "Booked", icon: FaCheckCircle },
];

export default function MultiStepForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  type FieldValue = string;

  const validateField = (
    name: keyof FormData,
    value: FieldValue
  ): string => {
    if (typeof value !== "string") return "";
    if (name === "firstName" && !value.trim()) {
      return "First name is required.";
    } else if (name === "firstName" && value.length < 3) {
      return "First name must be more than 3 characters."
    }
    if (name === "lastName" && !value.trim()) {
      return "Last name is required.";
    } else if (name === "lastName" && value.length < 3) {
      return "Last name must be more than 3 characters.";
    }
    if (name === "email") {
      if (!value.trim()) {
        return "Email is required.";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Email is not valid.";
        }
      }
    }
    if (name === "phone" && !value.trim()) {
      return "Phone number is required";
    } else if (name === "phone" && value.length < 14) {
      return "Phone number is not valid.";
    }
    if (name === "service" && !value.trim()) {
      return "Service is required.";
    }
    if (name === "message" && !value.trim()) {
      return "Message is required.";
    }

    if (name === "date" && !value.trim()) {
      return "Date is required.";
    }
    if (name === "time" && !value.trim()) {
      return "Time is required.";
    }
    return "";
  };

  const onBtnBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleTextareaBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const handleDateChange = (selectedDate: Date) => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    setFormData((prev) => ({ ...prev, date: formattedDate }));
    // Remove error if valid date
    const error = validateField("date", formattedDate);
    setErrors((prev) => ({
      ...prev,
      date: error || undefined,
    }));
  };

  const scrollToFormTop = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      scrollToFormTop();
    }
  };

  const validateStep1 = () => {
    const requiredFields: (keyof FormData)[] = [
      "firstName", "lastName", "email", "phone", "service", "message",
    ];
    const newErrors: Partial<FormData> = {};
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const error = validateField("date", formData.date);
    setErrors((prev) => ({ ...prev, date: error }));
    return !error;
  };

  const validateStep3 = () => {
    const error = validateField("time", formData.time);
    setErrors((prev) => ({ ...prev, time: error }));
    return !error;
  };

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) isValid = validateStep1();
    else if (step === 2) isValid = validateStep2();
    else if (step === 3) isValid = validateStep3();
    if (!isValid) return;
    if (step === 3) {
      await sendConsultationFormAction(formData);
    }
    setStep((prev) => prev + 1);
    scrollToFormTop();
  };

  return (
    <form ref={formRef} className="border-1 border-black75 bg-black5 mt-28 py-12 px-6 rounded-2xl drop-shadow-[0_25px_80px_rgb(146,75,247)] sm:py-20 sm:px-12">
      {/* Stepper */}
      <div className="flex items-center justify-center gap-x-2 sm:gap-x-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isCurrent = step === s.id;
          const isCompleted = step > s.id;
          const colorClass = isCurrent
            ? "text-primary"
            : isCompleted
              ? "text-black50"
              : "text-black25";
          return (
            <div key={s.id} className="flex items-center gap-x-2 sm:gap-x-6">
              {i !== 0 && (
                <div
                  className={`h-px w-6 sm:w-16 ${step > s.id - 1 ? "bg-black75" : "bg-black25"}`}
                />
              )}
              {/* Step icon and label */}
              <div
                className={`flex flex-col items-center gap-y-2 ${colorClass} transition-colors duration-300`}
                aria-current={isCurrent ? "step" : undefined}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                <p className={`hidden mt-2 text-small font-inter sm:block ${step === s.id ? "text-primary" : step > s.id - 1 ? "text-black50" : "text-black25"}`}>
                  {s.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {step === 1 &&
        <Step1
          handleChange={handleChange}
          onInputBlur={handleInputBlur}
          onTextareaBlur={handleTextareaBlur}
          formData={formData}
          nextStep={nextStep}
          error={errors}
        />
      }

      {step === 2 &&
        <Step2
          formData={formData}
          prevStep={prevStep}
          nextStep={nextStep}
          onBtnBlur={onBtnBlur}
          error={errors}
          onDateChange={handleDateChange}
        />
      }

      {step === 3 &&
        <Step3
          handleChange={handleChange}
          formData={formData}
          handleInputBlur={handleInputBlur}
          error={errors}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      }

      {step === 4 &&
        <Step4
          firstName={formData.firstName}
          time={formData.time}
          date={formData.date}
          service={formData.service}
        />
      }
    </form>
  );
}