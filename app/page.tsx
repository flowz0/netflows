import Hero from "./components/pages/home/Hero";
import Features from "./components/pages/home/Features";
import Services from "./components/pages/home/Services";
import Projects from "./components/pages/home/Projects";
import Testimonials from "./components/pages/home/Testimonials";
import FAQs from "./components/pages/home/FAQs";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Projects />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
  );
};
