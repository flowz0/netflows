import { useEffect, useRef } from "react";

type Props = {
  onSelect: (year: number) => void;
  selectedYear: number;
};

export const YearSelector = ({ onSelect, selectedYear }: Props) => {
  const years = Array.from({ length: 201 }, (_, i) => i + 1900);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const selectedEl = listRef.current.querySelector(
        `[data-year="${selectedYear}"]`
      );
      if (selectedEl) {
        (selectedEl as HTMLButtonElement).scrollIntoView({
          behavior: "auto",
          block: "center",
        });
      }
    }
  }, [selectedYear]);

  return (
    <div
      ref={listRef}
      className="mt-4 w-full grid grid-cols-4 gap-2 pr-1 max-h-48 overflow-y-auto text-sm [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-300 [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-400"
    >
      {years.map((year) => (
        <button
          key={year}
          data-year={year}
          type="button"
          onClick={() => onSelect(year)}
          className={`px-2 py-2 rounded-lg text-center transition-colors duration-300 ease-in-out cursor-pointer
            ${year === selectedYear
              ? "bg-[hsl(198,100%,40%)] text-[hsl(0,0%,92%)]"
              : "text-[hsl(0,0%,60%)] hover:bg-[hsl(0,0%,20%)]"}`}
        >
          {year}
        </button>
      ))}
    </div>
  );
};
