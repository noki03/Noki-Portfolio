import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FloatingDotsProps {
  count?: number;
  areaHeight?: number;
  areaWidth?: number;
  verticalMarginRatio?: number;
}

const FloatingDots: React.FC<FloatingDotsProps> = ({
  count = 50,
  areaHeight = 800,
  areaWidth = 1920,
  verticalMarginRatio = 0.05,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const topMargin = areaHeight * verticalMarginRatio;
  const bottomLimit = areaHeight - topMargin;

  const dots = Array.from({ length: count }).map((_, i) => {
    const top = Math.random() * (bottomLimit - topMargin) + topMargin;
    const left = Math.random() * areaWidth;
    const size = Math.random() * 20 + 2; // 2–22px
    const delay = Math.random() * 5; // seconds
    const duration = Math.random() * 4 + 4; // 4–8s per float loop
    const opacity = Math.random() * 0.6 + 0.1;

    // Color tone
    const tones = [100, 200, 300, 400, 500, 600];
    const tone = tones[Math.floor(Math.random() * tones.length)];
    const palette = Math.random() > 0.5 ? "primary" : "secondary";
    const colorClass = `bg-${palette}-${tone}`;

    // Each dot floats up and down slightly + wiggle sideways
    const floatDistance = Math.random() * 20 + 10; // px

    return (
      <motion.div
        key={i}
        className={`absolute rounded-full blur-sm ${colorClass}`}
        style={{
          top: `${top}px`,
          left: `${left}px`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
        }}
        animate={
          isInView
            ? {
                y: [0, -floatDistance, 0],
                x: [0, Math.random() * 10 - 5, 0],
              }
            : {}
        }
        transition={
          isInView
            ? {
                duration,
                delay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }
            : {}
        }
      />
    );
  });

  return <div ref={ref}>{dots}</div>;
};

export default FloatingDots;
