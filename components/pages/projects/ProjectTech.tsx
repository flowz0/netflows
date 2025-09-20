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
    <li className="bg-black10/60 text-black75 text-small font-inter flex items-center gap-3 py-2 px-3 rounded-lg">
      <Icon className="w-6 h-6" style={{ color: `${iconColor}` }} />
      <p>
        {name}
      </p>
    </li>
  );
}