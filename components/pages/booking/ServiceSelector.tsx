'use client';

const SERVICES = [
  'Web Design',
  'Web Development',
  'Maintenance & Support',
  'Other',
];

type ServiceSelectorProps = {
  selected: string[];
  onChange?: (selected: string[]) => void;
};

export default function ServiceSelector({ selected, onChange }: ServiceSelectorProps) {
  const toggleService = (service: string) => {
    const isSelected = selected.includes(service);
    const updated = isSelected
      ? selected.filter(s => s !== service)
      : [...selected, service];

    onChange?.(updated);
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-inter text-black50">
        How Can We Help You?{' '}
        <span className="text-black10">(Select all that apply)</span>{' '}
        <span className="text-primary">*</span>
      </label>
      <div className="flex flex-wrap gap-2 mt-2">
        {SERVICES.map(service => {
          const isSelected = selected.includes(service);
          return (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={`px-5 py-2 rounded-full font-nunito font-p font-bold cursor-pointer border border-black10 transition-all duration-300 ease-in-out ${
                isSelected
                  ? 'bg-primary text-black5 border-primary'
                  : 'bg-black5 text-black50 hover:bg-black10/20'
              }`}
            >
              {service}
            </button>
          );
        })}
      </div>
    </div>
  );
}