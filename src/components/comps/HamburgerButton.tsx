// src/components/HamburgerButton.tsx
import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  strokeColor?: string;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  strokeColor = "white",
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      className="relative flex items-center justify-center w-10 h-10 cursor-pointer group"
    >
      <svg
        viewBox="0 0 32 32"
        className={`w-8 h-8 transition-transform duration-600 ease-in-out ${
          isOpen ? "-rotate-45" : "rotate-0"
        }`}
      >
        <path
          className={`transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-in-out stroke-[${strokeColor}]`}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          fill="none"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: isOpen ? "20 300" : "12 63",
            strokeDashoffset: isOpen ? -32.42 : 0,
          }}
        />
        <path
          className={`transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-in-out stroke-[${strokeColor}]`}
          d="M7 16 27 16"
          fill="none"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default HamburgerButton;
