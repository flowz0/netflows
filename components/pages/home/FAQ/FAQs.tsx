import faqData from "@/data/faq.data";
import FAQItem from "./FAQItem";
import FaqData from "@/data/faq.data";

export default function FAQs() {
  return (
    <section className="mt-64 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-h4 font-bold font-nunito text-center text-black sm:text-h2">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-p max-w-6xl text-center font-inter text-black75">
          If you still have questions that we didn&apos;t answer here.
          <br />
          Please feel free to email us contact@netflows.xyz
        </p>
      </div>

      <div className="mt-16">
        {FaqData.map(({question, answer}, index) => (
          <div key={index}>
            <FAQItem
              question={question}
              answer={answer}
            />
            {index !== faqData.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
}