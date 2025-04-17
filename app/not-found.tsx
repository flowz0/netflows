import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="bg-[#FBFBFF] text-[#040F16] h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <Link 
        href="/" 
        className="bg-[#01BAEF] text-[#FBFBFF] mt-6 font-bold px-4 py-2 rounded-md hover:bg-[hsl(193,99%,37%)]"
      >
        Go back
      </Link>
    </div>
  )
}