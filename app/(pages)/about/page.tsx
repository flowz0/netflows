import AboutCard from "@/components/pages/about/AboutCard";
import Image from "next/image";
import {
  FaBullseye,
  FaTachometerAlt,
  FaHandshake,
  FaCubes,
} from "react-icons/fa";
import NetflowsImg from "@/public/netflows-brand-transparent.png";

export default function Page() {
  return (
    <main className="mt-8 px-6 max-w-7xl mx-auto cursor-default lg:mt-16">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Image
            src={NetflowsImg}
            alt="Netflows brand"
            className="h-full max-h-32 w-full mt-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"
            draggable={false}
            priority={true}
            quality={100}
            loading="eager"
          />
        </div>
        <p className="mt-8 max-w-4xl text-p font-inter text-center text-black75 md:mt-12">
          Netflows is a web development and design agency focused on helping startups and service-based businesses turn visitors into loyal customers. From fast-loading landing pages to scalable full-stack solutions, we build web experiences that don&apos;t just look great but drive results.
        </p>
      </div>
      <div className="mt-12 md:mt-20">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3">
            <div className="bg-black5 px-6 md:px-12">
              <div className="flex flex-col items-center">
                <h2 className="text-black text-h3 font-bold font-nunito text-center mt-4 md:mt-8 md:text-h2">
                  34+
                </h2>
                <p className="text-black75 text-p font-inter text-center mt-2 md:mt-4">
                  Solutions Launched
                </p>
              </div>
            </div>
            <div className="bg-black5 px-6 md:px-12">
              <div className="flex flex-col items-center">
                <h2 className="text-black text-h3 font-bold font-nunito text-center mt-4 md:mt-8 md:text-h2">
                  99.9%
                </h2>
                <p className="text-black75 text-p font-inter text-center mt-2 md:mt-4">
                  Partner Satisfaction
                </p>
              </div>
            </div>
            <div className="bg-black5 px-6 md:px-12">
              <div className="flex flex-col items-center">
                <h2 className="text-black text-h3 font-bold font-nunito text-center mt-4 md:mt-8 md:text-h2">
                  24/7
                </h2>
                <p className="text-black75 text-p font-inter text-center mt-2 md:mt-4">
                  Solution Uptime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 md:mt-64">
        <div className="flex flex-col items-center">
          <h2 className="text-black text-h4 font-bold font-nunito text-center sm:text-h2">
            Why Choose Us
          </h2>
          <p className="text-black75 max-w-xl text-p font-inter text-center mt-4">
            When you partner with Netflows, you get strategic thinking, expert execution, and real attention to what your business actually needs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-4 md:mt-16 md:grid-cols-2 md:gap-x-4">
          <AboutCard
            title="User engagement"
            desc="Every decision we make, from layout to copy, is focused on helping your users take action to grow your business."
            Icon={FaBullseye}
          />
          <AboutCard
            title="Performance optimization"
            desc="Our sites are lightning fast, run smoothly, and are optimized to reduce bounce rates and increase engagement."
            Icon={FaTachometerAlt}
          />
          <AboutCard
            title="Collaborative commitment"
            desc="We treat your goals like our own. Expect clear communication, quick turnarounds, and a process that respects your time."
            Icon={FaHandshake}
          />
          <AboutCard
            title="Scalable solutions"
            desc="Need to grow later? No problem. We build with flexibility in mind so you can scale without starting over."
            Icon={FaCubes}
          />
        </div>
      </div>
    </main>
  );
}