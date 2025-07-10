import { FormData } from "@/app/types/formData";
import TimeInput from "./TimeInput";

interface Step3Props {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: Partial<FormData>;
  prevStep: () => void;
  nextStep: () => void;
}

export default function Step3({ formData, handleChange, error, handleInputBlur, prevStep, nextStep }: Step3Props) {
  return (
    <div className="flex flex-col mt-8 sm:mt-12">
      <TimeInput
        formData={formData}
        handleChange={handleChange}
        error={error}
        handleInputBlur={handleInputBlur}
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