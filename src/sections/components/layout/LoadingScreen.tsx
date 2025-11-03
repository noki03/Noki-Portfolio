// src/components/LoadingScreen.tsx
import React from "react";
import { motion } from "framer-motion";

const LoadingScreen: React.FC = () => {
  // Floating particles background
  const floatingParticles = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 rounded-full bg-linear-to-r from-primary-400/30 to-secondary-400/30"
      initial={{
        opacity: 0,
        scale: 0,
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut",
      }}
    />
  ));

  // Rotating orb with gradient
  const rotatingOrb = (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-linear-to-r from-primary-400 to-secondary-400"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-neutral-900"
        animate={{
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
    </motion.div>
  );

  // Pulsing rings
  const pulsingRings = Array.from({ length: 3 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute border-2 border-primary-400/40 rounded-full"
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{
        width: 100 + i * 40,
        height: 100 + i * 40,
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 0.6,
        ease: "easeOut",
      }}
    />
  ));

  // Animated text with character stagger
  const loadingText = "Loading".split("").map((char, i) => (
    <motion.span
      key={i}
      className="inline-block text-neutral-100 font-light tracking-widest"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 0.1,
        ease: "easeInOut",
      }}
    >
      {char}
    </motion.span>
  ));

  // Progress bar
  /* const progressBar = (
    <motion.div
      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-neutral-700 rounded-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="h-full bg-linear-to-r from-primary-400 to-secondary-400"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
      />
    </motion.div>
  ); */

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-900 z-9999 overflow-hidden">
      {/* Background particles */}
      {floatingParticles}

      {/* Main container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Pulsing rings */}
        {pulsingRings}

        {/* Rotating orb */}
        {rotatingOrb}
      </div>

      {/* Animated text */}
      <motion.div
        className="mt-12 text-lg uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {loadingText}
      </motion.div>

      {/* Progress bar */}
      {/* {progressBar} */}

      {/* Subtle background shimmer */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-primary-400/5 to-transparent"
        animate={{ x: [-1000, 1000] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default LoadingScreen;
