import { ElementType } from "react";

interface TechProps {
  Icon: ElementType;
  name: string;
  iconColor: string;
}

export default function ProjectTech({ Icon, name, iconColor }: TechProps) {
  return (
    <li className="bg-[hsl(0,0%,14%)] flex items-center gap-3 py-2 px-3 rounded-lg text-sm">
      <Icon className={`text-[#${iconColor}] w-5 h-5`} />
      <p>
        {name}
      </p>
    </li>
  );
}