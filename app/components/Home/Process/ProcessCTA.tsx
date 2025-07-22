import Image from "next/image";
import ExpandingCircleButton from "../../ExpandingCircleButton";
import BusinessManAvatar1 from "@/public/process/business1.jpg";
import BusinessManAvatar2 from "@/public/process/business2.jpg";
import BusinessManAvatar3 from "@/public/process/business3.jpg";

export default function ProcessCTA() {
  return (
    <div className="mt-6 border h-[128px] border-black py-8 px-8 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <div className="flex -space-x-2">
          <Image
            src={BusinessManAvatar1}
            alt="Business avatar"
            className="object-cover h-12 w-12 rounded-full ring-4 ring-black5"
            priority={false}
            draggable={false}
            quality={90}
          />
          <Image
            src={BusinessManAvatar2}
            alt="Business avatar"
            className="object-cover h-12 w-12 rounded-full ring-4 ring-black5"
            priority={false}
            draggable={false}
            quality={90}
          />
          <Image
            src={BusinessManAvatar3}
            alt="Business avatar"
            className="object-cover h-12 w-12 rounded-full ring-4 ring-black5"
            priority={false}
            draggable={false}
            quality={90}
          />
        </div>
        <p className="text-black75 text-p font-inter">
          Join businesses leveling up their online presence
        </p>
      </div>
      <ExpandingCircleButton text="Book Free Consultation" />
    </div>
  );
}