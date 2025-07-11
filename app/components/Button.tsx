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
  const baseStyle = "px-7 py-2 rounded-full transition cursor-pointer font-bold text-base/[30px] tracking-[0.016em]";
  const variantStyle = {
    primary: "bg-[#00b4ff] text-[#0a0a0a] relative overflow-hidden z-0 transition-all duration-300 ease-in-out hover:bg-[hsl(198,100%,40%)] active:bg-[hsl(198,100%,32%)]",
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
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;