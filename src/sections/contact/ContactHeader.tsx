// src/sections/contact/ContactHeader.tsx
import React from "react";

const ContactHeader: React.FC = () => {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
        <p className="text-primary-400 font-medium text-sm tracking-wider uppercase">
          Get In Touch
        </p>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Let's{" "}
        <span className="bg-linear-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
          Connect
        </span>
      </h2>

      <p className="text-neutral-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        I'm always open to collaborating on exciting projects or discussing new
        opportunities. Feel free to reach out through any of the platforms below
        — I'd love to hear from you.
      </p>
    </>
  );
};

export default ContactHeader;
