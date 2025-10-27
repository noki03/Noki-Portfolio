import React from "react";

interface FloatingDotsProps {
  count?: number; // Number of dots
  areaHeight?: number; // Optional height limit for random positions
  areaWidth?: number; // Optional width limit for random positions
}

const FloatingDots: React.FC<FloatingDotsProps> = ({
  count = 50,
  areaHeight = 800,
  areaWidth = 1920,
}) => {
  const dots = Array.from({ length: count }).map((_, i) => {
    const top = Math.random() * areaHeight;
    const left = Math.random() * areaWidth;
    const size = Math.random() * 20 + 2; // size 2–8px
    const delay = Math.random() * 2000; // animation delay
    const opacity = Math.random() * 0.6 + 0.1; // opacity 0.1–0.4

    return (
      <div
        key={i}
        className="absolute rounded-full bg-primary-400 animate-float blur-sm"
        style={{
          top: `${top}px`,
          left: `${left}px`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          animationDelay: `${delay}ms`,
        }}
      />
    );
  });

  return <>{dots}</>;
};

export default FloatingDots;
