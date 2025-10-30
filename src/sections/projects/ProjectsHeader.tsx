import React from "react";

const ProjectsHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
        <p className="text-primary-400 font-medium text-sm tracking-wider uppercase">
          My Work
        </p>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Featured{" "}
        <span className="bg-linear-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
        Here are some of the projects I've worked on recently. Each one
        represents my passion for building elegant and functional interfaces.
      </p>
    </div>
  );
};

export default ProjectsHeader;
