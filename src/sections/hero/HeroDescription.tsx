import React from "react";

const HeroDescription: React.FC = () => (
  <p className="text-xl md:text-2xl text-neutral-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
    Lorem{" "}
    <span className="text-primary-300 font-medium">ipsum dolor sit amet,</span>{" "}
    <span className="text-secondary-300 font-medium">
      consectetur adipiscing
    </span>{" "}
    elit. Integer facilisis lacus ut nisi aliquam,{" "}
    <span className="text-accent-300 font-medium">nec varius tortor</span>{" "}
    viverra.
  </p>
);

export default HeroDescription;
