import React from "react";

const AboutVisual: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative group">
        <div className="w-80 h-80 rounded-2xl bg-linear-to-br from-primary-600/20 to-primary-400/10 border border-primary-500/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
              <svg
                className="w-10 h-10 text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <p className="text-primary-300 font-medium text-lg mb-2">
              BossSingg
            </p>
            <p className="text-neutral-400 text-sm">Full-Stack Developer</p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400/20 rounded-full border border-primary-500/30 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-300/15 rounded-full border border-primary-400/20 group-hover:scale-110 transition-transform duration-300 delay-100" />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-primary-500/10 blur-xl group-hover:bg-primary-500/15 transition-colors -z-10" />
      </div>
    </div>
  );
};

export default AboutVisual;
