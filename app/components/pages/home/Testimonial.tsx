import Image, { StaticImageData } from "next/image";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import PlaceholderImg from "@/public/2000x2000.svg";

type TestimonialProps = {
  review: string;
  reviewerImg?: StaticImageData;
  reviewerName: string;
  reviewerTitle: string;
};

export default function Testimonial({
  review,
  reviewerImg,
  reviewerName,
  reviewerTitle,
}: TestimonialProps) {
  return (
    <div className="bg-[hsl(0,0%,14%)] px-7 py-8 rounded-lg md:max-w-2/3">
      <div className="text-amber-300 flex gap-1">
        <FaStar className="w-6 h-6" />
        <FaStar className="w-6 h-6" />
        <FaStar className="w-6 h-6" />
        <FaStar className="w-6 h-6" />
        <FaStarHalfAlt className="w-6 h-6" />
      </div>
      <p className="text-[#f5f5f5] text-base/[1.8rem] mt-5 max-w-2xl lg:mx-0 md:text-lg/[1.8rem]">
        {review}
      </p>
      <div className="flex items-start gap-4 mt-4">
        <Image
          src={reviewerImg || PlaceholderImg}
          alt={`${reviewerName} reviewer image`}
          className="rounded-full w-12 h-12"
        />
        <div>
          <h3 className="text-[#f5f5f5] max-w-2xl mx-auto font-semibold lg:text-start lg:mx-0">
            {reviewerName}
          </h3>
          <h4 className="text-[#a8a8a8]">{reviewerTitle}</h4>
        </div>
      </div>
    </div>
  );
}
