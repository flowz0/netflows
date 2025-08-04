import { Metadata } from "next";
import MultiStepForm from "@/components/pages/booking/multi-step-form/MultiStepForm";
import FAQs from "@/components/pages/home/FAQ/FAQs";

export const metadata: Metadata = {
  title: "Book Free Consultation - Web Development & Design"
}

export default function BookConsultationPage() {
  return (
    <>
      <main className="mt-16 px-6 max-w-7xl mx-auto lg:mt-32">
        <header className="flex flex-col items-center cursor-default">
          <h1 className="text-black text-h4 font-bold font-nunito text-center md:text-h1">
            Schedule Your
            <br />
            Free <span className="text-primary">Discovery</span> Call
          </h1>
          <p className="mt-4 text-p font-inter text-center max-w-xl text-black75">
            Let&apos;s explore your vision, define your goals, and lay the groundwork for a custom web solution that drives results.
          </p>
        </header>
        <div className="max-w-3xl mx-auto">
          <MultiStepForm />
        </div>
      </main>
      <FAQs />
    </>
  );
}