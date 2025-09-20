import Image from "next/image";

import { ServiceSectionProps } from "@/types/service.type";
import Button from "@/components/Button";
import Link from "next/link";

export default function ServiceSection({ header, desc, img, flip, buttonLabel, sectionId }: ServiceSectionProps) {
  return (
    <section id={sectionId} className="scroll-mt-32">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:justify-center lg:grid-cols-2 lg:gap-x-8">
          <div className={`flex flex-col justify-center ${flip ? "lg:order-2" : ""}`}>
            <h2 className="text-black text-h5 font-bold font-nunito text-start sm:text-h3">
              {header}
            </h2>
            <div>
              <p className="text-black75 text-p font-inter text-start max-w-xl mt-4">
                {desc}
              </p>
            </div>
            <Link href="/booking" className="w-fit">
              <Button variant="gradient" text={buttonLabel} className="mt-8" />
            </Link>
          </div>
          <div className={`flex ${flip ? "justify-end sm:justify-start" : "justify-start lg:justify-end"}`}>
            <Image
              src={img}
              alt="Service image"
              className={`h-96 w-auto md:h-[400px] ${flip ? "lg:order-1" : ""} mt-8 lg:mt-0`}
              priority={true}
              quality={100}
              draggable={false}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}