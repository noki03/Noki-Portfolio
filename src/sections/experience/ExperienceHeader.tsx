// src/sections/experience/ExperienceHeader.tsx
import React from "react";

const ExperienceHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
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
