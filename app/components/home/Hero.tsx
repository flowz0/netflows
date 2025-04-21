import ReviewsTag from "./ReviewsTag";

export default function Hero() {
  return (
    <header className="bg-[#040F16] text-[#FBFBFF] h-screen flex flex-col sm:items-center justify-center px-6">
      <h1 className="text-5xl/[1.10] sm:text-6xl/[1.10] max-w-xs sm:max-w-none font-bold sm:text-center">Creative Digital Agency</h1>
      <p className="text-[rgba(250,250,255,0.7)] max-w-sm sm:max-w-md text-base/[1.6] sm:text-lg/[1.6] sm:text-center mt-4">
        Web development agency based in California. Focused on creating interactive web experiences for small businesses and enterprises.
      </p>
      <button
        type="button"
        className="bg-[#01BAEF] text-[#040F16] hover:bg-[hsl(193,99%,37%)] w-fit mt-6 py-2 px-4 text-lg font-bold rounded-lg cursor-pointer"
      >
        View our work
      </button>
      <ReviewsTag />
    </header>
  )
};