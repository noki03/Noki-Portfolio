import React, { useEffect, useMemo, useState } from "react";
import Prism from "../bgs/Prism";

interface DynamicPrismProps extends React.ComponentProps<typeof Prism> {}

const DynamicPrism: React.FC<DynamicPrismProps> = React.memo((props) => {
  const [hueShift, setHueShift] = useState(0);

  // 🧠 Compute hueShift only once
  const computedHueShift = useMemo(() => {
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();
    if (!primary) return 0;

    let r = 0,
      g = 0,
      b = 0;

    if (primary.startsWith("#")) {
      const hex = primary.replace("#", "");
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      const parts = primary.split(" ").map(Number);
      if (parts.length === 3) [r, g, b] = parts;
    }

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let hue = 0;
    if (max !== min) {
      if (max === r) hue = (60 * ((g - b) / (max - min)) + 360) % 360;
      else if (max === g) hue = (60 * ((b - r) / (max - min)) + 120) % 360;
      else hue = (60 * ((r - g) / (max - min)) + 240) % 360;
    }

    const baseHue = 270;
    return (((hue - baseHue + 360) % 360) / 180) * Math.PI;
  }, []);

  useEffect(() => setHueShift(computedHueShift), [computedHueShift]);

  // 🧹 Optional: Cleanup Prism’s WebGL when unmounting
  useEffect(() => {
    return () => {
      const canvas = document.querySelector(
        "#prism-canvas"
      ) as HTMLCanvasElement;
      if (canvas && (canvas as any).gl) {
        const gl = (canvas as any).gl;
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Prism {...props} hueShift={hueShift} />
    </div>
  );
});

DynamicPrism.displayName = "DynamicPrism";
export default DynamicPrism;
