import ServiceSection from "@/components/pages/services/ServiceSection";

import WebDesignImg from "@/public/service/web-design.svg";
import WebDevelopmentImg from "@/public/service/web-development.svg";
import ThirdPartyAPIImg from "@/public/service/api2.svg";
import FullyManagedHostingImg from "@/public/service/fully-managed-hosting.svg";
import DomainManagementImg from "@/public/service/domain-management.svg";
import MaintenanceSupportImg from "@/public/service/maintenance-support.svg";
import Process from "@/components/pages/home/Process/Process";
import Link from "next/link";
import Button from "@/components/Button";

export default function Page() {
  return (
    <>
      <main className="mt-8 px-6 max-w-7xl mx-auto cursor-default md:mt-16">
        <div className="flex flex-col items-center">
          <h1 className="text-black text-h3 font-bold font-nunito text-center sm:text-h1">
            Services {" "}
            <br className="sm:hidden" />
            We Provide
          </h1>
          <p className="mt-4 max-w-2xl text-p font-inter text-center text-black75">
            We offer services that can help businesses improve their visibility, business reputation online, expand market reach, and increase turnover through effective digital strategies.
          </p>
          <Link href="/booking">
            <Button variant="gradient" text="Book a Free 15-Min Strategy Call Today" className="mt-8" />
          </Link>
        </div>
        <div className="mt-32 flex flex-col gap-y-16 md:gap-y-24">
          <ServiceSection
            header="Web Design & Development"
            desc="We create custom websites that are responsive and mobile-friendly. Each site is designed with a clear user experience in mind and built using modern web standards. We ensure fast load times, strong SEO foundations, and accessibility for all users. Your website will be built to reflect your brand and support your long-term growth."
            buttonLabel="Start My Web Project"
            img={WebDesignImg}
            flip
          />
          <ServiceSection
            header="Custom Web Applications"
            desc="We build secure and scalable web applications tailored to your business needs. Whether you're launching a dashboard, portal, or SaaS platform, we use modern technologies and best practices to deliver reliable performance. Every app is designed with a user-first approach to ensure a seamless experience across all devices."
            buttonLabel="Design My Experience"
            img={WebDevelopmentImg}
          />
          <ServiceSection
            header="3rd-Party API Integrations"
            desc="We connect trusted third-party services like Stripe, Twilio, Calendly, and more. These integrations help automate key workflows, streamline operations, and enhance the functionality of your platform. Whether you need payment processing, email automation, or booking tools. We make the integration seamless and reliable."
            buttonLabel="Keep My Site Running"
            img={ThirdPartyAPIImg}
            flip
          />
          <ServiceSection
            header="Fully-Managed Hosting"
            desc="We host both websites and full-stack applications on secure, high-performance cloud infrastructure. Our fully managed hosting includes automatic deployments, global CDN, SSL encryption, and uptime monitoring. Whether it's a marketing site or a custom web app, your platform stays fast, secure, and always online."
            buttonLabel="Keep My Site Running"
            img={FullyManagedHostingImg}
          />
          <ServiceSection
            header="Domain Management"
            desc="We take care of everything related to your domain so you don't have to. This includes domain registration, DNS configuration, SSL certificate setup, and privacy protection. Your domain will be fully secured, properly configured, and ready to launch from day one without any confusion or delays."
            buttonLabel="Keep My Site Running"
            img={DomainManagementImg}
            flip
          />
          <ServiceSection
            header="Web Maintenance & Support"
            desc="We provide ongoing maintenance and support for both websites and full-stack applications. Our service includes regular updates, automated backups, security monitoring, performance checks, and analytics reporting. Whether you're running a simple site or a complex app, we keep everything running smoothly so you can focus on growing your business."
            buttonLabel="Maintenance & Support"
            img={MaintenanceSupportImg}
          />
        </div>
      </main>
      <Process />
    </>
  );
}