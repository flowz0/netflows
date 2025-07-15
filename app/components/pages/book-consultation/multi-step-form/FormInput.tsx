interface Props {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  className?: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export default function FormInput({
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  autoComplete,
  error,
  required,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm">
        {label}
        {required && <span className="text-[hsl(0,100%,68%)] ml-1">*</span>}
      </label>
      <input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        autoComplete={autoComplete}
        className={`mt-2 bg-[hsl(0,0%,20%)] py-3 px-5 rounded-lg focus:outline-none placeholder:text-[hsl(0,0%,60%)] ${
          error ? "ring-2 ring-[hsl(0,100%,68%)]" : "focus:ring-2 focus:ring-[#0080DB]"
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