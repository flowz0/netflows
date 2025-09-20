"use client";

import { useEffect, useRef, useState } from "react";
import { inView } from "framer-motion";

import ValueCard from "./ValueCard";
import { MdTrendingUp, MdViewModule, MdInsights } from "react-icons/md";

export default function ValueProposition() {
  // Create refs for each card wrapper
  const cardRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    cardRefs.forEach((ref, index) => {
      if (!ref.current) return;

      const stopWatching = inView(ref.current, () => {
        setTimeout(() => {
          setVisible((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 50); // staggered delay
        stopWatching();
      });
    });
  });

  return (
    <section className="mt-32 max-w-7xl mx-auto md:mt-64">
      <div className="px-6 grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
        {[ // Define card data inline for simplicity
          {
            Icon: MdTrendingUp,
            title: "Results Driven Design",
            desc:
              "We create interfaces that not only look great but guide users toward action and drive real results.",
          },
          {
            Icon: MdViewModule,
            title: "Scalable Solutions",
            desc:
              "Our custom builds are future-ready making it easy to add new solutions without starting over.",
          },
          {
            Icon: MdInsights,
            title: "Strategic Consulting",
            desc:
              "Expert guidance on what to build and why, helping you with solutions that deliver high return on investment.",
          },
        ].map((card, index) => (
          <div
            key={index}
            ref={cardRefs[index]}
            className={`transform transition-all duration-700 ease-in-out ${
              visible[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <ValueCard
              Icon={card.Icon}
              title={card.title}
              desc={card.desc}
            />
          </div>
        ))}
      </div>
    </section>
  );
}