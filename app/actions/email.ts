"use server";

import { sendEmail } from "../lib/sendgrid";
import { FormData } from "../types/formData";

export const sendConsultationFormAction = async (formData: FormData) => {
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