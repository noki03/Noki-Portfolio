// src/sections/experience/ExperienceList.tsx
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Web Developer",
    company: "DecoArts Marketing Inc.",
    period: "2023 – Present",
    description:
      "Building responsive web applications using React, TypeScript, and TailwindCSS. Focused on delivering modern UI/UX with smooth animations and performance optimization.",
  },
  {
    role: "Web Developer Intern",
    company: "University of the Philippines - CIC",
    period: "2022 – 2023",
    description:
      "Created interactive, aesthetic web designs and components while learning motion design and accessibility best practices.",
  },
];

// parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // stagger child cards nicely
      delayChildren: 0.2,
    },
  },
};

const ExperienceList: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      className="space-y-8"
    >
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} {...exp} />
      ))}
    </motion.div>
  );
};

export default ExperienceList;
