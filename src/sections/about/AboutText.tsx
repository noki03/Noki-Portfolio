import React from "react";

const AboutText: React.FC = () => {
  return (
    <>
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
          in developing and improving in-house corporate systems. I specialize
          in{" "}
          <span className="text-primary-300 font-semibold">
            PHP (Laravel), React, and Javascript/TypeScript
          </span>
          , crafting efficient solutions that enhance workflows, automate
          processes, and improve user experience.
        </p>
        <p className="text-neutral-300 leading-relaxed text-lg">
          Currently part of an internal IT team, I collaborate closely with SQA,
          system analysts, and business stakeholders to turn complex
          requirements into reliable applications.{" "}
          <span className="text-primary-300 font-semibold">
            I’m passionate about scalable design, clean code, and continuous
            learning
          </span>{" "}
          — always aiming to bridge functionality with thoughtful UI/UX.
        </p>
      </div>
    </>
  );
};

export default AboutText;
