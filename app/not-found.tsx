import Link from "next/link";
import Button from "./components/Button";

export default function PageNotFound() {
  return (
    <div className="bg-[#040F16] text-[#FBFBFF] h-screen flex flex-col justify-center items-center">
      <h1 className="max-w-xs text-4xl/[46px] font-bold text-center sm:max-w-none sm:text-5xl/[58px]">
        Page not found
      </h1>
      <p className="text-[rgba(250,250,255,0.7)] mt-2 max-w-sm text-base/[30px] text-center sm:max-w-xl sm:text-lg/[32px]">
        This page does not exist.
      </p>
      <Link href='/' className="mt-6">
        <Button>
          Return to the homepage
        </Button>
      </Link>
    </div>
  );
};