import ProcessCard from "./ProcessCard";
import ProcessCTA from "./ProcessCTA";

export default function Process() {
  return (
    <section className="mt-64 max-w-7xl mx-auto">
      <div className="flex items-end">
        <h2 className="text-h2 font-bold font-nunito text-black w-4/6">
          Our Process
        </h2>
        <div className="w-5/6 border-b border-black50"></div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:gap-x-6 md:grid-cols-4">
        <ProcessCard
          step="01."
          title="Discovery"
          desc="Learn about your goals, audience, and vision to plan the design and development phases."
        />
        <ProcessCard
          step="02."
          title="Design"
          desc="Create a clean, user-friendly design that aligns with your brand's identity and goals."
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