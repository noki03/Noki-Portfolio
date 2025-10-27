// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-neutral-900 text-neutral-400 py-4 px-3 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-primary-600 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.33 3.44 9.85 8.2 11.44.6.12.82-.27.82-.6v-2.15c-3.34.73-4.04-1.62-4.04-1.62-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.28 1.86 1.28 1.08 1.88 2.84 1.34 3.53 1.03.1-.8.42-1.34.76-1.65-2.66-.3-5.47-1.36-5.47-6.06 0-1.34.47-2.45 1.25-3.31-.13-.31-.54-1.55.12-3.22 0 0 1.01-.33 3.3 1.26a11.2 11.2 0 0 1 6.02 0c2.3-1.59 3.3-1.26 3.3-1.26.66 1.67.25 2.91.12 3.22.78.86 1.25 1.97 1.25 3.31 0 4.72-2.82 5.76-5.5 6.06.43.38.82 1.13.82 2.29v3.4c0 .33.22.72.82.6C20.56 21.92 24 17.4 24 12.07 24 5.4 18.63 0 12 0z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-primary-600 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.4v1.56h.05c.47-.89 1.63-1.8 3.36-1.8 3.6 0 4.27 2.36 4.27 5.42v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-neutral-500">
          © {year} NOKI.DEV. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
