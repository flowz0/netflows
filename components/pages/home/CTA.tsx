import Button from "@/components/Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto relative md:mt-64">
      <div className="border bg-black5 border-black rounded-2xl p-8 animate-drop-shadow sm:h-[400px] flex flex-col items-center justify-center cursor-default">
        <h3 className="text-h5 sm:text-h3 font-bold text-center font-nunito text-black">
          Ready to <span className="text-primary">Elevate</span> Your <span className="text-secondary">Online</span> Presence?
        </h3>
        <p className="mt-4 text-p max-w-2xl text-center font-inter text-black75">
          Book a free 15-min strategy call today to discuss how we can design and develop a high-performing website tailored to your goals.
        </p>
        <Link href="/booking" className="mt-8">
          <Button text="Book My Free Call" variant="gradient" />
        </Link>
      </div>
    </section>
  );
}