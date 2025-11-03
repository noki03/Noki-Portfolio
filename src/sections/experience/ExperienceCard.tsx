// src/sections/experience/ExperienceCard.tsx
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  description,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-surface/60 border border-neutral-800/60 rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h3 className="text-xl font-semibold text-white">{role}</h3>
        <span className="text-sm text-neutral-400">{period}</span>
      </div>
      <p className="text-primary-400 mb-2">{company}</p>
      <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
};

export default ExperienceCard;
