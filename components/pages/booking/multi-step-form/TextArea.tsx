interface Props {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

export default function TextArea({
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-black50 text-small font-inter">
        {label}
        {required && <span className="text-primary ml-2">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={4}
        required={required}
        autoComplete="off"
        className={`mt-2 border-b border-black75 text-black75 py-4 focus:outline-none placeholder:text-black25"
          }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p className="text-primary text-small font-inter mt-2" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}