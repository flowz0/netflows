export default function ProjectTech({
  Icon,
  name,
  iconColor
}: {
  Icon: React.ElementType;
  name: string;
  iconColor: string
}) {
  return (
    <li className="bg-[hsl(0,0%,14%)] flex items-center gap-3 py-2 px-3 rounded-lg text-sm">
      <Icon className="w-5 h-5" style={{ color: `${iconColor}` }} />
      <p>
        {name}
      </p>
    </li>
  );
}