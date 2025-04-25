import Service from "./Service";

import PlaceHolderImg from "@/public/Horizontal-Placeholder-Image.jpg";

export default function Services() {
  return (
    <section className="bg-[#FBFBFF] text-[#040F16] px-6 py-28">
      <div className="max-w-7xl mx-auto flex flex-col sm:items-center">
        <h2 className="text-3xl/[40px] font-bold tracking-[-0.031em] sm:text-center sm:text-4xl/[46px]">
          Services
          <br />
          We Provide
        </h2>
        <p className="text-[rgba(4,15,22,0.7)] text-base/[30px] tracking-[0.016em] mt-4 sm:text-center sm:text-lg/[32px]">We use state of the art technologies designed to grow your business.</p>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mt-8">
          <Service title="Web Development" img={PlaceHolderImg} />
          <Service title="Web Design" img={PlaceHolderImg} />
          <Service title="Deployment & Maintenance" img={PlaceHolderImg} />
        </div>
      </div>
    </section>
  );
};