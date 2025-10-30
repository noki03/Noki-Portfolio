// src/sections/hero/Hero.tsx
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
      className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-transparent"
    >
      <HeroBackgrounds />

      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <FadeInSection delay={0.1}>
          <HeroBadge />
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <HeroTitle />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <HeroDescription />
        </FadeInSection>

        <FadeInSection retrigger delay={0.4} direction="right">
          <HeroButtons />
        </FadeInSection>
      </div>

      <FloatingDots />
    </section>
  );
};

export default Hero;
