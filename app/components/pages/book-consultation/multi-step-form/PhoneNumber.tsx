"use client";

interface PhoneNumberProps {
  value: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export default function PhoneNumber({ value, onChange, onBlur, error, required }: PhoneNumberProps) {
  const formatPhoneNumber = (input: string) => {
    const cleaned = input.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return input;

    const [, area, prefix, line] = match;
    let formatted = "";

    if (area) formatted += `(${area}`;
    if (area.length === 3) formatted += `) `;
    if (prefix) formatted += prefix;
    if (prefix.length === 3 && line) formatted += `-`;
    if (line) formatted += line;

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
      <label htmlFor="phone" className="text-[hsl(0,0%,80%)] text-sm">
        Phone Number
        {required && <span className="text-[hsl(0,100%,68%)] ml-1">*</span>}
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
        placeholder="(555) 555-5555"
        className={`mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg focus:outline-none placeholder:text-[hsl(0,0%,60%)] ${error ? "ring-2 ring-[hsl(0,100%,68%)]" : "focus:ring-2 focus:ring-[#0080DB]"
          }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p className="text-sm text-[hsl(0,100%,68%)] mt-2" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
