import Image from "next/image";

import { ServiceSectionProps } from "@/types/service.type";

export default function ServiceSection({ header, desc, img, flip }: ServiceSectionProps) {
  return (
    <section>
      <div className="flex flex-col gap-x-4 lg:flex-row lg:items-center lg:justify-between">
        <div className={`flex flex-col items-center lg:justify-center ${flip ? "lg:order-2" : ""}`}>
          <h2 className="text-black text-h5 font-bold font-nunito text-center sm:text-h3">
            {header}
          </h2>
          <p className="text-black75 text-p font-inter text-center max-w-lg mt-4">
            {desc}
          </p>
        </div>

        <Image
          src={img}
          alt="Service image"
          className={`h-96 w-auto md:h-[480px] ${flip ? "lg:order-1" : ""}`}
          priority={true}
          quality={100}
          draggable={false}
          loading="eager"
        />
      </div>
    </section>
  );
}