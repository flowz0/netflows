import CopyEmailBtn from "@/app/components/CopyEmailBtn";

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto lg:pb-32">
      <header>
        <h1 className="text-[#f5f5f5] text-4xl/[2.6rem] font-semibold md:text-5xl/[3.4rem]">
          Privacy Policy
        </h1>
        <h4 className="text-[#f5f5f5] text-base/[1.8rem] font-semibold mt-8 md:text-lg/[2rem]">
          Last Updated: May 27, 2025
        </h4>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          At Netflows, your privacy is important to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website or book services with us.
        </p>
      </header>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          1. Information We Collect
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          When you fill out a booking form on our website, we collect the following information:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] mt-4 pl-5">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Booking Details (Date, Time, Zoom Link, Selected Service)</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          2. How We Collect Your Information
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We collect this information directly through our custom booking/calendar service integrated on our website. This is the only method by which we gather your personal information.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          3. How We Use Your Information
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We use your personal information to:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Schedule and follow up on demo calls</li>
          <li>Send automatic follow-up emails after your booking and demo session</li>
          <li>Respond to your inquiries or service-related needs</li>
          <li>Update you on how we can help grow your business</li>
          <li>Support communication between you and our web development team</li>
          <li>Facilitate invoicing and payments via Stripe</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          4. How We Share Your Information
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We only share your information with trusted third-party services essential to our operations:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li><span className="text-[#f5f5f5] font-semibold">SendGrid</span> to send emails to you and our internal team</li>
          <li><span className="text-[#f5f5f5] font-semibold">Stripe</span> for secure invoicing and payment processing</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          5. Data Security
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We take data security seriously. Your information is protected using:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li><span className="text-[#f5f5f5] font-semibold">SSL encryption</span> for secure transmission</li>
          <li><span className="text-[#f5f5f5] font-semibold">Secure servers</span></li>
          <li><span className="text-[#f5f5f5] font-semibold">Access restrictions</span> so only authorized team members can view data</li>
          <li><span className="text-[#f5f5f5] font-semibold">MongoDB</span> as our secure data storage solution</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          6. Your Rights Under the California Consumer Privacy Act (CCPA)
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          If you are a California resident, you have the following rights under the CCPA:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li><span className="text-[#f5f5f5] font-semibold">Right to Know:</span> You can request details on the personal information we collect, use, and share.</li>
          <li><span className="text-[#f5f5f5] font-semibold">Right to Delete:</span> You may request the deletion of your personal information, subject to legal and contractual obligations.</li>
          <li><span className="text-[#f5f5f5] font-semibold">Right to Opt-Out:</span> You can opt-out of any future sale of your personal data (Note: Netflows does not sell personal data).</li>
          <li><span className="text-[#f5f5f5] font-semibold">Right to Non-Discrimination:</span> Exercising your CCPA rights will not result in any discriminatory treatment.</li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          To exercise these rights, email us at <span className="text-[#f5f5f5] font-semibold">netflowsxyz@gmail.com</span> with the subject line <span className="text-[#f5f5f5] font-semibold">&quot;CCPA Request&quot;</span> and allow up to 30 days for a response.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          7. International Data Compliance (GDPR, PIPEDA, etc.)
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          While Netflows is based in California, USA, we may work with or serve clients from regions outside the United States. When applicable, we aim to comply with other data protection laws such as:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>The <span className="text-[#f5f5f5] font-semibold">General Data Protection Regulation (GDPR)</span> for users in the European Union and United Kingdom</li>
          The <li><span className="text-[#f5f5f5] font-semibold">Personal Information Protection and Electronic Documents Act (PIPEDA)</span> for users in Canada</li>
          <li><span className="text-[#f5f5f5] font-semibold">Right to Opt-Out:</span> You can opt-out of any future sale of your personal data (Note: Netflows does not sell personal data).</li>
          <li><span className="text-[#f5f5f5] font-semibold">Right to Non-Discrimination:</span> Exercising your CCPA rights will not result in any discriminatory treatment.</li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          If you are located in one of these regions, you may have the right to:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Request access to or correction of your data</li>
          <li>Request deletion or restriction of processing</li>
          <li>Object to certain types of data use</li>
          <li>Request data portability</li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          You may contact us at <span className="text-[#f5f5f5] font-semibold">netflowsxyz@gmail.com</span> with the subject line <span className="text-[#f5f5f5] font-semibold">&quot;International Privacy Request&quot;</span> to exercise your rights under applicable data laws.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          8. Data Retention
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We retain your personal data for 1 year to ensure your project is completed and supported. If the project extends beyond that period, data retention terms will be covered in your service contract.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          9. Cookies & Tracking Technologies
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          Currently, Netflows does <span className="text-[#f5f5f5] font-semibold">not use cookies or tracking technologies</span> on our website.
        </p>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          In the future, we may use cookies for purposes such as:
        </p>
        <ul className="list-disc text-[#a8a8a8] text-base/[1.8rem] flex flex-col mt-4 pl-5">
          <li>Remembering form inputs or preferences</li>
          <li>Improving site performance and usability</li>
          <li>Analytics to better understand our audience</li>
          <li>Targeted communications or marketing (if applicable)</li>
        </ul>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          If and when these tools are implemented, we will provide a clear <span className="text-[#f5f5f5] font-semibold">cookie notice and opt-in/opt-out options</span> in accordance with laws like GDPR and the ePrivacy Directive (EU), as well as other applicable regulations.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          10. Contacting Us
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          If you have any questions about this policy or your personal data, please contact us at:
        </p>
        <CopyEmailBtn />
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-2">
          We typically respond within 24 - 48 hours.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-[#f5f5f5] text-2xl/[2.6rem] font-semibold md:text-3xl/[3.4rem]">
          11. Changes to This Privacy Policy
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4">
          We may update this policy from time to time. Changes will be reflected by updating the “Last Updated” date at the top of this page. We recommend checking this page periodically. At this time, we do not notify users by email unless legally required.
        </p>
      </section>
    </main>
  );
}