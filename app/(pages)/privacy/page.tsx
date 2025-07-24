import { Metadata } from "next";
import CopyEmailBtn from "@/app/components/CopyEmailBtn";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mt-16 px-6 max-w-7xl mx-auto lg:mt-24">
      <header>
        <h1 className="text-black text-h4 sm:text-h3 font-bold font-nunito md:text-h1">
          Privacy Policy
        </h1>
        <p className="text-black75 text-p font-inter mt-8">
          At Netflows, your privacy is important to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website or book services with us.
        </p>
        <p className="text-black50 text-small font-inter mt-6">
          Last Updated: May 27, 2025
        </p>
      </header>
      <section className="mt-24">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          1. Information We Collect
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          When you fill out a booking form on our website, we collect the following information:
        </p>
        <ul className="list-disc text-black75 text-p font-inter flex flex-col gap-y-2 mt-4 pl-5">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Booking Details (Date, Time, Zoom Link, Selected Service)</li>
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          2. How We Collect Your Information
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          We collect this information directly through our custom booking/calendar service integrated on our website. This is the only method by which we gather your personal information.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          3. How We Use Your Information
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          We use your personal information to:
        </p>
        <ul className="list-disc text-black75 text-p font-inter flex flex-col gap-y-2 mt-4 pl-5">
          <li>Schedule and follow up on demo calls</li>
          <li>Send automatic follow-up emails after your booking and demo session</li>
          <li>Respond to your inquiries or service-related needs</li>
          <li>Update you on how we can help grow your business</li>
          <li>Support communication between you and our web development team</li>
          <li>Facilitate invoicing and payments via Stripe</li>
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          4. How We Share Your Information
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          We only share your information with trusted third-party services essential to our operations:
        </p>
        <ul className="list-disc text-black75 text-p font-inter flex flex-col gap-y-2 mt-4 pl-5">
          <li><span className="font-semibold">SendGrid</span> to send emails to you and our internal team</li>
          <li><span className="font-semibold">Stripe</span> for secure invoicing and payment processing</li>
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          5. Data Security
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          We take data security seriously. Your information is protected using:
        </p>
        <ul className="list-disc text-black75 text-p font-inter flex flex-col gap-y-2 mt-4 pl-5">
          <li><span className="font-semibold">SSL encryption</span> for secure transmission</li>
          <li><span className="font-semibold">Secure servers</span></li>
          <li><span className="font-semibold">Access restrictions</span> so only authorized team members can view data</li>
          <li><span className="font-semibold">MongoDB</span> as our secure data storage solution</li>
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          6. Your Rights Under the California Consumer Privacy Act (CCPA)
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          If you are a California resident, you have the following rights under the CCPA:
        </p>
        <ul className="list-disc text-black75 text-p font-inter flex flex-col gap-y-2 mt-4 pl-5">
          <li><span className="font-semibold">Right to Know:</span> You can request details on the personal information we collect, use, and share.</li>
          <li><span className="font-semibold">Right to Delete:</span> You may request the deletion of your personal information, subject to legal and contractual obligations.</li>
          <li><span className="font-semibold">Right to Opt-Out:</span> You can opt-out of any future sale of your personal data (Note: Netflows does not sell personal data).</li>
          <li><span className="font-semibold">Right to Non-Discrimination:</span> Exercising your CCPA rights will not result in any discriminatory treatment.</li>
        </ul>
        <p className="text-black75 text-small font-inter mt-6">
          To exercise these rights, email us at <span className="font-semibold">contact@netflows.xyz</span> with the subject line <span className="font-semibold">&quot;CCPA Request&quot;</span> and allow up to 30 days for a response.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          7. International Data Compliance (GDPR, PIPEDA, etc.)
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          While Netflows is based in California, USA, we may work with or serve clients from regions outside the United States. When applicable, we aim to comply with other data protection laws such as:
        </p>
        <ul className="list-disc text-black75 text-p font-inter flex flex-col gap-y-2 mt-4 pl-5">
          <li>The <span className="font-semibold">General Data Protection Regulation (GDPR)</span> for users in the European Union and United Kingdom</li>
          The <li><span className="font-semibold">Personal Information Protection and Electronic Documents Act (PIPEDA)</span> for users in Canada</li>
          <li><span className="font-semibold">Right to Opt-Out:</span> You can opt-out of any future sale of your personal data (Note: Netflows does not sell personal data).</li>
          <li><span className="font-semibold">Right to Non-Discrimination:</span> Exercising your CCPA rights will not result in any discriminatory treatment.</li>
        </ul>
        <p className="text-black75 text-p font-inter mt-8">
          If you are located in one of these regions, you may have the right to:
        </p>
        <ul className="list-disc text-black75 text-p font-inter flex flex-col gap-y-2 mt-4 pl-5">
          <li>Request access to or correction of your data</li>
          <li>Request deletion or restriction of processing</li>
          <li>Object to certain types of data use</li>
          <li>Request data portability</li>
        </ul>
        <p className="text-black75 text-small font-inter mt-6">
          You may contact us at <span className="font-semibold">contact@netflows.xyz</span> with the subject line <span className="font-semibold">&quot;International Privacy Request&quot;</span> to exercise your rights under applicable data laws.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          8. Data Retention
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          We retain your personal data for 1 year to ensure your project is completed and supported. If the project extends beyond that period, data retention terms will be covered in your service contract.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          9. Cookies & Tracking Technologies
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          Currently, Netflows does <span className="font-semibold">not use cookies or tracking technologies</span> on this website.
        </p>
        <p className="text-black75 text-p font-inter mt-8">
          In the future, we may use cookies for purposes such as:
        </p>
        <ul className="list-disc text-black75 text-p font-inter flex flex-col gap-y-2 mt-4 pl-5">
          <li>Remembering form inputs or preferences</li>
          <li>Improving site performance and usability</li>
          <li>Analytics to better understand our audience</li>
          <li>Targeted communications or marketing (if applicable)</li>
        </ul>
        <p className="text-black75 text-small font-inter mt-6">
          If and when these tools are implemented, we will provide a clear <span className="font-semibold">cookie notice and opt-in/opt-out options</span> in accordance with laws like GDPR and the ePrivacy Directive (EU), as well as other applicable regulations.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          10. Contacting Us
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          If you have any questions about this policy or your personal data, please contact us at:
        </p>
        <CopyEmailBtn />
        <p className="text-black75 text-small font-inter mt-6">
          We typically respond within 24 - 48 hours.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-black text-h5 sm:text-h4 font-bold font-nunito md:text-h2">
          11. Changes to This Privacy Policy
        </h2>
        <p className="text-black75 text-p font-inter mt-8">
          We may update this policy from time to time. Changes will be reflected by updating the “Last Updated” date at the top of this page. We recommend checking this page periodically. At this time, we do not notify users by email unless legally required.
        </p>
      </section>
    </main>
  );
}