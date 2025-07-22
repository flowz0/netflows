import PlaceholderAvatar from "@/public/2000x2000.svg";
import Image from "next/image";
import ExpandingCircleButton from "../ExpandingCircleButton";

export default function ProcessCTA() {
  return (
    <div className="mt-6 border h-[128px] border-black py-8 px-8 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <div className="flex -space-x-4">
          <Image
            src={PlaceholderAvatar}
            alt="Business avatar"
            className="h-12 w-12 rounded-full ring-4 ring-black5"
          />
          <Image
            src={PlaceholderAvatar}
            alt="Business avatar"
            className="h-12 w-12 rounded-full ring-4 ring-black5"
          />
          <Image
            src={PlaceholderAvatar}
            alt="Business avatar"
            className="h-12 w-12 rounded-full ring-4 ring-black5"
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