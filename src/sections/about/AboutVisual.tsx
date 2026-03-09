import React from "react";

const AboutVisual: React.FC = () => {
  return (
    // FIX 1: Added max-w-full and min-w-0 to the wrapper to strictly enforce screen boundaries
    <div className="flex justify-center relative group p-2 sm:p-4 max-w-full min-w-0">
      {/* FIX 2: Removed max-w-[90vw] (it conflicts with section padding). Used w-full max-w-sm. */}
      <div className="w-full max-w-sm rounded-xl bg-[#0d1117] border border-neutral-800 shadow-2xl overflow-hidden z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary-500/20 group-hover:border-neutral-700">
        {/* IDE Header */}
        <div className="flex items-center px-3 sm:px-4 py-3 bg-[#161b22] border-b border-neutral-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <p className="ml-4 text-[10px] sm:text-xs text-neutral-500 font-mono">
            developer.ts
          </p>
        </div>

        {/* IDE Body */}
        {/* FIX 3: Dynamic text sizes down to text-[11px] for tiny screens, and enabled text wrapping */}
        <div className="p-4 md:p-5 text-[11px] min-[375px]:text-xs sm:text-sm md:text-base font-mono text-neutral-300 space-y-2 text-left overflow-x-hidden whitespace-pre-wrap wrap-break-words">
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
      {/* FIX 4: On mobile (default), placed perfectly on the inner-right edge so it won't clip off-screen */}
      <div className="absolute -top-3 right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border border-primary-500/30 bg-[#161b22]/70 backdrop-blur-md flex items-center justify-center shadow-xl shadow-primary-500/20 z-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <img
          src="/Noki01-5.png"
          alt="Neuqian Logo"
          className="w-3/4 h-3/4 object-contain drop-shadow-lg"
        />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-3xl group-hover:bg-primary-500/20 transition-colors duration-500 -z-10" />
    </div>
  );
};

export default AboutVisual;
