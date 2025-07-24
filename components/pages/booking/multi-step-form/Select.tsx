"use client";

import { useState, useRef, useEffect } from "react";
import { FaArrowDown, FaCheck } from "react-icons/fa";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export default function Select({ label, options, selected, onChange, onBlur, error, required }: SelectProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <div className="flex flex-col">
        <label htmlFor="service" className="text-black50 text-small font-inter">
          {label}
          {required && <span className="text-primary ml-2">*</span>}
        </label>
        <input
          type="hidden"
          name="service"
          value={selected}
          onBlur={onBlur}
          autoComplete="off"
        />
        <button
          ref={buttonRef}
          aria-haspopup="listbox"
          id="service"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`mt-2 border-b border-black75 text-black75 py-4 focus:outline-none placeholder:text-black25 flex items-center justify-between w-full"
          }`}
        >
          <span
            className={`truncate ${selected === "" ? "text-black25" : " text-black75"
              }`}
          >
            {options.find((o) => o.value === selected)?.label || "Select a service"}
          </span>
          <FaArrowDown className={`text-black50 w-4 h-4 pointer-events-none transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`} />
        </button>
        {error && (
          <p className="text-primary text-small font-inter mt-2" id={`${name}-error`}>
            {error}
          </p>
        )}
        {open && (
          <ul
            ref={menuRef}
            tabIndex={-1}
            role="listbox"
            className="absolute z-30 max-h-64 bottom-[-256px] w-full sm:w-[400px] overflow-y-auto mt-2 bg-black5 flex flex-col text-base shadow-lg border focus:outline-none [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-black5 [&::-webkit-scrollbar-thumb]:bg-black-5 dark:[&::-webkit-scrollbar-track]:bg-black5 dark:[&::-webkit-scrollbar-thumb]:bg-black10"
          >
            {options.map((option) => (
              <li
                key={option.value}
                id="service"
                role="option"
                aria-selected={selected === option.value}
                className={`relative select-none py-3 px-5 flex items-center justify-between ${option.value === ""
                  ? "cursor-not-allowed text-black50 hover:bg-transparent"
                  : selected === option.value
                    ? "bg-black75 text-black5 cursor-pointer"
                    : "text-black75 hover:bg-black10 cursor-pointer"
                  }`}
                onClick={() => {
                  if (option.value !== "") {
                    onChange(option.value);
                    setOpen(false);
                  }
                }}
              >
                {option.label}
                {selected === option.value && option.value !== "" && (
                  <FaCheck className="text-primary w-4 h-4" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
