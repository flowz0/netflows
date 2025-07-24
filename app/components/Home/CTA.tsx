import Link from "next/link";
import ExpandingCircleButton from "../ExpandingCircleButton";

export default function CTA() {
  return (
    <section className="mt-64 px-6 max-w-7xl mx-auto">
      <div className="border border-black rounded-2xl p-8 sm:h-[400px] flex flex-col items-center justify-center">
        <h3 className="text-h5 sm:text-h3 font-bold text-center font-nunito text-black">
          Book a Consultation Today
        </h3>
        <p className="mt-4 text-p max-w-6xl text-center font-inter text-black75">
          Schedule a free consultation with our industry expert software engineers and web designers.
        </p>
        <Link href="/booking">
          <ExpandingCircleButton text="Book Free Consultation" className="mt-8" variant="gradient" />
        </Link>
      </div>
    </section>
  );
}