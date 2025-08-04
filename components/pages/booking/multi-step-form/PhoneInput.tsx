"use client";

interface PhoneInputProps {
  value: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  error?: string;
  required?: boolean;
}

export default function PhoneInput({ value, onChange, onBlur, autoComplete, error, required }: PhoneInputProps) {
  const formatPhoneNumber = (input: string) => {
    const cleaned = input.replace(/\D/g, "").slice(0, 10);
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return input;

    const [, area, prefix, line] = match;
    let formatted = "";

    if (area.length > 0 && prefix.length > 0) {
      // Only format as (xxx) when prefix exists
      formatted += `(${area})`;
    } else {
      // Otherwise just show digits
      formatted += area;
    }
    if (prefix.length) {
      formatted += ` ${prefix}`;
    }
    if (line.length) {
      formatted += `-${line}`;
    }
    return formatted;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);

    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        name: "phone",
        value: formatted,
      },
    };

    onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-black50 text-small font-inter">
        Phone Number
        {required && <span className="text-primary ml-2">*</span>}
      </label>
      <input
        id="phone"
        name="phone"
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleInputChange}
        onBlur={onBlur}
        maxLength={14}
        autoComplete={autoComplete}
        placeholder="(555) 555-5555"
        className={`mt-2 border-b border-black75 text-black75 py-4 focus:outline-none placeholder:text-black25"
          }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p className="text-primary text-small font-inter mt-2 cursor-default" id="phone-error">
          {error}
        </p>
      )}
    </div>
  );
}
