"use client";

import { services } from "@/data/service.data";
import ServiceItem from "./ServiceItem";
import { useEffect, useRef, useState } from "react";
import { inView } from "framer-motion";

export default function Services() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const [visibleServices, setVisibleServices] = useState<boolean[]>(
    Array(services.length).fill(false)
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (headerRef.current) {
      const stopHeader = inView(headerRef.current, () => {
        setHeaderVisible(true);
        stopHeader();
      });
    }

    if (paragraphRef.current) {
      const stopParagraph = inView(paragraphRef.current, () => {
        setTimeout(() => setParagraphVisible(true), 50);
        stopParagraph();
      });
    }

    serviceRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const stop = inView(ref, () => {
        setTimeout(() => {
          setVisibleServices((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 50);
        stop();
      });
    });
  }, []);

  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto md:mt-64">
      {/* Header + Paragraph */}
      <div className="flex flex-col cursor-default lg:flex-row">
        <h2
          ref={headerRef}
          className={`text-h4 font-bold font-nunito text-black transform transition-all duration-700 ease-in-out lg:w-3/5 sm:text-h2 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          What Services
          <br />
          We&apos;re Offering
        </h2>
        <p
          ref={paragraphRef}
          className={`mt-4 text-p font-inter text-black75 transform transition-all duration-700 ease-in-out md:mt-0 lg:w-2/5 ${paragraphVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          We offer digital solutions to help you grow your online presence, generate leads, and scale your business. From responsive websites to scalable web apps, our services are tailored to your goals and built for results.
        </p>
      </div>

      {/* Services */}
      <div className="mt-8 md:mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(e) => {
              serviceRefs.current[index] = e;
            }}
            className={`transform transition-all duration-700 ease-out ${visibleServices[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
          >
            <ServiceItem
              title={service.title}
              description={service.description}
              image={service.image}
              isOpen={activeIndex === index}
              onClick={() => handleClick(index)}
            />
            {index !== services.length - 1 && <hr />}
          </div>
        ))}

      </div>
    </section>
  );
}