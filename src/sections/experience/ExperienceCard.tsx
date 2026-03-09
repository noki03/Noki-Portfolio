import React from "react";
import { type ExperienceData } from "./ExperienceList";

const ExperienceCard: React.FC<ExperienceData> = ({
  role,
  company,
  period,
  description,
  skills,
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      {/* THE MAGIC GLOW EFFECT */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />

      {/* The Actual Card Surface */}
      <div className="relative h-full bg-[#161b22]/90 backdrop-blur-xl border border-neutral-800/80 rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 group-hover:border-primary-500/50">
        {/* Header: Role & Period */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
          {/* THE FIX: Grid Stacking for flicker-free gradient transitions */}
          <h3 className="text-xl md:text-2xl font-bold grid">
            {/* Layer 1: The solid white text (fades out on hover) */}
            <span className="col-start-1 row-start-1 text-neutral-100 transition-opacity duration-300 group-hover:opacity-0">
              {role}
            </span>
            {/* Layer 2: The gradient text (fades in on hover) */}
            <span className="col-start-1 row-start-1 bg-clip-text text-transparent bg-linear-to-r from-primary-400 to-secondary-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
              {role}
            </span>
          </h3>

          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20 whitespace-nowrap w-fit mt-1 md:mt-0">
            {period}
          </span>
        </div>

        {/* Company */}
        <p className="text-sm md:text-base font-medium text-neutral-400 mb-5">
          {company}
        </p>

        {/* Description */}
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base mb-8">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-neutral-800/60">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-[#0d1117] border border-neutral-800 rounded-lg transition-colors group-hover:border-neutral-700 hover:border-primary-500/50! hover:text-white! cursor-default shadow-sm"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
