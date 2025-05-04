import Image from "next/image";
import Button from "./components/Button";
import Link from "next/link";

import NotFound404 from "@/public/404-not-found.svg";

export const metadata = {
  title: "Page Not Found - Netflows"
};

export default function PageNotFound() {
  return (
    <header className="py-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-between gap-8 lg:items-center md:flex-row">
        <div className="max-w-xl">
          <h1 className="text-[#252323] text-4xl/[2.666rem] font-bold md:text-5xl/[3.516rem]">
            This Page
            <br />
            Does Not Exist
          </h1>
          <p className="text-[rgba(37,35,35,0.8)] text-base/[2.024rem] mt-4 md:text-lg/[2.374rem]">
            Looks like you&apos;ve hit a dead end. But don&apos;t worry — you can head back home and keep exploring.
          </p>
          <Link href='/'>
            <Button className="mt-8 w-full md:w-fit">Go to homepage</Button>
          </Link>
        </div>
        <Image
          src={NotFound404}
          alt="Landing page hero image"
          className="w-auto h-96 object-contain animate-float transition-transform"
          draggable={false}
        />
      </div>
    </header>
  );
};
