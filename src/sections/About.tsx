// src/sections/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative bg-bg text-neutral-200 py-28 px-6 md:px-12 overflow-hidden">
      {/* Background elements matching Hero */}
      <div className="absolute inset-0 bg-linear-to-br from-bg via-surface to-card" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Text Content */}
        <div className="space-y-6">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-2">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <p className="text-primary-400 font-medium text-sm tracking-wider uppercase">
              About Me
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Passion for{" "}
            <span className="bg-linear-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              Building Systems
            </span>
          </h2>

          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed text-lg">
              I'm a{" "}
              <span className="text-primary-300 font-semibold">
                Full Stack Web Developer
              </span>{" "}
              with nearly{" "}
              <span className="text-primary-300 font-semibold">
                2 years of experience
              </span>{" "}
              in developing and improving in-house corporate systems. I
              specialize in{" "}
              <span className="text-primary-300 font-semibold">
                PHP (Laravel), React, and TypeScript
              </span>
              , crafting efficient solutions that enhance workflows, automate
              processes, and improve user experience.
            </p>
            <p className="text-neutral-300 leading-relaxed text-lg">
              Currently part of an internal IT team, I collaborate closely with
              SQA, system analysts, and business stakeholders to turn complex
              requirements into reliable applications.{" "}
              <span className="text-primary-300 font-semibold">
                I’m passionate about scalable design, clean code, and continuous
                learning
              </span>{" "}
              — always aiming to bridge functionality with thoughtful UI/UX.
            </p>
          </div>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "React",
              "TypeScript",
              "Laravel",
              "PHP",
              "MySQL",
              "Tailwind CSS",
              "UI/UX Design",
              "API Integration",
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg bg-card border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-primary-500/30 hover:text-primary-300 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Image / Visual Section */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Main image container */}
            <div className="w-80 h-80 rounded-2xl bg-linear-to-br from-primary-600/20 to-primary-400/10 border border-primary-500/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                  <svg
                    className="w-10 h-10 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-primary-300 font-medium text-lg mb-2">
                  BossSingg
                </p>
                <p className="text-neutral-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400/20 rounded-full border border-primary-500/30 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-300/15 rounded-full border border-primary-400/20 group-hover:scale-110 transition-transform duration-300 delay-100" />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary-500/10 blur-xl group-hover:bg-primary-500/15 transition-colors -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
