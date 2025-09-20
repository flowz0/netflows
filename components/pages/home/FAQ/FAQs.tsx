"use client";

import { useEffect, useRef, useState } from "react";
import faqData from "@/data/faq.data";
import FAQItem from "./FAQItem";

export default function FAQs() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const [visibleFAQs, setVisibleFAQs] = useState<boolean[]>(
    Array(faqData.length).fill(false)
  );

  useEffect(() => {
    // Header
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

    // Paragraph
    if (paragraphRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setParagraphVisible(true), 50);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(paragraphRef.current);
    }

    // Each FAQ item
    faqRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleFAQs((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 50); // stagger animation
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
    });
  }, []);

  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto md:mt-64">
      <div className="flex flex-col items-center cursor-default">
        {/* Header */}
        <h2
          ref={headerRef}
          className={`text-h4 font-bold font-nunito text-center text-black sm:text-h2 transform transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Frequently <br className="sm:hidden" /> Asked Questions
        </h2>

        {/* Paragraph */}
        <p
          ref={paragraphRef}
          className={`mt-4 text-p max-w-6xl text-center font-inter text-black75 transform transition-all duration-700 ease-out ${
            paragraphVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          If you still have questions that we <br className="sm:hidden" /> didn&apos;t answer
          here. Please feel free to <br className="sm:hidden" />
          email us:{" "}
          <span className="cursor-auto bg-primary text-black5 font-bold py-1 px-2 rounded-lg">
            contact@netflows.xyz
          </span>
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-8 md:mt-12">
        {faqData.map(({ question, answer }, index) => (
          <div
            key={index}
            ref={(el) => {
              faqRefs.current[index] = el;
            }}
            className={`transform transition-all duration-700 ease-out ${
              visibleFAQs[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <FAQItem question={question} answer={answer} />
            {index !== faqData.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
}