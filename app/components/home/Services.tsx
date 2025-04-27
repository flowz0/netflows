import Service from "./Service";

import PlaceHolderImg from "@/public/1920x1080.svg";

export default function Services() {
  return (
    <section className="bg-[#FBFBFF] text-[#040F16] px-6 py-32">
      <div className="max-w-7xl mx-auto flex flex-col">
        <h2 className="text-3xl/[40px] font-bold tracking-[-0.031em] sm:text-4xl/[46px]">
          Services
          <br />
          We Provide
        </h2>
        <p className="text-[rgba(4,15,22,0.7)] text-base/[30px] tracking-[0.016em] mt-4 max-w-sm sm:text-lg/[32px]">
          We use state of the art technologies designed to grow your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 mt-12">
          <Service title="Web Development" img={PlaceHolderImg} />
          <Service title="Web Design" img={PlaceHolderImg} />
          <Service title="Web Design" img={PlaceHolderImg} />
        </div>
      </div>
    </section>
  );
}
