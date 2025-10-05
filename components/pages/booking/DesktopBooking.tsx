import Image from "next/image";
import { FaComments, FaUsers, FaChartLine, FaTasks, FaHandshake, FaQuoteLeft } from "react-icons/fa";
import ReviewerImg from "@/public/testimonials/NoahMathews.jpg";
import Booking from "./Booking";

export default function DesktopBooking() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
      <div>
        <div>
          <h1 className="text-black text-h3 font-bold font-nunito">
            Let&apos;s <span className="text-primary">Uncover</span> What Your <span className="text-primary">Business</span> Needs Online
          </h1>
          <p className="mt-4 max-w-xl text-p font-inter text-black75">
            This call is focused on understanding your business, goals, and challenges so we can recommend the right solution. It&apos;s the first step in building something valuable together.
          </p>
        </div>
        <div>
          <div className="mt-8 flex flex-col gap-y-4">
            {/* bullet points & reviews */}
            <div className="w-fit flex items-center gap-x-4">
              <div className="bg-primary text-black5 p-3 rounded-full w-fit">
                <FaComments className="size-5" />
              </div>
              <p className="text-sm font-inter text-black75">
                A deep understanding of your business, goals, and challenges so we can recommend the best-fit solution.
              </p>
            </div>
            <div className="w-fit flex items-center gap-x-4">
              <div className="bg-primary text-black5 p-3 rounded-full w-fit">
                <FaUsers className="size-5" />
              </div>
              <p className="text-sm font-inter text-black75">
                Clarity around your audience and how your digital presence can better serve them.
              </p>
            </div>
            <div className="w-fit flex items-center gap-x-4">
              <div className="bg-primary text-black5 p-3 rounded-full w-fit">
                <FaChartLine className="size-5" />
              </div>
              <p className="text-sm font-inter text-black75">
                Insight into which services will create the most impact, whether it&apos;s a landing page, full website, or custom web app.
              </p>
            </div>
            <div className="w-fit flex items-center gap-x-4">
              <div className="bg-primary text-black5 p-3 rounded-full w-fit">
                <FaTasks className="size-5" />
              </div>
              <p className="text-sm font-inter text-black75">
                A collaborative conversation to align on priorities, features, timeline, and scope.
              </p>
            </div>
            <div className="w-fit flex items-center gap-x-4">
              <div className="bg-primary text-black5 p-3 rounded-full w-fit">
                <FaHandshake className="size-5" />
              </div>
              <p className="text-sm font-inter text-black75">
                A no-pressure experience where our only goal is to provide clarity and value. Not sell you something you don&apos;t need.
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* review */}
          <div className="mt-4 relative">
            <div className="absolute -left-2 -z-10">
              <FaQuoteLeft className="size-24 text-black10/40" />
            </div>
            <div className="pt-8 z-10">
              <p className="text-p font-inter max-w-lg text-black75">
                &quot;I came in with no idea what I needed. They asked the right questions, broke things down clearly, and made me feel completely confident in the next steps.&quot;
              </p>
              <div className="flex items-center gap-x-4 mt-4">
                <Image
                  src={ReviewerImg}
                  alt="Reviewer picture"
                  className="w-16 h-16 rounded-full object-cover"
                  priority={true}
                  quality={75}
                  width={400}
                  height={400}
                  draggable={false}
                  loading="eager"
                />
                <div>
                  <h4 className="text-h6 font-bold font-nunito text-black75">Noah Mathews</h4>
                  <p className="text-p font-inter text-black50">Founder & President</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Booking />
      </div>
    </div>
  );
}