'use client';

import { ButtonProps } from "@/types/button.type";
import { useRef, useState } from 'react';

export default function Button({
  text = 'Book Free Consultation',
  onClick,
  className,
  variant = 'primary'
}: ButtonProps) {
  const baseStyle = "py-4 px-8 text-p font-inter font-bold rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out active:scale-95";
  const variantStyle = {
    primary: "bg-primary text-black5",
    secondary: "bg-secondary text-black5",
    gradient: "text-black5 bg-gradient-to-r from-primary to-secondary",
  }[variant];
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState(0);
  const [scale, setScale] = useState(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Max distance from cursor to any corner of button
    const maxDist = Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y)
    );

    setCirclePos({ x, y });
    setCircleSize(maxDist * 2); // Diameter
    setScale(0); // Reset before animating in

    requestAnimationFrame(() => {
      setScale(1);
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Reposition the circle to cursor exit point
    setCirclePos({ x, y });
    setScale(0); // Animate back to 0
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`${baseStyle} ${variantStyle} ${className} relative overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Expanding + Shrinking Circle */}
      <span
        className="absolute bg-white opacity-10 pointer-events-none rounded-full transition-transform duration-500 ease-in-out"
        style={{
          top: circlePos.y,
          left: circlePos.x,
          width: circleSize,
          height: circleSize,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      />

      {/* Button Text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
}
