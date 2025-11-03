import React from "react";
import AboutBackgrounds from "./AboutBackgrounds";
import AboutBadge from "./AboutBadge";
import AboutText from "./AboutText";
import AboutSkills from "./AboutSkills";
import AboutVisual from "./AboutVisual";
import FadeInSection from "../../components/motion/FadeInSection";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center md:justify-start pt-24 text-neutral-100 px-6 md:px-12 overflow-hidden"
    >
      <AboutBackgrounds />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        <div className="space-y-6">
          <FadeInSection retrigger direction="down" delay={0.1}>
            <AboutBadge />
          </FadeInSection>

          <FadeInSection retrigger delay={0.2}>
            <AboutText />
          </FadeInSection>

          <FadeInSection retrigger delay={0.3}>
            <AboutSkills />
          </FadeInSection>
        </div>

        <FadeInSection retrigger delay={0.4}>
          <AboutVisual />
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
