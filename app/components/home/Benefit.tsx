interface BenefitProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export default function BenefitCard({ icon: Icon, title, desc }: BenefitProps) {
  return (
    <div className="text-[#040F16] flex flex-col items-center w-56">
      <div className="bg-[rgba(154,232,254,0.5)] p-4 rounded-full">
        <Icon className="text-[hsl(193,99%,20%)] h-6 w-6" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[#040F16] text-3xl/[30px] font-bold tracking-[-0.031em] mt-5">
          {title}
        </h2>
        <p className="text-[rgba(4,15,22,0.7)] text-base/[30px] tracking-[0.016em] mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
};