// src/sections/experience/Experience.tsx
import React from "react";
import ExperienceBackground from "./ExperienceBackground";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceList from "./ExperienceList";
import FloatingDots from "../../components/util/FloatingDots";
import FadeInSection from "../../components/motion/FadeInSection";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center text-neutral-100 py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Layer */}
      <ExperienceBackground />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto w-full z-10 space-y-12">
        <FadeInSection retrigger delay={0.2}>
          <ExperienceHeader />
        </FadeInSection>
        <ExperienceList />
      </div>

      {/* Ambient Motion */}
      <FloatingDots />
    </section>
  );
};

export default Experience;
