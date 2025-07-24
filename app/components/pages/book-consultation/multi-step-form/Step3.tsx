import { FormData } from "@/app/types/formData";
import TimeInput from "./TimeInput";
import ExpandingCircleButton from "@/app/components/ExpandingCircleButton";

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
    <div className="flex flex-col mt-16">
      <TimeInput
        formData={formData}
        handleChange={handleChange}
        error={error}
        handleInputBlur={handleInputBlur}
      />
      <div className="mt-12 flex gap-x-1">
        <ExpandingCircleButton
          text="Back"
          onClick={prevStep}
          className="w-fit"
          variant="secondary"
        />
        <ExpandingCircleButton
          text="Book Consultation"
          onClick={nextStep}
          className="w-fit sm:mt-0"
        />
      </div>
    </div>
  );
}