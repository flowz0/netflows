"use client";

import { bottomRowReviews, topRowReviews } from "@/data/testimonials";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.005,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="mt-32 md:mt-64">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center cursor-default">
        <h2 className="text-h4 font-bold font-nunito text-center text-black sm:text-h2">
          Don&apos;t Take {" "}
          <br className="lg:hidden" />
          Our Word For It
        </h2>
        <p className="mt-4 text-p max-w-6xl text-center font-inter text-black75">
          See what our clients have to say about us.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-linear-[90deg,rgba(243,242,243,1)_0%,rgba(243,242,243,0)_20%,rgba(243,242,243,0)_80%,rgba(243,242,243,1)_100%]"
        />

        <div className="mt-8 w-full overflow-hidden md:mt-12">
          <div className={`flex gap-x-6 w-max ${inView ? "animate-scroll" : ""}`}>
            {[...topRowReviews, ...topRowReviews].map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard
                  review={testimonial.review}
                  reviewer={testimonial.reviewer}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 w-full overflow-hidden">
          <div className={`flex gap-x-6 w-max ${inView ? "animate-scroll-reverse" : ""}`}>
            {[...bottomRowReviews, ...bottomRowReviews].map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard
                  review={testimonial.review}
                  reviewer={testimonial.reviewer}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}