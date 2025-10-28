import React from "react";
import FloatingDots from "../components/util/FloatingDots";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-transparent">
      {/* ✨ Subtle transparent overlay to blend with LiquidEther */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,19,16,0.8)_0%,rgba(10,19,16,0.4)_40%,transparent_100%)] pointer-events-none" />

      {/* Soft color glows */}
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary-500/25 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Dual-color grid pattern, slightly more visible */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_90%_70%_at_50%_50%,black,transparent)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-linear-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 border-r-secondary-500/20 border-b-secondary-500/20 mb-8 backdrop-blur-sm">
          <div className="w-2.5 h-2.5 bg-primary-400 rounded-full animate-pulse" />
          <p className="bg-linear-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent font-medium text-sm tracking-wider uppercase">
            Burger ka saken
          </p>
          <div className="w-2.5 h-2.5 bg-secondary-400 rounded-full animate-pulse delay-500" />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none">
          <span className="block">
            <span className="bg-linear-to-r from-primary-400 via-primary-300 to-accent-300 bg-clip-text text-transparent">
              Bos
            </span>
            <span className="bg-linear-to-r from-secondary-300 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Sing
            </span>
            <span className="text-accent-400">!</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-neutral-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Lorem{" "}
          <span className="text-primary-300 font-medium">
            ipsum dolor sit amet,
          </span>{" "}
          <span className="text-secondary-300 font-medium">
            consectetur adipiscing
          </span>{" "}
          elit. Integer facilisis lacus ut nisi aliquam,{" "}
          <span className="text-accent-300 font-medium">nec varius tortor</span>{" "}
          viverra.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 flex items-center justify-center gap-3 border border-primary-400/30"
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
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-secondary-600/20 to-secondary-500/20 hover:from-secondary-600/30 hover:to-secondary-500/30 border border-secondary-500/30 text-neutral-100 hover:text-white transition-all duration-300 font-semibold hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm hover:border-secondary-400/50"
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
      </div>

      <FloatingDots />
    </section>
  );
};

export default Hero;
