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
    <div className="border border-black75 py-8 px-8 rounded-2xl w-[400px] cursor-default">
      <FaQuoteLeft className="text-primary w-6 h-6" />
      <p className="text-black75 text-p font-inter mt-4">
        {review}
      </p>
      <div className="mt-8 flex items-center gap-x-4">
        <Image
          src={avatar}
          alt="Review avatar"
          className="h-16 w-16 object-cover object-top rounded-full"
          draggable={false}
          priority={false}
          quality={75}
          loading="lazy"
        />
        <div>
          <h6 className="text-black text-p font-medium font-inter">{reviewer}</h6>
          <p className="text-black75 text-small font-inter">{role}</p>
        </div>
      </div>
    </div>
  );
}