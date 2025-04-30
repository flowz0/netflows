import Image from "next/image";
import Button from "./components/Button";
import Link from "next/link";

import NotFound404 from "@/public/404-not-found.svg";

export default function PageNotFound() {
  return (
    <section className="py-32 max-w-7xl px-6 mx-auto flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col justify-center items-start">
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
        className="animate-float transition-transform h-auto w-fit max-w-lg mt-8 lg:mt-0"
        draggable="false"
      />
    </section>
  );
};
