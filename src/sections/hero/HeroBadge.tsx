import React from "react";

const HeroBadge: React.FC = () => (
  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-linear-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 border-r-secondary-500/20 border-b-secondary-500/20 mb-8 backdrop-blur-sm">
    <div className="w-2.5 h-2.5 bg-primary-400 rounded-full animate-pulse" />
    <p className="bg-linear-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent font-medium text-sm tracking-wider uppercase">
      Burger ka saken
    </p>
    <div className="w-2.5 h-2.5 bg-secondary-400 rounded-full animate-pulse delay-500" />
  </div>
);

export default HeroBadge;
