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
      // FIX 1: Changed pt-24 to pt-12 md:pt-24 (shrinks the gap on mobile)
      // FIX 2: Removed 'justify-center' entirely. 'justify-start' allows the padding to control the exact gap safely.
      className="relative min-h-screen flex flex-col justify-start pt-12 md:pt-24 text-neutral-100 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <AboutBackgrounds />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center z-10 w-full min-w-0">
        <div className="space-y-6 min-w-0">
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

        <div className="min-w-0 w-full flex justify-center">
          <FadeInSection
            retrigger
            delay={0.4}
            className="w-full flex justify-center"
          >
            <AboutVisual />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
