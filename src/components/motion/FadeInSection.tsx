// src/components/motion/FadeInSection.tsx
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  retrigger?: boolean; // 🆕 allows controlling if animation repeats when leaving/entering view
  direction?: "up" | "down" | "left" | "right"; // 🆕 optional motion direction
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  retrigger = false,
  direction = "up",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: !retrigger, // 🧠 Core logic: retrigger = false → trigger once
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (retrigger) {
      controls.start("hidden");
    }
  }, [controls, inView, retrigger]);

  // Dynamic direction offset
  const offsetMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const variants = {
    hidden: { opacity: 0, ...offsetMap[direction] },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
