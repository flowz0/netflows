"use server";

import { FormProps } from "@/types/form.type";
import { sendEmail } from "../lib/sendgrid.lib";

export const sendConsultationFormAction = async (formData: FormProps) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      date,
      time
    } = formData;

    await sendEmail({
      to: "consult@netflows.xyz",
      templateName: "ConsultationForm",
      dynamicTemplateData: {
        firstName,
        lastName,
        email,
        phone,
        service,
        message,
        date,
        time
      }
    })
  } catch (error) {
    console.error(error);
    return { errorMessage: "Something went wrong" };
  }
}