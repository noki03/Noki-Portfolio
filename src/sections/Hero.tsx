import React from "react";
import FloatingDots from "../components/util/FloatingDots";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-bg to-surface" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary-500/10 border border-primary-500/30 mb-8 backdrop-blur-sm">
          <div className="w-2.5 h-2.5 bg-primary-400 rounded-full animate-pulse" />
          <p className="text-primary-400 font-medium text-sm tracking-wider uppercase">
            Burger ka saken
          </p>
          <div className="w-2.5 h-2.5 bg-primary-400 rounded-full animate-pulse delay-500" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
          <span className="bg-linear-to-r from-primary-400 via-primary-300 to-primary-200 bg-clip-text text-transparent">
            Bos
          </span>
          <span className="bg-linear-to-r from-primary-200 via-primary-300 to-primary-400 bg-clip-text text-transparent">
            Sing
          </span>
          <span className="text-primary-400">!</span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Lorem{" "}
          <span className="text-primary-300 font-medium">
            ipsum dolor sit amet, consectetur adipiscing elit.
          </span>{" "}
          Integer facilisis lacus ut nisi aliquam, nec varius tortor viverra.
          Nullam suscipit est vel lorem ultricies, a vehicula justo dictum.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 transition-all duration-300 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 flex items-center justify-center gap-3 border border-primary-500/30"
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
            <div className="absolute inset-0 rounded-xl bg-primary-400/20 blur-md group-hover:bg-primary-400/30 transition-colors -z-10" />
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl border border-neutral-600 text-neutral-100 hover:bg-card/50 transition-all duration-300 font-semibold hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm hover:border-primary-500/30"
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
        </div>
      </div>

      {/* Floating elements */}
      <FloatingDots />
    </section>
  );
};

export default Hero;
