// src/components/motion/FadeInSection.tsx
import React from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  retrigger?: boolean;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "scale";
  distance?: number;
  stiffness?: number;
  damping?: number;
  once?: boolean;
  threshold?: number;
  hoverScale?: boolean; // ✅ new optional prop
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  retrigger = false,
  direction = "up",
  distance = 30,
  stiffness = 100,
  damping = 10,
  once = false,
  threshold = 0.15,
  hoverScale = false, // ✅ default false
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: !retrigger && once,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (retrigger) {
      controls.start("hidden");
    }
  }, [controls, inView, retrigger]);

  // animation variants based on direction
  const getDirectionalVariants = (): Variants => {
    const tweenTransition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    };

    const springTransition = {
      type: "spring" as const,
      stiffness,
      damping,
      delay,
    };

    const baseHidden = { opacity: 0 };
    const baseVisible = { opacity: 1 };

    const directionalVariants: Record<
      NonNullable<FadeInSectionProps["direction"]>,
      Variants
    > = {
      up: {
        hidden: { ...baseHidden, y: distance },
        visible: { ...baseVisible, y: 0, transition: tweenTransition },
      },
      down: {
        hidden: { ...baseHidden, y: -distance },
        visible: { ...baseVisible, y: 0, transition: tweenTransition },
      },
      left: {
        hidden: { ...baseHidden, x: distance },
        visible: { ...baseVisible, x: 0, transition: tweenTransition },
      },
      right: {
        hidden: { ...baseHidden, x: -distance },
        visible: { ...baseVisible, x: 0, transition: tweenTransition },
      },
      zoom: {
        hidden: { ...baseHidden, scale: 0.8 },
        visible: { ...baseVisible, scale: 1, transition: springTransition },
      },
      scale: {
        hidden: { ...baseHidden, scale: 0 },
        visible: {
          ...baseVisible,
          scale: 1,
          transition: { ...springTransition, stiffness: stiffness * 1.2 },
        },
      },
    };

    return directionalVariants[direction] ?? directionalVariants.up;
  };

  const variants = getDirectionalVariants();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      whileHover={
        hoverScale
          ? {
              scale: 1.02,
              transition: { duration: 0.18 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
