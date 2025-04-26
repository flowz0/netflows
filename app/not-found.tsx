import Link from "next/link";
import Button from "./components/Button";

import { FaQuestionCircle } from "react-icons/fa";

export default function PageNotFound() {
  return (
    <div className="bg-[#040F16] text-[#FBFBFF] flex flex-col items-center h-screen px-6">
      <div className="mt-28 max-w-lg py-12 px-6 rounded-2xl sm:mt-24 flex flex-col items-center sm:py-16 sm:px-12">
        <div className="bg-[rgba(1,79,101,0.5)] p-2 w-fit rounded-full">
          <FaQuestionCircle className="text-[rgb(154,233,254)] h-12 w-12 sm:h-14 sm:w-14" />
        </div>
        <h1 className="text-4xl/[46px] font-bold mt-5 text-center sm:text-5xl/[58px]">
          Page not found
        </h1>
        <p className="text-[rgba(250,250,255,0.7)] mt-2 text-base/[30px] text-center sm:text-lg/[32px]">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="mt-6">
          <Button variant="ghost" className="w-full duration-300 transition-colors">Go home</Button>
        </Link>
      </div>
    </div>
  );
}
