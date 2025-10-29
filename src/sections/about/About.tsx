import React from "react";
import AboutBackgrounds from "./AboutBackgrounds";
import AboutBadge from "./AboutBadge";
import AboutText from "./AboutText";
import AboutSkills from "./AboutSkills";
import AboutVisual from "./AboutVisual";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-neutral-100 py-28 px-6 md:px-12 overflow-hidden"
    >
      <AboutBackgrounds />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        <div className="space-y-6">
          <AboutBadge />
          <AboutText />
          <AboutSkills />
        </div>
        <AboutVisual />
      </div>
    </section>
  );
};

export default About;
