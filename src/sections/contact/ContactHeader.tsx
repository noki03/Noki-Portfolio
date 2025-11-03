// src/sections/contact/ContactHeader.tsx
import React from "react";

const ContactHeader: React.FC = () => {
  return (
    <>
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
