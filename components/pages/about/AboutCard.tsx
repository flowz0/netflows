import { AboutCardProps } from "@/types/about.type";

export default function AboutCard({ title, desc, Icon }: AboutCardProps) {
  return (
    <div className="flex gap-x-8">
      <div>
        <Icon className="text-primary w-12 h-12" />
      </div>
      <div>
        <h6 className="text-black text-h6 font-bold font-nunito">
          {title}
        </h6>
        <p className="text-black75 text-p font-inter mt-4">
          {desc}
        </p>
      </div>
    </div>
  );
}