import React from "react";
import Prism from "../../components/bgs/Prism";

const HeroBackgrounds: React.FC = () => (
  <>
    {/* Prism Overlay */}
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3}
        baseWidth={5.5}
        scale={3.2}
        hueShift={1.06}
        colorFrequency={2.5}
        noise={0}
        glow={0.3}
      />
    </div>

    {/* Radial Dark Overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,19,16,0.8)_0%,rgba(10,19,16,0.4)_40%,transparent_100%)] pointer-events-none" />

    {/* Soft Glows */}
    <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/25 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary-500/25 rounded-full blur-3xl animate-pulse delay-1000" />

    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.18)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_90%_70%_at_50%_50%,black,transparent)] pointer-events-none" />

    {/* Bottom fade-out gradient */}
  </>
);

export default HeroBackgrounds;
