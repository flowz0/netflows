"use client";

interface PhoneInputProps {
  value: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function PhoneInput({
  value,
  onChange,
  onBlur,
  error,
}: PhoneInputProps) {
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
        id: "phone", // ✅ Needed for your form's handleChange to work
        name: "phone",
        value: formatted,
      },
    };

    onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="phone" className="text-sm font-inter text-black50">
        Phone Number <span className="text-primary">*</span>
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
        autoComplete="off"
        placeholder="(123) 456-7890"
        className={`mt-1 text-p font-nunito text-black75 ring py-2 px-4 rounded-lg focus:outline-none focus:ring-primary ${
          error ? "ring-primary" : "ring-black10"
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `phone-error` : undefined}
      />
      {error && (
        <p
          className="text-primary text-sm font-inter mt-1 cursor-default"
          id="phone-error"
        >
          {error}
        </p>
      )}
    </div>
  );
}
