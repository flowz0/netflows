"use client";

import { useRef, useEffect } from "react";
import { useDatePicker } from "./useDatePicker";
import { MonthSelector } from "./MonthSelector";
import { YearSelector } from "./YearSelector";
import { format, isToday, isSameMonth, isSameDay } from "date-fns";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface DatePickerProps {
  defaultDate?: string;
  onSelectDate: (date: Date) => void;
}

export const DatePicker = ({ onSelectDate }: DatePickerProps) => {
  const {
    selectedDate,
    currentMonth,
    showMonthSelector,
    showYearSelector,
    setShowMonthSelector,
    setShowYearSelector,
    calendarDays,
    prevMonth,
    nextMonth,
    selectDate,
    handleMonthSelect,
    handleYearSelect,
  } = useDatePicker();

  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowMonthSelector(false);
        setShowYearSelector(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMonthSelector(false);
        setShowYearSelector(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowMonthSelector, setShowYearSelector]);

  return (
    <div ref={datePickerRef} className="bg-[#242424] rounded-lg h-[22rem] w-full max-w-[16rem]">
      <p className="text-[hsl(0,0%,60%)] text-center flex flex-col text-sm">
        Date Selected:
        {/* {selectedDate && ( */}
        <span className="bg-[hsl(0,0%,20%)] text-[hsl(0,0%,92%)] mt-2 py-3 px-5 rounded-lg text-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]">
          {selectedDate ? (
            format(selectedDate, "PPP")
          ) : (
            format(new Date(), "PPP")
          )}
        </span>
        {/* )} */}
      </p>
      {/* Header */}
      <div className="mt-8 flex justify-between items-center">
        <button type="button" onClick={prevMonth}>
          <FaArrowLeft className="text-neutral-500 w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-neutral-200 active:scale-95" />
        </button>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => {
              setShowMonthSelector((prev) => !prev);
              setShowYearSelector(false);
            }}
            className={`${showMonthSelector ? "bg-[hsl(198,100%,40%)]" : "bg-[hsl(0,0%,40%)]"}  text-neutral-200 rounded-lg px-2 py-1 text-sm font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-neutral-600`}
          >
            {/* {showMonthSelector ? <IoIosClose className="w-6 h-6" /> : format(currentMonth, "MMMM")} */}
            {format(currentMonth, "MMMM")}
          </button>
          <button
            type="button"
            onClick={() => {
              setShowYearSelector((prev) => !prev);
              setShowMonthSelector(false);
            }}
            className={`${showYearSelector ? "bg-[hsl(198,100%,40%)]" : "bg-[hsl(0,0%,40%)]"}  text-neutral-200 rounded-lg px-2 py-1 text-sm font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-neutral-600`}
          >
            {/* {showYearSelector ? <IoIosClose className="w-6 h-6" /> : format(currentMonth, "yyyy")} */}
            {format(currentMonth, "yyyy")}
          </button>
        </div>
        <button type="button" onClick={nextMonth}>
          <FaArrowRight className="text-neutral-500 w-4 h-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-neutral-200 active:scale-95" />
        </button>
      </div>

      {showMonthSelector ? (
        <MonthSelector
          onSelect={handleMonthSelect}
          selectedMonthIndex={currentMonth.getMonth()}
        />
      ) : showYearSelector ? (
        <YearSelector
          onSelect={handleYearSelect}
          selectedYear={currentMonth.getFullYear()}
        />
      ) : (
        <>
          <div className="mt-4 grid grid-cols-7 gap-2 text-center font-semibold text-sm text-[hsl(0,0%,80%)]">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-2 text-center text-sm">
            {calendarDays.map((day) => {
              const isCurrentMonth = isSameMonth(day, currentMonth);
              return (
                <button
                  type="button"
                  key={day.toISOString()}
                  onClick={() => {
                    selectDate(day);
                    onSelectDate(day);
                  }}
                  className={`p-1 rounded-full transition cursor-pointer 
                    ${selectedDate && isSameDay(day, selectedDate)
                      ? "ring-2 ring-[#0080DB]"
                      : "hover:bg-[hsl(0,0%,20%)]"}
                    ${!isCurrentMonth ? "text-[hsl(0,0%,40%)]" : "text-[hsl(0,0%,92%)]"}
                    ${isToday(day) ? "bg-[hsl(0,0%,40%)]" : ""}
                  `}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
