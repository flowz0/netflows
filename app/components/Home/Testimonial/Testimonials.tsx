import { bottomRow, topRow } from "@/app/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="mt-64">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
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
        {/* Gradient Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-linear-[90deg,rgba(243,242,243,1)_0%,rgba(243,242,243,0)_20%,rgba(243,242,243,0)_80%,rgba(243,242,243,1)_100%]"
        />

        {/* Testimonial Rows */}
        <div className="mt-16 max-w-full">
          <div className="flex gap-x-6 w-[150vw] relative left-[-32px]">
            {topRow.map((testimonial, index) => (
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
        <div className="mt-6 max-w-full">
          <div className="flex gap-x-6 w-[150vw] relative left-[-192px]">
            {bottomRow.map((testimonial, index) => (
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