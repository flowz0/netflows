"use client";

import FAQ from "./FAQ";
import faqData from "@/app/data/faqs";

export default function FAQs() {
  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 === 1);

  return (
    <section id="faqs" className="pt-32 pb-16 px-6 max-w-7xl mx-auto sm:pb-32">
      <div className="flex flex-col items-center">
        <p className="bg-[#00b3ff] text-[#0a0a0a] font-bold py-1 px-5 rounded-full">FAQs</p>
        <h2 className="text-[#f5f5f5] mt-4 text-4xl font-semibold text-center md:text-5xl">
          Everything You
          <br />
          Need to Know
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {leftColumn.map(({ question, answer }, index) => (
            <FAQ key={index} question={question} answer={answer} />
          ))}
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {rightColumn.map(({ question, answer }, index) => (
            <FAQ key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}