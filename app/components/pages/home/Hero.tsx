import Image from "next/image";
import Button from "../../Button";

import HeroImg from "@/public/home/homepage-img.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="py-32">
      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-between gap-12 items-center lg:flex-row">
        <div className="max-w-xl flex flex-col items-center lg:items-start">
          <h1 className="text-[#f5f5f5] text-4xl/[2.466rem] font-semibold text-center lg:text-start md:text-5xl/[3.016rem]">
            We Build Websites That <span className="text-[rgb(0,180,255)] font-bold">Grow</span> Your Business
          </h1>
          <p className="text-[#a8a8a8] text-base/[2.024rem] mt-4 text-center lg:text-start md:text-lg/[2.274rem]">
            Strategic web design and development that turns visitors into customers.
          </p>
          <Link href="/book-consultation">
            <Button className="mt-8">Schedule Free Consultation</Button>
          </Link>
        </div>
        <Image
          src={HeroImg}
          alt="Landing page hero image"
          className="object-cover h-full pointer-events-none"
          priority
        />
      </div>
    </header>
  );
};