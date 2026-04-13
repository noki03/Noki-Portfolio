import React from "react";

const HeroButtons: React.FC = () => (
  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
    {/*  <a
      href="#projects"
      className="group relative px-8 py-4 rounded-xl bg-linear-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 flex items-center justify-center gap-3 border border-primary-400/30"
    >
      <span>View Projects</span>
      <svg
        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a> */}

    <a
      href="#contact"
      className="group relative px-8 py-4 rounded-xl bg-linear-to-r from-secondary-600/20 to-secondary-500/20 hover:from-secondary-600/30 hover:to-secondary-500/30 border border-secondary-500/30 text-neutral-100 hover:text-white transition-all duration-300 font-semibold hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm hover:border-secondary-400/50"
    >
      <svg
        className="w-5 h-5 group-hover:scale-110 transition-transform"
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
      <span>Contact Me</span>
    </a>

    <a
      href="#about"
      className="group px-8 py-4 rounded-xl border border-accent-500/30 text-accent-300 hover:bg-accent-500/10 transition-all duration-300 font-semibold hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm hover:border-accent-400/50"
    >
      <span>Learn More</span>
    </a>
  </div>
);

export default HeroButtons;
