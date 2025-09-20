"use client";

import ProjectData from "@/data/project.data";
import CaseStudyCard from "./CaseStudyCard";
import { useEffect, useRef, useState } from "react";
import { inView } from "framer-motion";

export default function CaseStudies() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(ProjectData.slice(0, 2).length).fill(false)
  );

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

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const stopCard = inView(ref, () => {
        setTimeout(() => {
          setVisibleCards((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 150);
        stopCard();
      });
    });
  }, []);

  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto md:mt-64">
      {/* Header + Paragraph */}
      <div className="flex flex-col items-center cursor-default">
        <h2
          ref={headerRef}
          className={`text-h4 font-bold font-nunito text-black transform transition-all duration-700 ease-in-out sm:text-h2 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Case Studies
        </h2>
        <p
          ref={paragraphRef}
          className={`mt-4 text-p max-w-6xl text-center font-inter text-black75 transform transition-all duration-700 ease-in-out ${
            paragraphVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          These are some of our most{" "}
          <br className="sm:hidden" />
          recent projects.
        </p>
      </div>

      {/* CaseStudyCards */}
      <div className="mt-8 grid grid-cols-1 gap-y-6 md:gap-x-6 md:grid-cols-2 md:mt-12">
        {ProjectData.slice(0, 2).map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`transform transition-all duration-700 ease-out ${
              visibleCards[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <CaseStudyCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}