// main.tsx or index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import LiquidEther from "./components/bgs/LiquidEther";

const rootStyles = getComputedStyle(document.documentElement);
const primary = rootStyles.getPropertyValue("--color-primary").trim();
const secondary = rootStyles.getPropertyValue("--color-secondary").trim();
const accent = rootStyles.getPropertyValue("--color-accent").trim();

console.log(`primary: ${primary}, secondary: ${secondary}, accent: ${accent}`);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Background Layer */}
      {/* <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
        }}
      >
        <LiquidEther
          colors={[accent, secondary, primary]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.35}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div> */}

      {/* Foreground Content (Your App) */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <App />
      </div>
    </div>
  </StrictMode>
);
