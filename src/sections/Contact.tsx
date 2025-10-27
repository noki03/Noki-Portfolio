// src/sections/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-surface text-neutral-200 py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Background elements matching Hero */}
      <div className="absolute inset-0 bg-linear-to-br from-bg via-surface to-card" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Section Header */}
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
          I'm always open to collaborating on exciting projects or discussing
          new opportunities. Feel free to reach out through any of the platforms
          below — I'd love to hear from you.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a
            href="mailto:yourname@example.com"
            className="group px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 transition-all duration-300 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 flex items-center gap-3 border border-primary-500/30"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl border border-neutral-600 text-neutral-100 hover:bg-card/50 transition-all duration-300 font-semibold hover:scale-105 flex items-center gap-3 backdrop-blur-sm hover:border-primary-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.4v1.56h.05c.47-.89 1.63-1.8 3.36-1.8 3.6 0 4.27 2.36 4.27 5.42v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl border border-neutral-600 text-neutral-100 hover:bg-card/50 transition-all duration-300 font-semibold hover:scale-105 flex items-center gap-3 backdrop-blur-sm hover:border-primary-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.33 3.44 9.85 8.2 11.44.6.12.82-.27.82-.6v-2.15c-3.34.73-4.04-1.62-4.04-1.62-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.28 1.86 1.28 1.08 1.88 2.84 1.34 3.53 1.03.1-.8.42-1.34.76-1.65-2.66-.3-5.47-1.36-5.47-6.06 0-1.34.47-2.45 1.25-3.31-.13-.31-.54-1.55.12-3.22 0 0 1.01-.33 3.3 1.26a11.2 11.2 0 0 1 6.02 0c2.3-1.59 3.3-1.26 3.3-1.26.66 1.67.25 2.91.12 3.22.78.86 1.25 1.97 1.25 3.31 0 4.72-2.82 5.76-5.5 6.06.43.38.82 1.13.82 2.29v3.4c0 .33.22.72.82.6C20.56 21.92 24 17.4 24 12.07 24 5.4 18.63 0 12 0z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        {/* Subtle outro */}
        <div className="inline-flex items-center gap-3 text-neutral-400 text-sm">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          <span>
            Always open to new opportunities and interesting conversations
          </span>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse delay-500" />
        </div>
      </div>

      {/* Floating dots */}
      <div className="absolute top-40 left-10 w-2 h-2 bg-primary-400/30 rounded-full animate-float" />
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-primary-300/20 rounded-full animate-float delay-1000" />
    </section>
  );
};

export default Contact;
