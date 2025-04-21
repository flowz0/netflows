import Button from "../Button";
import ReviewsTag from "./ReviewsTag";

export default function Hero() {
  return (
    <header className="bg-[#040F16] text-[#FBFBFF] h-screen flex flex-col justify-center px-6 sm:items-center">
      <h1 className="max-w-xs text-5xl/[58px] font-bold sm:max-w-none sm:text-6xl/[70px] sm:text-center">Creative Digital Agency</h1>
      <p className="text-[rgba(250,250,255,0.7)] max-w-sm text-base/[30px] mt-4 sm:max-w-xl sm:text-lg/[32px] sm:text-center">
        Web development agency based in California. Focused on creating interactive web experiences for small businesses and enterprises.
      </p>
      <Button className="w-fit mt-6">View our work</Button>
      <ReviewsTag />
    </header>
  );
};