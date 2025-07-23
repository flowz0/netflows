import Image, { StaticImageData } from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialProps {
  review: string;
  reviewer: string;
  role: string;
  avatar: StaticImageData;
}

export default function TestimonialCard({
  review,
  reviewer,
  role,
  avatar
}: TestimonialProps) {
  return (
    <div className="border border-black75 py-8 px-8 rounded-2xl w-[400px]">
      <FaQuoteLeft className="text-primary w-6 h-6" />
      <p className="mt-4 text-p text-black">
        {review}
      </p>
      <div className="mt-8 flex items-center gap-x-4">
        <Image
          src={avatar}
          alt="Review avatar"
          className="h-16 w-16 rounded-full"
        />
        <div>
          <h6 className="text-p text-black">{reviewer}</h6>
          <p className="text-small text-black50">{role}</p>
        </div>
      </div>
    </div>
  );
}