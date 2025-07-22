'use client';

import { useRef, useState } from 'react';

interface ExpandingCircleButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function ExpandingCircleButton({
  text = 'Book Free Consultation',
  onClick,
  className,
}: ExpandingCircleButtonProps) {
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
      className={`${className} relative overflow-hidden py-4 px-8 text-p font-inter rounded-2xl cursor-pointer text-black5 bg-gradient-to-r from-primary to-secondary`}
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
