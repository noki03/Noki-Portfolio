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
    const size = Math.random() * 20 + 2; // 2–22px
    const delay = Math.random() * 2000; // ms
    const opacity = Math.random() * 0.6 + 0.1; // 0.1–0.7

    // Limit tones to 100–600 only
    const tones = [100, 200, 300, 400, 500, 600];
    const tone = tones[Math.floor(Math.random() * tones.length)];

    // Randomly pick between primary and secondary color
    const palette = Math.random() > 0.5 ? "primary" : "secondary";

    // Tailwind-compatible dynamic color
    const colorClass = `bg-${palette}-${tone}`;

    return (
      <div
        key={i}
        className={`absolute rounded-full blur-sm animate-float ${colorClass}`}
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
