"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = "",
  disabled = false,
  variant = 'primary',
}) => {
  const baseStyle = "px-4 py-2 rounded transition cursor-pointer font-bold text-base/[30px] sm:text-lg/[32px]";
  const variantStyle = {
    primary: "bg-[#01BAEF] text-[#040F16] hover:bg-[hsl(193,99%,37%)]",
    secondary: "bg-[#040F16] text-[#01BAEF]",
    ghost: "bg-transparent border border-[#01BAEF] text-[#040F16] hover:bg-[#01BAEF]",
  }[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;