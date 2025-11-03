// src/sections/contact/ContactBackground.tsx
import React from "react";

const ContactBackground: React.FC = () => {
  return (
    <>
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-linear-to-br from-card via-bg to-bg transition-all duration-1000" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,19,16,0.8)_0%,rgba(10,19,16,0.4)_40%,transparent_100%)] pointer-events-none" />

      {/* Soft glowing orbs */}
      <div className="absolute right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Dual-color grid pattern, slightly more visible */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_90%_70%_at_50%_50%,black,transparent)] pointer-events-none" />
    </>
  );
};

export default ContactBackground;
