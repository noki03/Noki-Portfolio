import React from "react";
import FloatingDots from "../../components/util/FloatingDots";
import HeroBackgrounds from "./HeroBackgrounds";
import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-transparent"
    >
      <HeroBackgrounds />
      <div className="relative z-10 max-w-4xl text-center">
        <HeroBadge />
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </div>
      <FloatingDots />
    </section>
  );
};

export default Hero;
