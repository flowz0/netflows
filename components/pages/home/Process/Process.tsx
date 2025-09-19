import ProcessCard from "./ProcessCard";
import ProcessCTA from "./ProcessCTA";

export default function Process() {
  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto md:mt-64">
      <div className="flex flex-col cursor-default lg:flex-row">
        <h2 className="text-h4 font-bold font-nunito text-black sm:text-h2 lg:w-4/6">
          Our Process
        </h2>
        <div className="mt-8 w-8/12 border-b border-black50 self-end md:mt-0 lg:w-5/6"></div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:mt-16 lg:grid-cols-4">
        <ProcessCard
          step="01."
          title="Discovery"
          desc="We start with a strategy call to learn about your business, ideal customers, and project goals. This ensures every decision aligns with your brand and drives measurable results."
        />
        <ProcessCard
          step="02."
          title="Design"
          desc="Our team creates a clean, responsive design tailored to your brand identity and user journey. We prioritize usability, accessibility, and modern aesthetics to engage visitors and guide them toward action."
        />
        <ProcessCard
          step="03."
          title="Development"
          desc="We develop your website using cutting-edge technologies focusing on performance, security, mobile responsiveness, and SEO best practices to improve search rankings and lead generation."
        />
        <ProcessCard
          step="04."
          title="Launch"
          desc="After rigorous testing and quality assurance, we launch your site and provide ongoing support. From maintenance to updates and analytics, we help you grow and adapt after launch."
        />
      </div>
      <ProcessCTA />
    </section>
  );
}