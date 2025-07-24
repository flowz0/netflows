import { FormProps } from "@/types/form.type";

export interface Step1Props {
  formData: FormProps;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onInputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onTextareaBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: Partial<FormProps>;
  nextStep: () => void;
}

export interface Step2Props {
  formData: FormProps;
  prevStep: () => void;
  nextStep: () => void;
  onBtnBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  error?: Partial<FormProps>;
  onDateChange: (date: Date) => void;
}

export interface Step3Props {
  formData: FormProps;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: Partial<FormProps>;
  prevStep: () => void;
  nextStep: () => void;
}

export interface Step4Props {
  firstName: string;
  time: string;
  date: string;
  service: string;
}