import { FormData } from "@/app/types/formData";
import PhoneNumber from "./PhoneNumber";
import Select from "./Select";
import { useState } from "react";

interface Step2Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
}

export default function Step1({formData, setFormData, nextStep}: Step2Props) {
  const [selectedService, setSelectedService] = useState("");
  
  return (
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
              { value: "web development", label: "Web Development" },
              { value: "web design", label: "Web Design" },
              { value: "maintenance & support", label: "Maintenance & Support" },
              { value: "web hosting", label: "Web Hosting" },
              { value: "domain name", label: "Domain Name" },
              { value: "SEO optimization", label: "SEO Optimization" },
              { value: "performance optimization", label: "Performance Optimization" },
              { value: "additional pages", label: "Additional Pages" },
              { value: "3rd party api integration", label: "3rd Party API Integration" },
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
  );
}