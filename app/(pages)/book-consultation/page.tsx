import MultiStepForm from "@/app/components/pages/multi-step-form/MultiStepForm";

export default function BookConsultationPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto">
      <header className="flex flex-col items-center">
        <h1 className="text-[#f5f5f5] text-4xl/[2.6rem] font-semibold text-center md:text-5xl/[3.4rem]">
          Schedule Your
          <br />
          Free <span className="text-[#00b4ff] font-bold">Discovery</span> Call
        </h1>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4 max-w-lg text-center lg:mx-0 md:text-lg/[2rem]">
          Let&apos;s explore your vision, define your goals, and lay the groundwork for a custom web solution that drives results.
        </p>
      </header>
      <div className="max-w-2xl mx-auto">
        <MultiStepForm />
      </div>
    </main>
  );
}