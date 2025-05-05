import Image from "next/image";
import Button from "../../Button";

import HeroImg from "@/public/hero-img.svg";

export default function Hero() {
  return (
    <header className="pt-32 pb-48">
      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-between gap-8 items-center lg:flex-row">
        <div className="max-w-xl">
          <h1 className="text-[#252323] text-4xl/[2.666rem] font-bold md:text-5xl/[3.516rem]">We Build Websites That Grow Your Business</h1>
          <p className="text-[rgba(37,35,35,0.8)] text-base/[2.024rem] mt-4 md:text-lg/[2.374rem]">Strategic web design and development that turns visitors into customers.</p>
          <Button className="mt-8 w-full lg:w-fit">Book a Free Consultation</Button>
        </div>
        <Image
          src={HeroImg}
          alt="Landing page hero image"
          className="h-full pointer-events-none"
        />
      </div>
    </header>
  );
};