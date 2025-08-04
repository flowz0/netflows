import ProcessCard from "./ProcessCard";
import ProcessCTA from "./ProcessCTA";

export default function Process() {
  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto md:mt-64">
      <div className="flex flex-col lg:flex-row">
        <h2 className="text-h4 font-bold font-nunito text-black sm:text-h2 lg:w-4/6">
          Our Process
        </h2>
        <div className="mt-8 w-8/12 border-b border-black50 self-end md:mt-0 lg:w-5/6"></div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:mt-16 lg:grid-cols-4">
        <ProcessCard
          step="01."
          title="Discovery"
          desc="We learn about your goals, audience, and vision to plan for the next phases."
        />
        <ProcessCard
          step="02."
          title="Design"
          desc="A clean, user-friendly design that aligns with your brand's identity and goals."
        />
        <ProcessCard
          step="03."
          title="Development"
          desc="Responsive, fast, and secure web solutions built with modern technologies."
        />
        <ProcessCard
          step="04."
          title="Launch"
          desc="After quality assaurance, we launch your solution and offer ongoing support."
        />
      </div>
      <ProcessCTA />
    </section>
  );
}