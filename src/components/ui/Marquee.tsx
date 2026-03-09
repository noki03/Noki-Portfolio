import React from "react";
import { cn } from "../util/cn";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      // Bypassing tailwind-merge by using native React styles
      style={
        {
          "--duration": "40s",
          "--gap": "1rem",
          gap: "var(--gap)",
          ...style,
        } as React.CSSProperties
      }
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "pause-on-hover": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
            // Ensure the gap applies to the inner repeating tracks too
            style={{ gap: "var(--gap)" }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
