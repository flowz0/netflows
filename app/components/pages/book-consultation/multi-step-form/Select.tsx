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
    <div className="relative inline-block w-full">
      <label htmlFor="service" className="text-[hsl(0,0%,80%)] text-sm">
        {label}
        {required && <span className="text-[hsl(0,100%,68%)] ml-1">*</span>}
      </label>
      <input
        type="hidden"
        name="service"
        value={selected}
        onBlur={onBlur}
      />
      <button
        ref={buttonRef}
        aria-haspopup="listbox"
        id="service"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg flex items-center justify-between w-full focus:outline-none placeholder:text-[hsl(0,0%,60%)] ${error ? "ring-2 ring-[hsl(0,100%,68%)]" : "focus:ring-2 focus:ring-[#0080DB]"
          }`}
      >
        <span
          className={`truncate ${selected === "" ? "text-[hsl(0,0%,60%)]" : "text-[hsl(0,0%,92%)]"
            }`}
        >
          {options.find((o) => o.value === selected)?.label || "Select a service"}
        </span>
        <FaArrowDown className={`text-[hsl(0,0%,60%)] w-4 h-4 pointer-events-none transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`} />
      </button>
      {error && (
        <p className="text-sm text-[hsl(0,100%,68%)] mt-2" id={`${name}-error`}>
          {error}
        </p>
      )}
      {open && (
        <ul
          ref={menuRef}
          tabIndex={-1}
          role="listbox"
          className="absolute z-10 max-h-60 w-full overflow-y-auto mt-2 rounded-lg bg-[#242424] flex flex-col gap-y-1 text-base shadow-lg ring-2 ring-[#0080DB] focus:outline-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-300 [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-400"
        >
          {options.map((option) => (
            <li
              key={option.value}
              id="service"
              role="option"
              aria-selected={selected === option.value}
              className={`relative select-none py-3 px-5 rounded-lg flex items-center justify-between ${option.value === ""
                ? "cursor-not-allowed text-[hsl(0,0%,40%)] hover:bg-transparent"
                : selected === option.value
                  ? "bg-[hsl(0,0%,20%)] text-[hsl(0,0%,92%)] cursor-pointer"
                  : "text-[hsl(0,0%,60%)] hover:bg-[hsl(0,0%,20%)] cursor-pointer"
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
                <FaCheck className="text-[#0080DB] w-4 h-4" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
