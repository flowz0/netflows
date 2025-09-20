"use client";

import { bottomRowReviews, topRowReviews } from "@/data/testimonials";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const [topRowVisible, setTopRowVisible] = useState(false);
  const [bottomRowVisible, setBottomRowVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          setTimeout(() => setParagraphVisible(true), 50);
          setTimeout(() => setTopRowVisible(true), 100);
          setTimeout(() => setBottomRowVisible(true), 250);
          setInView(true);
        }
      },
      { threshold: 0.005 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section ref={sectionRef} className="mt-32 md:mt-64">
      {/* Header & Paragraph */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center cursor-default">
        <h2
          className={`text-h4 font-bold font-nunito text-center text-black sm:text-h2 transform transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Don&apos;t Take <br className="lg:hidden" /> Our Word For It
        </h2>
        <p
          className={`mt-4 text-p max-w-6xl text-center font-inter text-black75 transform transition-all duration-700 ease-out ${
            paragraphVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          See what our clients have to <br className="sm:hidden" /> say about us.
        </p>
      </div>

      {/* Testimonial Rows */}
      <div className="relative overflow-hidden">
        {/* Gradient mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#f3f2f3] via-transparent to-[#f3f2f3]"
        />

        {/* Top Row */}
        <div className="mt-8 w-full overflow-hidden md:mt-12">
          <div
            className={`flex gap-x-6 w-max transform transition-all duration-700 ease-out ${
              topRowVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } ${inView ? "animate-scroll" : ""}`}
          >
            {[...topRowReviews, ...topRowReviews].map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 w-full overflow-hidden">
          <div
            className={`flex gap-x-6 w-max transform transition-all duration-700 ease-out delay-200 ${
              bottomRowVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } ${inView ? "animate-scroll-reverse" : ""}`}
          >
            {[...bottomRowReviews, ...bottomRowReviews].map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}