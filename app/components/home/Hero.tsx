import Image from "next/image";
import Button from "../Button";
import ReviewsTag from "./ReviewsTag";

import LayeredWaves from "@/public/layered-waves.svg";

export default function Hero() {
  return (
    <header className="bg-[#040F16] text-[#FBFBFF] relative flex justify-center pb-52 pt-28 px-6 sm:pb-60 sm:pt-28">
      <Image
        src={LayeredWaves}
        alt="Blob background"
        className="object-cover z-0"
        draggable={false}
        fill
      />
      <div className="relative flex flex-col items-center">
        <ReviewsTag />
        <h1 className="text-4xl/[46px] font-bold tracking-[-0.031em] max-w-lg mt-4 sm:mt-8 sm:text-5xl/[58px] text-center">
        We Build Websites That Grow Your Business
        </h1>
        <p className="text-[rgba(250,250,255,0.7)] text-base/[30px] tracking-[0.016em] mt-2 sm:mt-4 sm:text-lg/[32px] text-center">
          Strategic web design and development that turns visitors into
          customers.
        </p>
        <Button className="w-fit mt-4 sm:mt-8">Book a Free Consultation</Button>
      </div>
    </header>
  );
}
