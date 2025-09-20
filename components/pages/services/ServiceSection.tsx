import Image from "next/image";

import { ServiceSectionProps } from "@/types/service.type";
import Button from "@/components/Button";
import Link from "next/link";

export default function ServiceSection({ header, desc, img, flip, buttonLabel }: ServiceSectionProps) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
        <div className={`flex flex-col justify-center ${flip ? "lg:order-2" : ""}`}>
          <h2 className="text-black text-h5 font-bold font-nunito text-start sm:text-h3">
            {header}
          </h2>
          <div>
            <p className="text-black75 text-p font-inter text-start max-w-xl mt-4">
              {desc}
            </p>
          </div>
          <Link href="/booking">
            <Button variant="gradient" text={buttonLabel} className="mt-8" />
          </Link>
        </div>

        <div className="flex justify-center lg:justify-start">
          <Image
            src={img}
            alt="Service image"
            className={`h-96 w-full md:h-[480px] ${flip ? "lg:order-1" : ""} mt-8 lg:mt-0`}
            priority={true}
            quality={100}
            draggable={false}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}