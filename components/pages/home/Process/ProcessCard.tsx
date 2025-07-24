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
    <div className="border h-[400px] lg:h-[480px] border-black py-8 px-8 rounded-2xl flex flex-col justify-between">
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