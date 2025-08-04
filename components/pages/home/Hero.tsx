import Image from "next/image";

import HeroImg from "@/public/hero-img.png";
import Link from "next/link";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="mt-16 max-w-7xl mx-auto lg:mt-32">
      <div className="flex flex-col items-center px-6">
        <h1 className="text-h3 font-bold font-nunito text-center sm:text-h1">
          Grow your digital presence
        </h1>
        <p className="mt-4 text-p text-center font-inter text-black75">
          Strategic web design and development that turns visitors into customers.
        </p>
        <Link href="/booking">
          <Button text="Book Free Consultation" className="mt-8 md:mt-12" variant="gradient" />
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