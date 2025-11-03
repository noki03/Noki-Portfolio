// main.tsx or index.tsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <div style={{ position: "relative", width: "100%", height: "100vh" }}>
    {/* Foreground Content (Your App) */}
    <div style={{ position: "relative", zIndex: 10 }}>
      <App />
    </div>
  </div>
);
