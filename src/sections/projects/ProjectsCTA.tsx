import React from "react";

const ProjectsCTA: React.FC = () => {
  return (
    <div className="text-center mt-16">
      <p className="text-neutral-400 mb-6">Want to see more of my work?</p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-700 text-neutral-200 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300 font-medium"
      >
        <span>Get In Touch</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </a>
    </div>
  );
};

export default ProjectsCTA;
