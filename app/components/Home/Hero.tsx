import Image from "next/image";

import HeroImg from "@/public/hero-img.png";
import ExpandingCircleButton from "../ExpandingCircleButton";

export default function Hero() {
  return (
    <section className="mt-64 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-h2 font-bold font-nunito text-center sm:text-h1">
          Grow your digital presence
        </h1>
        <p className="mt-4 text-p text-center font-inter text-black75">
          Strategic web design and development that turns visitors into customers.
        </p>
        <ExpandingCircleButton text="Book Free Consultation" className="mt-12" />
      </div>
      <Image
        src={HeroImg}
        alt="Hero image"
        className="mt-32 object-cover rounded-lg w-full h-[480px] sm:h-[680px] drop-shadow-[0_25px_100px_rgb(146,75,247)]"
        draggable={false}
        priority={true}
      />
    </section>
  );
}