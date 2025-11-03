// src/sections/experience/ExperienceHeader.tsx
import React from "react";

const ExperienceHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
        <p className="text-primary-400 font-medium text-sm tracking-wider uppercase">
          Experience
        </p>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        My{" "}
        <span className="bg-linear-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
          Journey
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
        A look at my experiences and how I’ve grown as a developer — from
        designing clean interfaces to building full-fledged web applications.
      </p>
    </div>
  );
};

export default ExperienceHeader;
