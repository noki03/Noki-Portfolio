// src/sections/contact/ContactLinks.tsx
import React from "react";
import { contactLinks } from "./contactLinksData";

const ContactLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-16">
      {contactLinks.map(({ href, label, icon, filled }, i) => (
        <a
          key={i}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`group px-8 py-4 rounded-xl ${
            filled
              ? "bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 border border-primary-500/30"
              : "border border-neutral-600 text-neutral-100 hover:bg-card/50 backdrop-blur-sm hover:border-primary-500/30"
          } transition-all duration-300 font-semibold hover:scale-105 flex items-center gap-3`}
        >
          {icon}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
