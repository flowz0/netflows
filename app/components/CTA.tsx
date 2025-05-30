import Button from "@/app/components/Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="bg-linear-[145deg,rgba(0,71,102,1)_0%,rgba(36,36,36,1)_16%,rgba(36,36,36,1)_88%,rgba(0,71,102,1)_100%] py-10 px-6 w-full flex flex-col items-center rounded-lg md:py-10 md:px-12 md:bg-linear-[145deg,rgba(0,71,102,1)_0%,rgba(36,36,36,1)_20%,rgba(36,36,36,1)_80%,rgba(0,71,102,1)_100%]">
        <h2 className="text-[#f5f5f5] text-4xl/[2.6rem] font-semibold text-center max-w-md md:text-5xl/[3.4rem]">
          Let&apos;s Start Building Your <span className="text-[#00b4ff] font-bold">Website</span>
        </h2>
        <p className="text-[#a8a8a8] text-base/[1.8rem] mt-4 max-w-3xl text-center lg:mx-0 md:text-lg/[2rem]">
          We design and develop fast, user-focused websites that convert. Perfect for startups, small businesses, or growing brands.
        </p>
        <Link href="/book-consultation">
          <Button variant="primary" className="mt-8">Schedule Free Call</Button>
        </Link>
      </div>
    </section>
  );
}