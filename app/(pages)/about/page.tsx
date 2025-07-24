import AboutCard from "@/components/pages/about/AboutCard";
import {
  FaBullseye,
  FaTachometerAlt,
  FaHandshake,
  FaCubes,
  FaRocket,
  FaSmile
} from "react-icons/fa";

export default function Page() {
  return (
    <main className="mt-16 px-6 max-w-7xl mx-auto lg:mt-24">
      <div className="flex flex-col items-center">
        <h1 className="text-black text-h3 font-bold font-nunito text-center sm:text-h1">
          About Us
        </h1>
        <p className="mt-8 max-w-5xl text-p font-inter text-center text-black75">
          At Netflows, we&apos;re a California-based web design and development agency focused on helping startups and service-based businesses turn visitors into loyal customers. From fast-loading landing pages to scalable full-stack solutions, we build web experiences that don&apos;t just look great but drive results.
        </p>
      </div>

      <div className="mt-32">
        <div>
          <h2 className="text-black text-h4 font-bold font-nunito sm:text-h2">
            Why Choose Us
          </h2>
          <p className="mt-8 max-w-5xl text-p font-inter text-black75">
            We don&apos;t do cookie-cutter work. When you partner with Netflows, you get strategic thinking, expert execution, and real attention to what your business actually needs. Here&apos;s what makes us different:
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-16">
          <AboutCard
            title="Results-Driven Design"
            desc="Every decision we make—from layout to copy—is focused on helping your users take action and your business grow."
            Icon={FaBullseye}
          />
          <AboutCard
            title="Built for Speed & Performance"
            desc="We obsess over performance. Our sites load fast, run smoothly, and are optimized to reduce bounce rates and increase engagement."
            Icon={FaTachometerAlt}
          />
          <AboutCard
            title="Goal-Oriented Collaboration"
            desc="We treat your goals like our own. Expect clear communication, quick turnarounds, and a process that respects your time."
            Icon={FaHandshake}
          />
          <AboutCard
            title="Scalable, Future-Ready Builds"
            desc="Need to grow later? No problem. We build with flexibility in mind so you can scale without starting over."
            Icon={FaCubes}
          />
        </div>
      </div>
      <div className="mt-32">
        <div className="flex flex-col">
          <h2 className="text-black text-h4 font-bold font-nunito text-center sm:text-h2">
            The Impact So Far
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="border border-black bg-black5 rounded-lg py-8 px-8">
              <div className="flex flex-col">
                <FaRocket className="text-primary w-16 h-16" />
                <h6 className="text-black text-h5 md:text-h4 font-bold font-nunito mt-8">
                  25+ Solutions Launched
                </h6>
                <p className="text-black75 text-p font-inter mt-4">
                  From high-converting landing pages to custom full-stack builds, each solution is crafted to meet real business goals and drive results.
                </p>
              </div>
            </div>
            <div className="border border-black bg-black5 rounded-lg py-8 px-8">
              <div className="flex flex-col">
                <FaSmile className="text-primary w-16 h-16" />
                <h6 className="text-black text-h5 md:text-h4 font-bold font-nunito mt-8">
                  99% Client Satisfaction
                </h6>
                <p className="text-black75 text-p font-inter mt-4">
                  Every solution ends with a happy client. Our commitment to clear communication, quality work, and dependable support ensures it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}