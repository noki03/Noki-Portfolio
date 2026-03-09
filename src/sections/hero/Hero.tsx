import React from "react";
import FloatingDots from "../../components/util/FloatingDots";
import HeroBackgrounds from "./HeroBackgrounds";
import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import FadeInSection from "../../components/motion/FadeInSection";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      // FIX: Changed pt-10 to pt-28 (112px) on mobile to safely clear the fixed navbar.
      // Used md:pt-20 on desktop where we have more vertical room.
      // Added a slight pb-10 so it doesn't hit the absolute bottom on tiny screens.
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 pt-28 md:pt-20 pb-10 overflow-hidden bg-transparent"
    >
      <HeroBackgrounds />

      <div className="relative z-10 max-w-4xl text-center space-y-6 w-full">
        <FadeInSection delay={0.1}>
          <HeroBadge />
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <HeroTitle />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <HeroDescription />
        </FadeInSection>

        <FadeInSection retrigger delay={0.4} direction="up">
          <HeroButtons />
        </FadeInSection>
      </div>

      <FloatingDots />
    </section>
  );
};

export default Hero;
