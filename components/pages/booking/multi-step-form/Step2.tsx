import { DatePicker } from "../date-picker/DatePicker";
import ExpandingCircleButton from "@/components/Button";
import { Step2Props } from "@/types/step.type";

export default function Step2({
  formData,
  prevStep,
  nextStep,
  error,
  onBtnBlur,
  onDateChange
}: Step2Props) {
  return (
    <div className="flex items-center flex-col mt-16">
      <DatePicker
        error={error?.date}
        onBlur={onBtnBlur}
        required
        defaultDate={formData.date}
        onSelectDate={onDateChange}
      />
      <div className="mt-12 flex md:flex-row gap-x-1">
        <ExpandingCircleButton
          text="Back"
          onClick={prevStep}
          className="w-fit"
          variant="secondary"
        />
        <ExpandingCircleButton
          text="Next"
          onClick={nextStep}
          className="w-fit sm:mt-0"
        />
      </div>
    </div>
  );
}