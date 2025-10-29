// src/sections/contact/ContactOutro.tsx
import React from "react";

const ContactOutro: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-3 text-neutral-400 text-sm">
      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
      <span>
        Always open to new opportunities and interesting conversations
      </span>
      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse delay-500" />
    </div>
  );
};

export default ContactOutro;
