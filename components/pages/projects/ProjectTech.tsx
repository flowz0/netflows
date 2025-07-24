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
    <li className="bg-black75 text-black5 text-small font-inter flex items-center gap-3 py-3 px-4 rounded-lg">
      <Icon className="w-6 h-6" style={{ color: `${iconColor}` }} />
      <p>
        {name}
      </p>
    </li>
  );
}