// src/sections/Projects.tsx
import React from "react";
import FloatingDots from "../components/util/FloatingDots";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with React, Vite, and Tailwind CSS showcasing my projects and skills.",
    tech: ["React", "Vite", "TailwindCSS", "TypeScript"],
  },
  {
    title: "E-commerce Dashboard",
    description:
      "A responsive admin dashboard for managing products, orders, and analytics with clean UI components.",
    tech: ["Next.js", "TypeScript", "Chart.js"],
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app with authentication, message storage, and smooth user experience using Firebase.",
    tech: ["React", "Firebase", "TailwindCSS"],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="relative bg-bg text-neutral-200 py-28 px-6 md:px-12 overflow-hidden">
      {/* Matching gradient with smoother fade */}
      <div className="absolute inset-0 bg-linear-to-br from-surface via-card to-bg transition-all duration-1000" />

      <div className="absolute top-20 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <p className="text-primary-400 font-medium text-sm tracking-wider uppercase">
              My Work
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-linear-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently. Each one
            represents my passion for building elegant and functional
            interfaces.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card/50 border border-neutral-800 rounded-2xl p-6 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10"
            >
              {/* Project glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors -z-10" />

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-primary-600/10 text-primary-400 border border-primary-600/30 rounded-full px-3 py-1 hover:bg-primary-600/20 hover:border-primary-500/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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
      </div>
      <FloatingDots />
    </section>
  );
};

export default Projects;
