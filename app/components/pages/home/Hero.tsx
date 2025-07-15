import Image from "next/image";
import Button from "@/app/components/Button";
import HeroImg from "@/public/home/homepage-img.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="pt-14">
      <div className="max-w-7xl mt-8 mx-auto px-6 flex flex-col justify-between gap-12 items-center md:pr-0 lg:flex-row">
        <div className="max-w-xl flex flex-col items-center lg:items-start">
          <h1 className="text-[#f5f5f5] text-4xl font-semibold text-center lg:text-start md:text-5xl">
            We <span className="text-[rgb(0,180,255)] font-bold">Build</span> Web Experiences That 
            <br className="hidden sm:inline-block" />
            {" "} Grow Your Business
          </h1>
          <p className="text-[#a8a8a8] text-base mt-4 text-center lg:text-start md:text-lg">
            Strategic web design and development that turns visitors into customers.
          </p>
          <Link href="/book-consultation">
            <Button className="mt-8">Book Free Consultation</Button>
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