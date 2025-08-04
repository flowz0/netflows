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
    <main className="mt-16 px-6 max-w-7xl mx-auto cursor-default lg:mt-32">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-black5 bg-secondary text-small font-inter w-fit py-1 px-4 rounded-full">About</p>
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
        <p className="mt-4 max-w-4xl text-p font-inter text-center text-black75 md:mt-8">
          Netflows is a web design and development agency focused on helping startups and service-based businesses turn visitors into loyal customers. From fast-loading landing pages to scalable full-stack solutions, we build web experiences that don&apos;t just look great but drive results.
        </p>

        <div className="flex gap-x-12 mt-4 sm:gap-x-8 md:mt-8">
          <Link href="mailto:contact@netflows.xyz" className="text-black50 transition-colors duration-300 ease-in-out hover:text-primary">
            <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
          <Link href="https://www.linkedin.com/company/netflowsxyz/about" target="_blank" className="text-black50 transition-colors duration-300 ease-in-out hover:text-primary">
            <SiLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
          <Link href="/" className="text-black50 transition-colors duration-300 ease-in-out hover:text-primary">
            <SiFacebook className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
        </div>
      </div>

      <div className="mt-32 md:mt-64">
        <div className="flex flex-col">
          <h2 className="text-black text-h4 font-bold font-nunito sm:text-h2">
            Why Choose Us
          </h2>
          <p className="text-black75 max-w-3xl text-p font-inter mt-4">
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
      <div className="mt-32 md:mt-64">
        <div className="flex flex-col">
          <h2 className="text-black text-h4 font-bold font-nunito text-center sm:text-h2">
            The Impact So Far
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-y-8 md:mt-12 md:grid-cols-2">
            <div className="bg-black5 px-6 md:px-12">
              <div className="flex flex-col items-center">
                <FaRocket className="text-primary w-16 h-16 md:w-24 md:h-24" />
                <h6 className="text-black text-h5 font-bold font-nunito text-center mt-4 md:mt-8 md:text-h4">
                  25+ Solutions Launched
                </h6>
                <p className="text-black75 text-p font-inter text-center mt-2 md:mt-4">
                  From high converting websites to custom full-stack builds, each solution is crafted to meet real business goals and drive results.
                </p>
              </div>
            </div>
            <div className="bg-black5 px-6 md:px-12">
              <div className="flex flex-col items-center">
                <FaSmile className="text-primary w-16 h-16 md:w-24 md:h-24" />
                <h6 className="text-black text-h5 md:text-h4 font-bold font-nunito text-center mt-4 md:mt-8">
                  99.9% Partner Satisfaction
                </h6>
                <p className="text-black75 text-p font-inter text-center mt-2 md:mt-4">
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