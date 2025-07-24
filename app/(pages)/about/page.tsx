import AboutCard from "@/components/pages/about/AboutCard";
import Image from "next/image";
import {
  FaBullseye,
  FaTachometerAlt,
  FaHandshake,
  FaCubes,
  FaRocket,
  FaSmile
} from "react-icons/fa";
import NetflowsImg from "@/public/netflows-brand-transparent.png";
import Link from "next/link";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa6";

export default function Page() {
  return (
    <main className="mt-16 px-6 max-w-7xl mx-auto cursor-default lg:mt-24">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-black5 bg-gradient-to-r from-primary to-secondary text-small font-inter w-fit py-1 px-4 rounded-full">About</p>
          <Image
            src={NetflowsImg}
            alt="Netflows brand"
            className="h-full max-h-32 w-full mt-12 transition-transform duration-300 ease-in-out hover:-translate-y-2"
            draggable={false}
            priority={true}
            quality={100}
            loading="eager"
          />
        </div>
        <p className="mt-8 max-w-5xl text-p font-inter text-center text-black75">
          Netflows is a web design and development agency focused on helping startups and service-based businesses turn visitors into loyal customers. From fast-loading landing pages to scalable full-stack solutions, we build web experiences that don&apos;t just look great but drive results.
        </p>

        <div className="flex gap-x-12 sm:gap-x-16 mt-16">
          <Link href="mailto:contact@netflows.xyz" className="text-black75 transition-colors duration-300 ease-in-out hover:text-secondary">
            <FaEnvelope className="w-10 h-10 sm:w-12 sm:h-12" />
          </Link>
          <Link href="https://www.linkedin.com/company/netflowsxyz/about" target="_blank" className="text-black75 transition-colors duration-300 ease-in-out hover:text-secondary">
            <SiLinkedin className="w-10 h-10 sm:w-12 sm:h-12" />
          </Link>
          <Link href="/" className="text-black75 transition-colors duration-300 ease-in-out hover:text-secondary">
            <SiFacebook className="w-10 h-10 sm:w-12 sm:h-12" />
          </Link>
        </div>
      </div>

      <div className="mt-64">
        <div className="flex flex-col">
          <h2 className="text-black text-h4 font-bold font-nunito sm:text-h2">
            Why Choose Us
          </h2>
          <p className="text-black75 max-w-3xl text-p font-inter mt-8">
            When you partner with Netflows, you get strategic thinking, expert execution, and real attention to what your business actually needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-16">
          <AboutCard
            title="User engagement"
            desc="Every decision we make, from layout to copy, is focused on helping your users take action to grow your business."
            Icon={FaBullseye}
          />
          <AboutCard
            title="Performance optimization"
            desc="We obsess over performance. Our sites load fast, run smoothly, and are optimized to reduce bounce rates and increase engagement."
            Icon={FaTachometerAlt}
          />
          <AboutCard
            title="Collaboration commitment"
            desc="We treat your goals like our own. Expect clear communication, quick turnarounds, and a process that respects your time."
            Icon={FaHandshake}
          />
          <AboutCard
            title="Scalable solution"
            desc="Need to grow later? No problem. We build with flexibility in mind so you can scale without starting over."
            Icon={FaCubes}
          />
        </div>
      </div>
      <div className="mt-64">
        <div className="flex flex-col">
          <h2 className="text-black text-h4 font-bold font-nunito text-center sm:text-h2">
            The Impact So Far
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="border border-black bg-black5 rounded-lg py-16 px-8 transition-transform duration-300 ease-in-out hover:-translate-y-4">
              <div className="flex flex-col items-center">
                <FaRocket className="text-primary w-20 h-20 sm:w-28 sm:h-28" />
                <h6 className="text-black text-h5 font-bold font-nunito text-center mt-12 md:text-h4">
                  25+ Solutions launched
                </h6>
                <p className="text-black75 text-p font-inter text-center mt-4">
                  From high-converting landing pages to custom full-stack builds, each solution is crafted to meet real business goals and drive results.
                </p>
              </div>
            </div>
            <div className="border border-black bg-black5 rounded-lg py-16 px-8 transition-transform duration-300 ease-in-out hover:-translate-y-4">
              <div className="flex flex-col items-center">
                <FaSmile className="text-primary w-20 h-20 sm:w-28 sm:h-28" />
                <h6 className="text-black text-h5 md:text-h4 font-bold font-nunito text-center mt-12">
                  99.9% Partner satisfaction
                </h6>
                <p className="text-black75 text-p font-inter text-center mt-4">
                  Every solution ends with a happy partner. Our commitment to clear communication, quality work, and dependable support ensures it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}