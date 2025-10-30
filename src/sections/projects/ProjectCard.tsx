import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
}) => {
  return (
    <div className="group relative bg-card/50 border border-neutral-800 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10">
      <div className="absolute inset-0 rounded-2xl bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors -z-10" />

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((item, i) => (
          <span
            key={i}
            className="text-xs bg-primary-600/10 text-primary-400 border border-primary-600/30 rounded-full px-3 py-1 hover:bg-primary-600/20 hover:border-primary-500/50 transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          className="w-5 h-5 text-primary-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectCard;
