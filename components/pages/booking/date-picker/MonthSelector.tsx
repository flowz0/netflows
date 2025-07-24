type Props = {
  onSelect: (monthIndex: number) => void;
  selectedMonthIndex: number;
};

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const MonthSelector = ({ onSelect, selectedMonthIndex }: Props) => (
  <div className="mt-8 grid grid-cols-3 gap-2 text-small font-inter text-black75">
    {months.map((month, index) => (
      <button
        key={month}
        type="button"
        onClick={() => onSelect(index)}
        className={`px-2 py-2 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer
          ${index === selectedMonthIndex
            ? "bg-primary text-black5"
            : "text-black75 hover:bg-black10"}`}
      >
        {month}
      </button>
    ))}
  </div>
);
