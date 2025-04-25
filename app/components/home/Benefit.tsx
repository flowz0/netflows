interface BenefitProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export default function BenefitCard({ icon: Icon, title, desc }: BenefitProps) {
  return (
    <div className="text-[#040F16] flex flex-col items-center justify-center gap-x-6 px-6 py-6 w-56 rounded-4xl">
      <div className="bg-[hsl(193,99%,80%)] p-4 rounded-full">
        <Icon className="text-[hsl(193,99%,20%)] h-12 w-12" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[#040F16] text-3xl/[30px] font-bold tracking-[-0.031em] mt-4">
          {title}
        </h2>
        <p className="text-[rgba(4,15,22,0.7)] text-base/[30px] tracking-[0.016em] mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
};