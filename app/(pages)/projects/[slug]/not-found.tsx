import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import NotFoundImg from "@/public/page-not-found.svg";
import ExpandingCircleButton from "@/components/Button";

export const metadata: Metadata = {
  title: "Project Not Found | Netflows"
};

export default function PageNotFound() {
  return (
    <main className="mt-16 max-w-7xl mx-auto lg:mt-20">
      <div className="px-6 flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start lg:w-2/3">
          <h1 className="text-h3 font-bold font-nunito sm:text-h1">
            This Project
            <br />
            Does Not Exist
          </h1>
          <p className="mt-4 text-p font-inter max-w-lg text-black75">
            Looks like you&apos;ve hit a dead end. But don&apos;t worry you can head back home and keep exploring.
          </p>
          <Link href="/projects">
            <ExpandingCircleButton text="Return to Projects" className="mt-12" />
          </Link>
        </div>

        <div className="mt-16 lg:mt-0">
          <Image
            src={NotFoundImg}
            alt="Page not found image"
            className="h-[480px]"
            draggable={false}
            priority
          />
        </div>
      </div>
    </main>
  );
};
