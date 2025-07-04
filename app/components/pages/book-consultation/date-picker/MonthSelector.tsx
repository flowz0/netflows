type Props = {
  onSelect: (monthIndex: number) => void;
  selectedMonthIndex: number;
};

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const MonthSelector = ({ onSelect, selectedMonthIndex }: Props) => (
  <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
    {months.map((month, index) => (
      <button
        key={month}
        type="button"
        onClick={() => onSelect(index)}
        className={`px-2 py-2 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer
          ${index === selectedMonthIndex
            ? "bg-[hsl(198,100%,40%)] text-[hsl(0,0%,92%)]"
            : "text-[hsl(0,0%,60%)] hover:bg-[hsl(0,0%,20%)]"}`}
      >
        {month}
      </button>
    ))}
  </div>
);
