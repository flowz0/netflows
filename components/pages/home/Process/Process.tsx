import ProcessCard from "./ProcessCard";
import ProcessCTA from "./ProcessCTA";

export default function Process() {
  return (
    <section className="mt-64 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        <h2 className="text-h4 font-bold font-nunito text-black sm:text-h2 lg:w-4/6">
          Our Process
        </h2>
        <div className="mt-12 w-8/12 lg:w-5/6 border-b border-black50 self-end"></div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
        <ProcessCard
          step="01."
          title="Discovery"
          desc="Learn about your goals, audience, and vision to plan the design and development phases."
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