"use client";

import { useEffect, useRef, useState } from "react";
import ProcessCard from "./ProcessCard";
import ProcessCTA from "./ProcessCTA";

export default function Process() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [dividerVisible, setDividerVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(4).fill(false));

  useEffect(() => {
    if (headerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(headerRef.current);
    }

    if (dividerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setDividerVisible(true), 50);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(dividerRef.current);
    }

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 100);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
    });

    if (ctaRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setCtaVisible(true), 200); // delay for smooth blend
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ctaRef.current);
    }
  }, []);

  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto md:mt-64">
      {/* Header + Divider */}
      <div className="flex flex-col cursor-default lg:flex-row">
        <h2
          ref={headerRef}
          className={`text-h4 font-bold font-nunito text-black sm:text-h2 lg:w-4/6 transform transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Our Process
        </h2>
        <div
          ref={dividerRef}
          className={`mt-8 w-8/12 border-b border-black50 self-end md:mt-0 lg:w-5/6 transform transition-all duration-700 ease-out ${
            dividerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        />
      </div>

      {/* Process Cards */}
      <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:mt-16 lg:grid-cols-4">
        {[
          {
            step: "01.",
            title: "Discovery",
            desc: "We start with a strategy call to learn about your business, ideal customers, and project goals. This ensures every decision aligns with your brand and drives measurable results.",
          },
          {
            step: "02.",
            title: "Design",
            desc: "Our team creates a clean, responsive design tailored to your brand identity and user journey. We prioritize usability, accessibility, and modern aesthetics to engage visitors and guide them toward action.",
          },
          {
            step: "03.",
            title: "Development",
            desc: "We develop your website using cutting-edge technologies focusing on performance, security, mobile responsiveness, and SEO best practices to improve search rankings and lead generation.",
          },
          {
            step: "04.",
            title: "Launch",
            desc: "After rigorous testing and quality assurance, we launch your site and provide ongoing support. From maintenance to updates and analytics, we help you grow and adapt after launch.",
          },
        ].map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`transform transition-all duration-700 ease-out ${
              visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <ProcessCard step={card.step} title={card.title} desc={card.desc} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className={`transform transition-all duration-700 ease-out ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <ProcessCTA />
      </div>
    </section>
  );
}