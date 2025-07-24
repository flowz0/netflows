import ServiceSection from "@/components/pages/services/ServiceSection";

import WebDevelopmentImg from "@/public/service/development.svg";
import UIUXDesignImg from "@/public/service/ui-ux.svg";
import MaintenanceImg from "@/public/service/maintenance.svg";

export default function Page() {
  return (
    <main className="mt-16 px-6 max-w-7xl mx-auto cursor-default lg:mt-24">
      <div className="flex flex-col">
        <h1 className="text-black text-h3 font-bold font-nunito sm:text-h1">
          Services That We Offer
        </h1>
        <p className="mt-4 max-w-4xl text-p font-inter text-black75">
          We offer services that can help businesses improve their visibility and business reputation online, expand market reach, and increase turnover through effective digital strategies.
        </p>
      </div>
      <div className="mt-32 flex flex-col gap-y-16">
        <ServiceSection
          header="Web Development"
          desc="We build performant, scalable, and accessible web solutions."
          img={WebDevelopmentImg}
          flip
        />
        <ServiceSection
          header="UI/UX Design"
          desc="UI/UX design pixel-perfect digital experiences for a great user experience."
          img={UIUXDesignImg}
        />
        <ServiceSection
          header="Maintenance"
          desc="We provide ongoing support and maintenance so you don't have to worry."
          img={MaintenanceImg}
          flip
        />
      </div>
    </main>
  );
}