"use client";

import { useState } from "react";
import Testimonial from "./Testimonial";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Karson from "@/public/testimonials/karson.jpg";
import Melissa from "@/public/testimonials/melissa.png";
import James from "@/public/testimonials/james.png";

const TestimonialData = [
  {
    id: 0,
    review:
      "Netflows redesigned our website and built a custom blog platform with a secure dashboard and SEO optimizations. It not only looks great but has also driven more traffic to our site. He was professional, efficient, and delivered exactly what we needed.",
    reviewerImg: Karson,
    reviewerName: "Karson Kolle",
    reviewerTitle: "Founder at Duct Daddy Duct Cleaning",
  },
  {
    id: 1,
    review:
      "Netflows helped us stand out with a modern, mobile-friendly website that reflects our professionalism. He also created a custom quote request form that automatically sends client info to our inbox, saving us time and streamlining our process. We've had more inquiries since the redesign and couldn't be happier with the results.",
    reviewerImg: Melissa,
    reviewerName: "Melissa R.",
    reviewerTitle: "Owner at PureFlow Plumbing",
  },
  {
    id: 2,
    review:
      "Our old site was outdated and hard to navigate. Netflows completely revamped it with a fast, clean design that loads quickly and works perfectly on mobile. He also added an SEO-optimized blog where we can share seasonal tips, which has helped boost our visibility in local search results. Highly recommend for any service business looking to grow online.",
    reviewerImg: James,
    reviewerName: "James D.",
    reviewerTitle: "Founder of GreenScape Lawn & Garden",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    if (currentIndex < TestimonialData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentTestimonial = TestimonialData[currentIndex];

  return (
    <section className="pt-32 pb-16 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:justify-between sm:gap-12 lg:items-end lg:flex-row">
          <h2 className="text-[#f5f5f5] text-4xl font-semibold lg:text-start md:text-5xl">
            What our clients
            <br />
            are <span className="text-[#00b4ff] font-bold">saying</span> about
            <br />
            working with us
          </h2>
          <div className="mt-8 flex items-center justify-end gap-4 sm:mt-0">
            <p className="text-[#8f8f8f]">{currentTestimonial.id + 1}/{TestimonialData.length}</p>
            <div className="flex justify-end gap-2">
              <button onClick={prevIndex}>
                <FaArrowLeft
                  className={`bg-[hsl(0,0%,14%)] p-2 rounded-full w-8 h-8 ${currentIndex === 0
                    ? "text-[hsl(0,0%,56%)] cursor-not-allowed"
                    : "cursor-pointer hover:bg-[hsl(0,0%,24%)]"
                    }`}
                />
              </button>
              <button onClick={nextIndex}>
                <FaArrowRight
                  className={`bg-[hsl(0,0%,14%)] p-2 rounded-full w-8 h-8 ${currentIndex === TestimonialData.length - 1
                    ? "text-[hsl(0,0%,56%)] cursor-not-allowed"
                    : "cursor-pointer hover:bg-[hsl(0,0%,24%)]"
                    }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Testimonial
            key={currentTestimonial.id}
            review={currentTestimonial.review}
            reviewerImg={currentTestimonial.reviewerImg}
            reviewerName={currentTestimonial.reviewerName}
            reviewerTitle={currentTestimonial.reviewerTitle}
          />
        </div>
      </div>
    </section>
  );
}
