import Image from "next/image";
import BusinessManAvatar1 from "@/public/process/business1.jpg";
import BusinessManAvatar2 from "@/public/process/business2.jpg";
import BusinessManAvatar3 from "@/public/process/business3.jpg";
import Link from "next/link";
import Button from "@/components/Button";

export default function ProcessCTA() {
  return (
    <div className="mt-6 border border-black py-12 px-8 rounded-2xl flex flex-col items-center justify-between lg:flex-row lg:h-[128px]">
      <div className="flex flex-col items-center gap-x-4 lg:flex-row">
        <div className="flex -space-x-2">
          <Image
            src={BusinessManAvatar1}
            alt="Business avatar"
            className="object-cover h-16 w-16 lg:h-12 lg:w-12 rounded-full ring-4 ring-black5"
            priority={false}
            draggable={false}
            quality={75}
            loading="lazy"
          />
          <Image
            src={BusinessManAvatar2}
            alt="Business avatar"
            className="object-cover h-16 w-16 lg:h-12 lg:w-12 rounded-full ring-4 ring-black5"
            priority={false}
            draggable={false}
            quality={75}
            loading="lazy"
          />
          <Image
            src={BusinessManAvatar3}
            alt="Business avatar"
            className="object-cover h-16 w-16 lg:h-12 lg:w-12 rounded-full ring-4 ring-black5"
            priority={false}
            draggable={false}
            quality={75}
            loading="lazy"
          />
        </div>
        <p className="text-black75 text-p font-inter text-center mt-4 lg:mt-0">
          Join businesses leveling up their online presence
        </p>
      </div>
      <Link href="/booking">
        <Button text="Book Free Consultation" className="mt-8 lg:mt-0" variant="gradient" />
      </Link>
    </div>
  );
}