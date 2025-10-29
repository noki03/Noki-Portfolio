import React from "react";

const HeroTitle: React.FC = () => (
  <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none">
    <span className="block">
      <span className="bg-linear-to-r from-primary-400 via-primary-300 to-accent-300 bg-clip-text text-transparent">
        Bos
      </span>
      <span className="bg-linear-to-r from-secondary-300 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
        Sing
      </span>
      <span className="text-accent-400">!</span>
    </span>
  </h1>
);

export default HeroTitle;
