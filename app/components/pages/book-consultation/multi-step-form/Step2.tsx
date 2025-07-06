import { FormData } from "@/app/types/formData";
import { DatePicker } from "../date-picker/DatePicker";
import { format } from "date-fns";

interface Step2Props {
  formData: FormData;
  date: string;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  prevStep: () => void;
  nextStep: () => void;
}

export default function Step2({ formData, date, setFormData, prevStep, nextStep }: Step2Props) {
  return (
    <div className="flex items-center flex-col mt-8 sm:mt-12">
      <DatePicker
        defaultDate={date}
        onSelectDate={(selectedDate: Date) =>
          setFormData({
            ...formData,
            date: format(selectedDate, "yyyy-MM-dd")
          })
        }
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
  );
}