import Hero from "./components/Home/Hero";
import ValueProposition from "./components/Home/Why/ValueProposition";
import Services from "./components/Home/Service/Services";
import CaseStudies from "./components/Home/Study/CaseStudies";
import Testimonials from "./components/Home/Testimonial/Testimonials";
import Process from "./components/Home/Process/Process";
import FAQs from "./components/Home/FAQ/FAQs";
import CTA from "./components/Home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Process />
      <FAQs />
      <CTA />
    </>
  );
};