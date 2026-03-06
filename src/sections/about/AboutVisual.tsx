import React from "react";

const AboutVisual: React.FC = () => {
  return (
    // Added some padding (p-4) to the wrapper so the floating logo doesn't get clipped by hidden overflows on mobile
    <div className="flex justify-center relative group p-4">
      {/* Mock IDE Window */}
      {/* UI/UX Tweak: Added group-hover shadow and border color changes to make it "light up" slightly */}
      <div className="w-full max-w-sm rounded-xl bg-[#0d1117] border border-neutral-800 shadow-2xl overflow-hidden z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary-500/20 group-hover:border-neutral-700">
        {/* IDE Header */}
        <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-neutral-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <p className="ml-4 text-xs text-neutral-500 font-mono">
            developer.ts
          </p>
        </div>

        {/* IDE Body */}
        <div className="p-5 text-sm md:text-base font-mono text-neutral-300 space-y-2 text-left">
          <p>
            <span className="text-pink-500">const</span>{" "}
            <span className="text-blue-400">profile</span> = {"{"}
          </p>
          <p className="pl-4">
            name:{" "}
            <span className="text-green-400">'Neuqian Rhys S. Salvador'</span>,
          </p>
          <p className="pl-4">
            role: <span className="text-green-400">'Full Stack Web Dev'</span>,
          </p>
          <p className="pl-4">
            experienceYrs: <span className="text-purple-400">2</span>,
          </p>
          <p className="pl-4">coreStack: [</p>
          <p className="pl-8">
            <span className="text-green-400">'React'</span>,
          </p>
          <p className="pl-8">
            <span className="text-green-400">'Laravel'</span>,
          </p>
          <p className="pl-8">
            <span className="text-green-400">'Javascript/TypeScript'</span>
          </p>
          <p className="pl-4">],</p>
          <p>{"};"}</p>
        </div>
      </div>

      {/* NEW: Floating Logo Overlay */}
      <div className="absolute -top-2 -right-2 md:-top-6 md:-right-6 w-20 h-20 md:w-28 md:h-28 rounded-full border border-primary-500/30 bg-[#161b22]/70 backdrop-blur-md flex items-center justify-center shadow-xl shadow-primary-500/20 z-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <img
          src="/Noki01-5.png"
          alt="Neuqian Logo"
          // Using object-contain so your logo fits perfectly without stretching
          className="w-3/4 h-3/4 object-contain drop-shadow-lg"
        />
      </div>

      {/* Floating decorative elements (kept one for balance on the bottom left) */}
      <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-primary-400/10 rounded-full border border-primary-400/20 group-hover:scale-125 transition-transform duration-500 z-0 backdrop-blur-sm" />

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-3xl group-hover:bg-primary-500/20 transition-colors duration-500 -z-10" />
    </div>
  );
};

export default AboutVisual;
