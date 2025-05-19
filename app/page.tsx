import Hero from "./components/pages/home/Hero";
import Features from "./components/pages/home/Features";
import Services from "./components/pages/home/Services";
import Projects from "./components/pages/home/Projects";
import Testimonials from "./components/pages/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Projects />
      <Testimonials />
    </>
  );
};
