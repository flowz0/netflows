import CTA from "../components/pages/home/CTA";
import FAQs from "../components/pages/home/FAQ/FAQs";
import Hero from "../components/pages/home/Hero";
import Process from "../components/pages/home/Process/Process";
import Services from "../components/pages/home/Service/Services";
import CaseStudies from "../components/pages/home/Study/CaseStudies";
import TestimonialSection from "../components/pages/home/Testimonial/Testimonials";
import ValueProposition from "../components/pages/home/Why/ValueProposition";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <CaseStudies />
      <TestimonialSection />
      <Process />
      <FAQs />
      <CTA />
    </>
  );
};