import React, { useEffect, useState } from "react";
import Prism from "../bgs/Prism";

interface DynamicPrismProps extends React.ComponentProps<typeof Prism> {}

const DynamicPrism: React.FC<DynamicPrismProps> = (props) => {
  const [hueShift, setHueShift] = useState(0);

  useEffect(() => {
    // Get Tailwind primary color (supports CSS var or HEX)
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();

    if (!primary) return;

    let r = 0,
      g = 0,
      b = 0;

    // Parse HEX ("#7c3aed") or RGB ("124 58 237")
    if (primary.startsWith("#")) {
      const hex = primary.replace("#", "");
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
      }
    } else {
      const parts = primary.split(" ").map(Number);
      if (parts.length === 3) [r, g, b] = parts;
    }

    // Convert RGB → HSL → Hue
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let hue = 0;
    if (max !== min) {
      if (max === r) hue = (60 * ((g - b) / (max - min)) + 360) % 360;
      else if (max === g) hue = (60 * ((b - r) / (max - min)) + 120) % 360;
      else hue = (60 * ((r - g) / (max - min)) + 240) % 360;
    }

    // Convert hue difference (relative to base hue ≈ 270°) → radians
    const baseHue = 270; // Prism’s original purple hue
    const hueShiftRadians = (((hue - baseHue + 360) % 360) / 180) * Math.PI;

    setHueShift(hueShiftRadians);

    console.log(
      `Primary: ${primary} | Hue: ${hue.toFixed(
        1
      )}° | hueShift: ${hueShiftRadians.toFixed(3)} rad`
    );
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Prism {...props} hueShift={hueShift} />
    </div>
  );
};

export default DynamicPrism;
