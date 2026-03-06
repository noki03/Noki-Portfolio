// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerButton from "./comps/HamburgerButton";

const NAVBAR_OFFSET = 80; // adjust if navbar height changes

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = [
        "hero",
        "about",
        /* "projects", */
        "experience",
        "contact",
      ];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper that closes menu and then scrolls after layout settles
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Close menu first (if open)
    const wasMenuOpen = menuOpen;
    setMenuOpen(false);

    // Compute exact target top relative to document
    const rect = el.getBoundingClientRect();
    const targetTop = rect.top + window.scrollY - NAVBAR_OFFSET;

    // If menu was open and animating, wait one frame so layout settles and overlay is gone
    if (wasMenuOpen) {
      // requestAnimationFrame is a light-weight way to wait until next paint
      requestAnimationFrame(() => {
        // small extra delay for smoother results on some mobile browsers
        setTimeout(() => {
          window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
        }, 40); // 30–80ms is usually enough; 40 chosen as sweet spot
      });
    } else {
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    // { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-[background-color,opacity] duration-500 ${
        isScrolled
          ? "bg-surface/80 shadow-md border-b border-neutral-800/50 opacity-100"
          : "bg-surface/20 border-transparent opacity-95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:ring-offset-0"
        >
          {/* Logo Container */}
          <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <img
              src="/Noki01-5.png"
              alt="Noki.Dev Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-lg font-semibold bg-linear-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent tracking-tight">
            Noki.Dev
          </h1>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:ring-offset-0 ${
                activeSection === link.id
                  ? "text-primary-400 bg-primary-500/10"
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <HamburgerButton
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden px-6 pb-4 bg-surface/90 backdrop-blur-xl border-t border-neutral-800/50"
          >
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-3 rounded-lg text-left transition-all duration-200 focus:outline-none focus:ring-0 ${
                    activeSection === link.id
                      ? "bg-primary-500/20 text-primary-400"
                      : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smooth Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-800/40 overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-primary-500 to-secondary-500"
          animate={{
            width: `${
              ((links.findIndex((l) => l.id === activeSection) + 1) /
                links.length) *
              100
            }%`,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
