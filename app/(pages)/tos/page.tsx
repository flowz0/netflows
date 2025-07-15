import { Metadata } from "next";
import AnimatedLink from "@/app/components/AnimatedLink";
import CopyEmailBtn from "@/app/components/CopyEmailBtn";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TOSPage() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto lg:pb-32">
      <header>
        <h1 className="text-[#f5f5f5] text-4xl/[2.6rem] font-semibold md:text-5xl/[3.4rem]">
          Terms of Service
        </h1>
        <h4 className="text-[#f5f5f5] text-base/[1.8rem] font-semibold mt-8 md:text-lg/[2rem]">
          Last Updated: July 13, 2025
        </h4>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          Welcome to Netflows, a California-based web development and design agency. By accessing or using our website, booking services, or entering into a service agreement, you agree to be bound by these Terms of Service.
        </p>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          If you do not agree with any part of these Terms, please refrain from using our services.
        </p>
      </header>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          1. Introduction
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          These Terms of Service (&quot;Terms&quot;) govern the use of all services provided by <span className="text-[#f5f5f5] font-semibold">Netflows</span>, including website development, web design, consultations, demo calls, and related offerings. These Terms form a binding agreement between <span className="text-[#f5f5f5] font-semibold">you</span> <span className="text-[#f5f5f5] font-semibold">(&quot;Client&quot;)</span> and <span className="text-[#f5f5f5] font-semibold">Netflows</span> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          2. Scope of Services
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          Netflows offers the following services:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Website development using industry-standard SDLC practices</li>
          <li>Web design and UI/UX customization</li>
          <li>Consultations and demo calls to explore how we can help your business</li>
          <li>Stripe invoicing and automatic follow-up via SendGrid</li>
          <li>Custom booking via our website</li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          All services will be detailed and confirmed through written agreement (contract or invoice).
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          3. Client Responsibilities
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          To ensure successful delivery of services, clients must:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Provide accurate and complete information via the booking form</li>
          <li>Attend scheduled demo calls or cancel with reasonable notice</li>
          <li>Respond in a timely manner to requests for feedback or content</li>
          <li>Make payments on time as outlined in the invoice</li>
          <li>Review and approve deliverables within agreed timelines</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          4. Payment Terms
        </h2>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>All payments are processed through Stripe and are due according to the project invoice schedule.</li>
          <li>A 50% deposit may be required to start the project unless otherwise stated.</li>
          <li>Final payment is due upon project completion and prior to final delivery.</li>
          <li>Late payments may incur interest or project delays.</li>
          <li>No refunds are provided once the work has started or been delivered unless otherwise agreed in writing.</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          5. Ownership & Licensing
        </h2>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Netflows retains ownership of all code, designs, and materials until full payment is received.</li>
          <li>Once the project is completed and the final payment has been made, <span className="text-[#f5f5f5] font-semibold">the client owns 100% of the code and deliverables</span>.</li>
          <li>We reserve the right to display work in our portfolio unless an NDA is signed.</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          6. Intellectual Property
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          All Netflows branding, proprietary frameworks, and any reusable code libraries remain the intellectual property of Netflows and may not be used or resold without written consent.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          7. Confidentiality
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          Both parties agree to maintain the confidentiality of all non-public information disclosed during the project, including business practices, login credentials, client data, and proprietary strategies.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          8. Limitation of Liability
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          Netflows will not be liable for any indirect, incidental, or consequential damages, including lost profits, data loss, or third-party service interruptions (e.g., hosting or email failures).
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          9. Termination Policy
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          Clients may terminate their contract only in cases of <span className="text-[#f5f5f5] font-semibold">breach of agreement</span> by Netflows or <span className="text-[#f5f5f5] font-semibold">mutual written consent</span>. Netflows reserves the right to terminate the agreement if the client:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Fails to make a required payment within 5 business days</li>
          <li>Violates any part of these Terms</li>
          <li>Engages in abusive or unethical conduct</li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          All work completed up to the termination date will be invoiced and payable. Any deposit is non-refundable unless otherwise stated.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          10. Dispute Resolution & Governing Law
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          These Terms are governed by the laws of the <span className="text-[#f5f5f5] font-semibold">State of California, USA</span>. Any disputes will first attempt resolution through mediation. If unresolved, disputes will be settled in the courts of California, in the county where Netflows operates.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          11. Changes to Terms
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We reserve the right to update these Terms at any time. The latest version will always be posted on our website. Continued use of our services after changes implies acceptance of the updated Terms.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          12. Contact
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          For any questions or concerns about these Terms, please contact us at:
        </p>
        <CopyEmailBtn />
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-2">
          We typically respond within 24 - 48 hours.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          13. Cookies & Tracking
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          As of now, Netflows <span className="text-[#f5f5f5] font-semibold">does not use cookies or tracking tools</span> on its website. However, we may implement cookies in the future to improve user experience, analytics, or marketing purposes. If we do:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Users will be notified via a cookie banner</li>
          <li>Cookies will be used for session storage, website performance, or analytics only</li>
          <li>No third-party tracking or advertising cookies are in use at this time</li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          Users may choose to disable cookies through their browser settings.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          14. Entire Agreement
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          These Terms, together with our <AnimatedLink href="/privacy" className="text-[#f5f5f5] font-semibold">Privacy Policy</AnimatedLink>, constitute the entire agreement between Netflows and the client. No other agreements, representations, or warranties will be binding unless made in writing and signed by both parties.
        </p>
      </section>
    </main>
  );
}