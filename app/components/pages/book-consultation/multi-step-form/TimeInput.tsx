import { FormData } from "@/app/types/formData";
import Select from "./Select";

interface TimeInputProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TimeInput({ formData, handleChange }: TimeInputProps) {
  return (
    <div className="flex flex-col">
      <Select
        label="Select time"
        selected={formData.time}
        onChange={(value: string) => {
          const syntheticEvent = {
            target: {
              name: "time",
              value: value,
            },
          } as React.ChangeEvent<HTMLInputElement>;

          handleChange(syntheticEvent);
        }}
        // onBlur={onInputBlur}
        // error={error?.time}
        required
        options={[
          { value: "", label: "Choose a time (Pacific Standard Timezone)" },
          { value: "8:00 AM", label: "8:00 AM" },
          { value: "8:30 AM", label: "8:30 AM" },
          { value: "9:00 AM", label: "9:00 AM" },
          { value: "9:30 AM", label: "9:30 AM" },
          { value: "10:00 AM", label: "10:00 AM" },
          { value: "10:30 AM", label: "10:30 AM" },
          { value: "11:00 AM", label: "11:00 AM" },
          { value: "11:30 AM", label: "11:30 AM" },
          { value: "12:00 PM", label: "12:00 PM" },
          { value: "12:30 PM", label: "12:30 PM" },
          { value: "1:00 PM", label: "1:00 PM" },
          { value: "1:30 PM", label: "1:30 PM" },
          { value: "2:00 PM", label: "2:00 PM" },
          { value: "2:30 PM", label: "2:30 PM" },
          { value: "3:00 PM", label: "3:00 PM" },
          { value: "3:30 PM", label: "3:30 PM" },
          { value: "4:00 PM", label: "4:00 PM" },
          { value: "4:30 PM", label: "4:30 PM" },
        ]}
      />
    </div>
  );
}