import React from "react";

const ExperienceBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
      <p className="text-primary-400 font-medium text-sm tracking-wider uppercase">
        Experience
      </p>
    </div>
  );
};

export default ExperienceBadge;
