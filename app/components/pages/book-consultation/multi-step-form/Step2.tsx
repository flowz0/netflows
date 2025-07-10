import { FormData } from "@/app/types/formData";
import { DatePicker } from "../date-picker/DatePicker";

interface Step2Props {
  formData: FormData;
  prevStep: () => void;
  nextStep: () => void;
  onBtnBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  error?: Partial<FormData>;
  onDateChange: (date: Date) => void;
}

export default function Step2({ formData, prevStep, nextStep, error, onBtnBlur, onDateChange }: Step2Props) {
  return (
    <div className="flex items-center flex-col mt-8 sm:mt-12">
      <DatePicker
        error={error?.date}
        onBlur={onBtnBlur}
        required
        defaultDate={formData.date}
        onSelectDate={onDateChange}
      />
      <div className="mt-12 flex gap-x-1">
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
          Next
        </button>
      </div>
    </div>
  );
}