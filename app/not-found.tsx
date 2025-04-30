import Image from "next/image";
import Button from "./components/Button";
import Link from "next/link";

import NotFound404 from "@/public/404-not-found.svg";

export default function PageNotFound() {
  return (
    <section className="py-8 px-6 flex flex-col items-center justify-between max-w-7xl mx-auto lg:flex-row lg:py-32">
      <div className="flex flex-col order-2">
        <h1 className="text-4xl/[2.75rem] font-bold font-(family-name:--font-roboto-sans) sm:text-5xl/[3.54rem]">
          This Page
          <br />
          Does Not Exist
        </h1>
        <p className="font-(family-name:--font-inter-sans) text-[#595454] text-base/[2rem] max-w-sm mt-4">
          Looks like you&apos;ve hit a dead end. But don&apos;t worry — you can head back home and keep exploring.
        </p>
        <Link href="/" className="mt-9">
          <Button type="button">
            Back to Home
          </Button>
        </Link>
      </div>

      <Image
        src={NotFound404}
        alt="Page not found image"
        className="animate-float transition-transform h-full w-96 order-1 mt-8 lg:mt-0 lg:order-2"
        draggable="false"
      />
    </section>
  );
};
