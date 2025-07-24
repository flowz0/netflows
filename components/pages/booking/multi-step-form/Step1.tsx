import PhoneInput from "./PhoneInput";
import Select from "./Select";
import FormInput from "./FormInput";
import TextArea from "./TextArea";
import { Step1Props } from "@/types/step.type";
import Button from "@/components/Button";

export default function Step1({
  formData,
  handleChange,
  onInputBlur,
  onTextareaBlur,
  error,
  nextStep
}: Step1Props) {
  return (
    <div className="flex flex-col mt-12 sm:mt-16">
      <div className="flex flex-col gap-y-8">
        <FormInput
          name="firstName"
          label="First name"
          placeholder="John"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={onInputBlur}
          error={error?.firstName}
          autoComplete="given-name"
          required
        />
        <FormInput
          name="lastName"
          label="Last name"
          placeholder="Doe"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={onInputBlur}
          error={error?.lastName}
          autoComplete="family-name"
          required
        />
        <FormInput
          name="email"
          label="Email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={onInputBlur}
          error={error?.email}
          autoComplete="email"
          required
        />
        <PhoneInput
          value={formData.phone}
          onChange={handleChange}
          onBlur={onInputBlur}
          error={error?.phone}
          autoComplete="tel-national"
          required
        />
        <div className="flex flex-col">
          <Select
            label="Service"
            selected={formData.service}
            onChange={(value: string) => {
              const syntheticEvent = {
                target: {
                  name: "service",
                  value: value,
                },
              } as React.ChangeEvent<HTMLInputElement>;

              handleChange(syntheticEvent);
            }}
            onBlur={onInputBlur}
            error={error?.service}
            required
            options={[
              { value: "", label: "Choose a service" },
              { value: "web development", label: "Web Development" },
              { value: "web design", label: "Web Design" },
              { value: "maintenance & support", label: "Maintenance & Support" },
              { value: "web hosting", label: "Web Hosting" },
              { value: "domain name", label: "Domain Name" },
              { value: "SEO optimization", label: "SEO Optimization" },
              { value: "performance optimization", label: "Performance Optimization" },
              { value: "additional pages", label: "Additional Pages" },
              { value: "3rd party api integration", label: "3rd Party API Integration" },
            ]}
          />
        </div>
        <TextArea
          name="message"
          label="Message"
          placeholder="Additional information"
          value={formData.message}
          onChange={handleChange}
          onBlur={onTextareaBlur}
          error={error?.message}
          required
        />
      </div>
      <Button
        text="Next"
        onClick={nextStep}
        className="mt-12 w-fit"
      />
    </div>
  );
}