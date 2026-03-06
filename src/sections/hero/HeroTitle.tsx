import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  {
    text: "Code.",
    color: "from-primary-400 to-primary-600",
    particle: "bg-primary-400",
    glow: "bg-primary-400",
  },
  {
    text: "Create.",
    color: "from-secondary-400 to-secondary-600",
    particle: "bg-secondary-400",
    glow: "bg-secondary-400",
  },
  {
    text: "Collaborate.",
    color: "from-accent-400 to-primary-700",
    particle: "bg-accent-400",
    glow: "bg-accent-400",
  },
  {
    text: "Evolve.",
    color: "from-primary-400 to-accent-600",
    particle: "bg-primary-400",
    glow: "bg-primary-400",
  },
  {
    text: "Innovate.",
    color: "from-secondary-500 to-primary-600",
    particle: "bg-secondary-500",
    glow: "bg-secondary-500",
  },
];

const HeroTitle: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = WORDS[index];

  return (
    <div className="relative">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-center relative">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentWord.text}
            initial={{ opacity: 0, y: 60, rotateX: 90, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
            exit={{
              opacity: 0,
              y: -60,
              rotateX: -90,
              filter: "blur(10px)",
              transition: { duration: 0.6, ease: "easeIn" },
            }}
            className={`inline-block bg-clip-text text-transparent bg-linear-to-r ${currentWord.color} font-extrabold`}
          >
            {currentWord.text}
          </motion.span>
        </AnimatePresence>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${currentWord.particle}`}
              initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </h1>

      {/* Background glow */}
      <motion.div
        className={`absolute inset-0 -z-10 opacity-20 blur-3xl rounded-full ${currentWord.glow}`}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HeroTitle;
