"use client";

import { useState } from "react";
import Testimonial from "./Testimonial";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialData = [
  {
    id: 0,
    review:
      "We had no online presence before partnering with the team. They built a professional, industry-focused website that led to a clear increase in customer inquiries. The process was smooth and efficient from start to finish.",
    // reviewerImg: "/path/to/image.jpg",
    reviewerName: "Karson Kolle",
    reviewerTitle: "Founder at Duct Daddy",
  },
  {
    id: 1,
    review:
      "Working with this team was a game-changer for our business. They took the time to understand our needs and delivered a website that not only looks great but also performs exceptionally well. Highly recommend!",
    reviewerName: "John Doe",
    reviewerTitle: "CEO at Tech Innovations",
  },
  {
    id: 2,
    review:
      "From the initial consultation to the final launch, the team was professional and attentive. They transformed our outdated website into a modern, user-friendly platform that has received rave reviews from our customers.",
    reviewerName: "Jane Smith",
    reviewerTitle: "Marketing Director at Creative Solutions",
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
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col justify-between gap-12 lg:items-end lg:flex-row">
          <h2 className="text-[#f5f5f5] text-4xl/[2.6rem] font-semibold lg:text-start md:text-5xl/[3.4rem]">
            What our clients
            <br />
            are <span className="text-[#00b4ff] font-bold">saying</span> about
            <br />
            working with us
          </h2>
          <div className="flex items-center justify-end gap-4">
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
            // reviewerImg={currentTestimonial.reviewerImg}
            reviewerName={currentTestimonial.reviewerName}
            reviewerTitle={currentTestimonial.reviewerTitle}
          />
        </div>
      </div>
    </section>
  );
}
