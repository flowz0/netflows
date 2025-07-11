import Button from "@/app/components/Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto sm:pb-32">
      <div className="bg-linear-[145deg,rgba(0,71,102,1)_0%,rgba(36,36,36,1)_16%,rgba(36,36,36,1)_88%,rgba(0,71,102,1)_100%] py-10 px-6 w-full flex flex-col items-center rounded-lg md:py-16 md:px-12 md:bg-linear-[145deg,rgba(0,71,102,1)_0%,rgba(36,36,36,1)_20%,rgba(36,36,36,1)_80%,rgba(0,71,102,1)_100%]">
        <h2 className="text-[#f5f5f5] text-4xl/[2.6rem] text-center max-w-2xl md:text-5xl/[3.4rem]">
          Let&apos;s Start <span className="text-[#00b4ff] font-semibold">Working</span> Together
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4 max-w-lg text-center lg:mx-0 md:text-lg/[2rem]">
          We design, develop, and maintain modern web solutions. Perfect for startups, small businesses, or growing brands.
        </p>
        <Link href="/book-consultation">
          <Button variant="primary" className="mt-8">Book Free Consultation</Button>
        </Link>
      </div>
    </section>
  );
}