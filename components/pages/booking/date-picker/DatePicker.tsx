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
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  required?: boolean;
  error?: string;
}

export const DatePicker = ({ defaultDate, onSelectDate, required, error, onBlur }: DatePickerProps) => {
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
  } = useDatePicker(defaultDate);

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
    <div ref={datePickerRef} className="w-full max-w-[16rem] sm:max-w-[32rem]">
      <p className="text-black50 text-small font-inter flex flex-col">
        <span>Date{required && <span className="text-primary ml-2">*</span>}</span>
        <span onBlur={onBlur} className={`mt-2 border-b border-black75 text-black py-4 focus:outline-none placeholder:text-black25 ${selectedDate ? "text-black75" : "text-black25"}`}>
          {selectedDate ? (
            format(selectedDate, "PPP")
          ) : (
            "Select a date"
          )}
        </span>
      </p>
      {error && (
        <p className="text-primary text-small font-inter mt-2" id="date-error">
          {error}
        </p>
      )}
      {/* Header */}
      <div className="mt-16 flex justify-between items-center">
        <button type="button" onClick={prevMonth}>
          <FaArrowLeft className="text-black25 w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary hover:scale-95" />
        </button>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => {
              setShowMonthSelector((prev) => !prev);
              setShowYearSelector(false);
            }}
            className={`${showMonthSelector ? "bg-primary text-black5" : "bg-black10"} rounded-lg px-2 py-1 text-small font-inter cursor-pointer transition-colors duration-300 ease-in-out hover:bg-primary hover:text-black5`}
          >
            {format(currentMonth, "MMMM")}
          </button>
          <button
            type="button"
            onClick={() => {
              setShowYearSelector((prev) => !prev);
              setShowMonthSelector(false);
            }}
            className={`${showYearSelector ? "bg-primary text-black5" : "bg-black10"} rounded-lg px-2 py-1 text-small font-inter cursor-pointer transition-colors duration-300 ease-in-out hover:bg-primary hover:text-black5`}
          >
            {format(currentMonth, "yyyy")}
          </button>
        </div>
        <button type="button" onClick={nextMonth}>
          <FaArrowRight className="text-black25 w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary hover:scale-95" />
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
          <div className="mt-8 grid grid-cols-7 gap-2 text-center text-small font-inter text-black50">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm">
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
                  id="date"
                  name="date"
                  className={`p-1 sm:h-16 rounded-full transition cursor-pointer hover:bg-black10 
                    ${selectedDate && isSameDay(day, selectedDate)
                      ? "ring ring-primary"
                      : "hover:bg-black10"}
                    ${!isCurrentMonth ? "text-black25" : "text-black"}
                    ${isToday(day) ? "bg-primary text-black5" : ""}
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
