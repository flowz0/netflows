import Image from "next/image";
import Button from "../Button";
import ReviewsTag from "./ReviewsTag";

import LayeredWaves from "@/public/layered-waves.svg";

export default function Hero() {
  return (
    <header className="bg-[#040F16] text-[#FBFBFF] flex relative sm:justify-center h-screen px-6">
      <Image
        src={LayeredWaves}
        alt="Blob background"
        className="object-cover z-0"
        draggable={false}
        fill
      />
      <ReviewsTag />
      <div className="relative flex flex-col justify-center sm:items-center">
        <h1 className="text-4xl/[46px] font-bold tracking-[-0.031em] sm:text-5xl/[58px] sm:text-center">
          Grow Online. <br /> Sell More.
        </h1>
        <p className="text-[rgba(250,250,255,0.7)] text-base/[30px] tracking-[0.016em] mt-4 sm:text-lg/[32px] sm:text-center">
          Strategic web design and development that turns visitors into customers.
        </p>
        <Button className="w-fit mt-8">Request a free consultation</Button>
      </div>
    </header>
  );
};