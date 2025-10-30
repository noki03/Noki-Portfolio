// src/components/motion/CursorFlashlight.tsx
import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

const CursorFlashlight: React.FC = () => {
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring for smooth lag
  const springX = useSpring(mouseX, { stiffness: 500, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Use Framer’s reactive template to automatically re-render on spring updates
  const background = useMotionTemplate`
    radial-gradient(
      500px circle at ${springX}px ${springY}px,
      rgba(124, 58, 237, 0.12),
      rgba(124, 58, 237, 0.05) 30%,
      transparent 70%
    )
  `;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{ background }}
    />
  );
};

export default CursorFlashlight;
