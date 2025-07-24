import sgMail, { MailDataRequired } from "@sendgrid/mail";

interface sendEmailProps {
  to: string;
  templateName: "ConsultationForm" /* | "other-tempalte" */;
  dynamicTemplateData?: Record<string, string>;
}

export const sendEmail = async ({
  to,
  templateName,
  dynamicTemplateData
}: sendEmailProps) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg: MailDataRequired = {
    to,
    from: {
      email: "consult@netflows.xyz",
      name: "Netflows"
    },
    templateId: templates[templateName],
    dynamicTemplateData
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

const templates = {
  ConsultationForm: "d-93eaee9591474cd9a651051be6463ac7",
}