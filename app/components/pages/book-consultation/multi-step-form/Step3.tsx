import { FormData } from "@/app/types/formData";

interface Step3Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prevStep: () => void;
  nextStep: () => void;
}

export default function Step3({ formData, handleChange, prevStep, nextStep }: Step3Props) {
  return (
    <div className="flex flex-col mt-8 sm:mt-12">
      <label htmlFor="time" className="text-[hsl(0,0%,80%)] text-sm">
        Consultation Time
      </label>
      <input
        type="time"
        id="time"
        placeholder="1:45 PM"
        value={formData.time}
        onChange={handleChange}
        className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
      />
      <div className="mt-4 flex gap-x-1">
        <button
          type="button"
          onClick={prevStep}
          className="bg-[hsl(0,0%,40%)] text-[hsl(0,0%,92%)] w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(0,0%,48%))]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-[hsl(198,100%,40%)] text-[hsl(0,0%,92%)] w-fit font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[hsl(198,100%,48%)]"
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
}