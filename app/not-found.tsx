import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="bg-[#040F16] text-[#FBFBFF] h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">Page not found</h1>
      <Link
        href="/"
        className="bg-[#01BAEF] text-[#FBFBFF] mt-8 font-bold px-4 py-2 rounded-md hover:bg-[hsl(193,99%,37%)]"
      >
        Return to home
      </Link>
    </div>
  );
};