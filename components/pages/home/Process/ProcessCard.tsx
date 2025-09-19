interface ProcessCardProps {
  step: string;
  title: string;
  desc: string;
}

export default function ProcessCard({
  step,
  title,
  desc
}: ProcessCardProps) {
  return (
    <div className="border min-h-[340px] lg:min-h-[500px] border-black py-8 px-8 rounded-2xl flex flex-col justify-between cursor-default">
      <div className="text-black font-bold font-nunito">
        <h5 className="text-h4">
          {step}
        </h5>
        <h6 className="text-h6 mt-4">
          {title}
        </h6>
      </div>
      <p className="text-black75 text-p mt-8 font-inter">
        {desc}
      </p>
    </div>
  );
}