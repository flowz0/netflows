"use client";

interface PhoneNumberProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PhoneNumber({ value, onChange }: PhoneNumberProps) {
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
    onChange(formatted); // pass formatted value back up
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-[hsl(0,0%,80%)] text-sm">
        Phone Number
      </label>
      <input
        id="phone"
        name="phone"
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleInputChange}
        maxLength={14}
        placeholder="(555) 555-5555"
        className="mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg active:ring-0 focus:outline-none active:outline-none focus:border-none active:border-none placeholder:text-[hsl(0,0%,60%)] focus:ring-2 focus:ring-[#0080DB]"
      />
    </div>
  );
}
