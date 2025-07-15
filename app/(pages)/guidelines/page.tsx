import { Metadata } from "next";
import AnimatedLink from "@/app/components/AnimatedLink";
import CopyEmailBtn from "@/app/components/CopyEmailBtn";

export const metadata: Metadata = {
  title: "Client Service Guidelines",
};

export default function GuidelinesPage() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto lg:pb-32">
      <header>
        <h1 className="text-[#f5f5f5] text-4xl/[2.6rem] font-semibold md:text-5xl/[3.4rem]">
          Client Service Guidelines
        </h1>
        <h4 className="text-[#f5f5f5] text-base/[1.8rem] font-semibold mt-8 md:text-lg/[2rem]">
          Last Updated: May 29, 2025
        </h4>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          At Netflows, we believe that transparency, mutual respect, and clear communication create the best outcomes. These Client Guidelines explain how we work, how you can get the most value from our partnership, and what you can expect at each step.
        </p>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          These guidelines complement our <AnimatedLink href="/privacy" className="text-[#f5f5f5] font-semibold">Privacy Policy</AnimatedLink> and <AnimatedLink href="/tos" className="text-[#f5f5f5] font-semibold">Terms of Service</AnimatedLink>.
        </p>
      </header>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          1. Our Process
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We follow a structured <span className="text-[#f5f5f5] font-semibold">Software Development Life Cycle (SDLC)</span> approach for each project:
        </p>
        <ol className="list-decimal text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li><span className="text-[#f5f5f5] font-semibold">Discovery & Consultation:</span> Free demo call to understand your goals</li>
          <li><span className="text-[#f5f5f5] font-semibold">Proposal & Contract:</span> We&apos;ll outline the scope, cost, and timeline</li>
          <li><span className="text-[#f5f5f5] font-semibold">Design Phase:</span> UI/UX mockups and branding (if needed)</li>
          <li><span className="text-[#f5f5f5] font-semibold">Development Phase:</span> Front-end and back-end implementation</li>
          <li><span className="text-[#f5f5f5] font-semibold">Testing & Feedback:</span> We test and refine together</li>
          <li><span className="text-[#f5f5f5] font-semibold">Launch & Handover:</span> You own 100% of the code once final payment is made</li>
          <li><span className="text-[#f5f5f5] font-semibold">Optional Support:</span> We offer post-launch maintenance if agreed upon</li>
        </ol>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          2. Communication Expectations
        </h2>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Please use <span className="text-[#f5f5f5] font-semibold">email or the assigned project chat (e.g., Slack or Notion)</span> for updates</li>
          <li>We aim to respond within <span className="text-[#f5f5f5] font-semibold">24 - 48 business hours</span></li>
          <li>We kindly ask that you <span className="text-[#f5f5f5] font-semibold">reply within 3 - 5 business days</span> to avoid delays</li>
          <li>Calls can be scheduled via our custom booking system when needed</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          3. Design Revisions
        </h2>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Most projects include <span className="text-[#f5f5f5] font-semibold">up to 2 free design revisions per page/feature</span></li>
          <li>Additional revisions are billable unless otherwise stated</li>
          <li>Please consolidate feedback clearly to avoid fragmented revision cycles</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          4. Project Timelines
        </h2>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Timelines are estimated based on scope of project, your responsiveness, and our workload</li>
          <li>Delays caused by late feedback, asset delivery, or payments may shift deadlines</li>
          <li>We will always communicate major timeline changes in advance</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          5. Client Deliverables
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          To begin development, you may be asked to provide:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Logos, brand guidelines, or design inspirations</li>
          <li>Product/service descriptions, images, or text content</li>
          <li>Login credentials (if integrating into existing systems)</li>
          <li>Timely feedback and approval for deliverables</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          6. Scope Changes
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          If your needs shift during the project:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>We&apos;re happy to adapt, but major changes may require a new quote</li>
          <li>Scope additions will be documented and approved before implementation</li>
          <li>Minor tweaks are usually included within reason</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          7. Ownership & Access
        </h2>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>You receive <span className="text-[#f5f5f5] font-semibold">100% ownership of the code</span> and site upon final payment</li>
          <li>We may retain backups unless requested otherwise</li>
          <li>If hosting is handled by us, credentials will be shared post-payment</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          8. Invoicing & Payments
        </h2>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>All payments are securely processed via <span className="text-[#f5f5f5] font-semibold">Stripe</span></li>
          <li>A deposit may be required before work begins</li>
          <li>Final deliverables are released after full payment</li>
          <li>Payment delays may pause project progress</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          9. Post-Launch Support (Optional)
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We offer continued support to help your business grow even after your project is complete. Services may include:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Maintenance and security updates</li>
          <li>Fully managed hosting for website or application</li>
          <li>Feature additions and performance tuning</li>
          <li>SEO and analytics enhancements</li>
          <li><span className="text-[#f5f5f5] font-semibold">Lead generation through search optimization and improving online reviews</span></li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          These services can be offered as a monthly retainer or one-time engagement depending on your needs.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          10. Respect & Collaboration
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We value mutual respect and collaboration. We do our best to create an enjoyable, productive process and we ask the same from our clients. Inappropriate behavior or unprofessional conduct may result in service termination (see our <AnimatedLink href="/tos" className="text-[#f5f5f5] font-semibold">Terms of Service</AnimatedLink> for more info).
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          11. Questions or Concerns?
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          Email us anytime at:
        </p>
        <CopyEmailBtn />
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-2">
          We typically reply within 24 - 48 business hours.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          12. Pricing Structure & Payment Options
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We offer flexible pricing to match the needs of businesses at different stages:
        </p>
        <h3 className="text-[#f5f5f5] mt-4 text-lg/[2.6rem] font-semibold md:text-xl/[3.4rem]">
          📌 Set Pricing
        </h3>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col pl-5">
          <li>Flat-fee project pricing based on scope</li>
          <li>Includes a defined number of revisions, features, and pages</li>
        </ul>
        <h3 className="text-[#f5f5f5] mt-4 text-lg/[2.6rem] font-semibold md:text-xl/[3.4rem]">
          💳 Subscription / Retainer
        </h3>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col pl-5">
          <li>Monthly subscription for ongoing support, updates, SEO, or content revisions</li>
          <li>Cancelable with 14-day notice (unless otherwise specified in the contract)</li>
        </ul>
        <h3 className="text-[#f5f5f5] mt-4 text-lg/[2.6rem] font-semibold md:text-xl/[3.4rem]">
          ⚙️ Per Page / Feature-Based
        </h3>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col pl-5">
          <li>Pricing for additional pages or features beyond the initial scope</li>
          <li>Quoted and approved before development begins</li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          <span className="text-[#f5f5f5] font-semibold">Note:</span> All pricing terms and deliverables will be clearly outlined in the project contract. No work begins until the deposit or first payment is received.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          <span className="text-[#f5f5f5] font-semibold">Q: Are these guidelines legally binding?</span>
        </p>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-2">
          No, but they clarify how we work and reduce misunderstandings. Binding terms are in our <AnimatedLink href="/privacy" className="text-[#f5f5f5] font-semibold">Terms of Service</AnimatedLink>.
        </p>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
        <span className="text-[#f5f5f5] font-semibold">Q: Do I need to sign anything?</span>
        </p>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-2">
          Yes. All projects start with a written agreement and invoice.
        </p>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
        <span className="text-[#f5f5f5] font-semibold">Q: Can these guidelines change?</span>
        </p>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-2">
          Yes. Minor updates may be made as our business evolves. Major changes will be communicated clearly.
        </p>
      </section>
      <section className="mt-12">
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          These guidelines help ensure a smooth collaboration. By working together with clarity and structure, we can create something truly powerful for your business.
        </p>
      </section>
    </main>
  );
}