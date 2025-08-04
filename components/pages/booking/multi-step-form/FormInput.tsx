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
      <label htmlFor={name} className="text-black50 text-small font-inter">
        {label}
        {required && <span className="text-primary ml-2">*</span>}
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
        className={`mt-2 border-b border-black75 text-black75 py-4 focus:outline-none placeholder:text-black25`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p className="text-primary text-small font-inter mt-2 cursor-default" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}