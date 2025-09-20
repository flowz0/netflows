import Image from "next/image";

import HeroImg from "@/public/projects/dddc-thumbnail.jpg";
import Link from "next/link";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="mt-8 max-w-7xl mx-auto lg:mt-16">
      <div className="flex flex-col items-center cursor-default px-6">
        <h1 className="text-h3 font-bold font-nunito text-center sm:text-h2">
          <span className="text-secondary">Websites</span> That Not Only Look {" "}
          <br className="hidden lg:inline-block" />
          Good But <span className="text-primary">Grow</span> Your Business
        </h1>
        <p className="text-black75 text-p text-center font-inter max-w-2xl mt-4">
          We build high-performance websites with optimized SEO to attract traffic, convert visitors into leads, and help you scale. Every site is fast, secure, and tailored to your brand.
        </p>
        <Link href="/booking" className="mt-8 md:mt-12">
          <Button text="Get My Free Strategy Call" variant="gradient" />
        </Link>
      </div>
      <Image
        src={HeroImg}
        alt="Hero image"
        className="mt-16 object-cover lg:rounded-lg w-full h-64 sm:h-[680px] animate-drop-shadow md:mt-32"
        draggable={false}
        priority={true}
        quality={100}
        loading="eager"
      />
    </section>
  );
}