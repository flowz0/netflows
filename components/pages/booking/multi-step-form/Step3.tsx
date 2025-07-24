import { Step3Props } from "@/types/step.type";
import TimeInput from "./TimeInput";
import Button from "@/components/Button";

export default function Step3({ 
  formData, 
  handleChange, 
  error, 
  handleInputBlur, 
  prevStep, 
  nextStep 
}: Step3Props) {
  return (
    <div className="flex flex-col mt-16">
      <TimeInput
        formData={formData}
        handleChange={handleChange}
        error={error}
        handleInputBlur={handleInputBlur}
      />
      <div className="mt-12 flex gap-x-1">
        <Button
          text="Back"
          onClick={prevStep}
          className="w-fit"
          variant="secondary"
        />
        <Button
          text="Book Consultation"
          onClick={nextStep}
          className="w-fit sm:mt-0"
        />
      </div>
    </div>
  );
}