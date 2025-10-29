import React from "react";

const AboutBackgrounds: React.FC = () => {
  return (
    <>
      {/* Top fade-in gradient */}

      <div className="absolute inset-0 bg-linear-to-br from-bg via-bg to-card" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_90%_70%_at_50%_50%,black,transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,19,16,0.8)_0%,rgba(10,19,16,0.4)_40%,transparent_100%)] pointer-events-none" />
    </>
  );
};

export default AboutBackgrounds;
