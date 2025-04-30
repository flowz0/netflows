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
  const baseStyle = "px-5 py-2 rounded-lg transition cursor-pointer font-bold text-base/[30px] tracking-[0.016em]";
  const variantStyle = {
    primary: "bg-[#01BAEF] text-[#efefef] duration-500 transition-colors hover:bg-[#0193bc] active:bg-[#016b89]",
    secondary: "bg-[#040F16] text-[#01BAEF]",
    ghost: "bg-transparent border border-[#01BAEF] text-[#FBFBFF] hover:bg-[#01BAEF]",
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