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
    <div className="border h-[320px] lg:h-[440px] border-black py-8 px-8 rounded-2xl flex flex-col justify-between cursor-default">
      <h6 className="text-black text-h6 font-bold font-nunito">
        {step}
        <br />
        {title}
      </h6>
      <p className="text-black75 text-p font-inter">
        {desc}
      </p>
    </div>
  );
}