import Image from "next/image";
import Button from "./components/Button";
import Link from "next/link";

import NotFound404 from "@/public/404-not-found.svg";

export const metadata = {
  title: "Page Not Found | Netflows"
};

export default function PageNotFound() {
  return (
    <header className="pt-32 pb-48">
      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-between gap-8 items-center lg:flex-row">
        <div className="max-w-xl flex flex-col items-center lg:items-start">
          <h1 className="text-[#f5f5f5] text-4xl/[2.466rem] text-center font-bold md:text-5xl/[3.016rem] lg:text-start">
            This Page
            <br />
            Does <span className="text-[#00b4ff]">Not</span> Exist
          </h1>
          <p className="text-[#a8a8a8] text-base/[2.024rem] mt-4 text-center md:text-lg/[2.274rem] lg:text-start">
            Looks like you&apos;ve hit a dead end. But don&apos;t worry you can head back home and keep exploring.
          </p>
          <Link href='/'>
            <Button className="mt-8">Go to homepage</Button>
          </Link>
        </div>
        <Image
          src={NotFound404}
          alt="Landing page hero image"
          className="object-cover h-full pointer-events-none"
        />
      </div>
    </header>
  );
};
