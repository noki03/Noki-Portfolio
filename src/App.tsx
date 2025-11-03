// src/App.tsx
import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/hero/Hero";
import Footer from "./components/Footer";
import LoadingScreen from "./sections/components/layout/LoadingScreen";

const About = lazy(() => import("./sections/about/About"));
const Experience = lazy(() => import("./sections/experience/Experience"));
const Contact = lazy(() => import("./sections/contact/Contact"));
const CursorFlashlight = lazy(
  () => import("./components/motion/CursorFlashlight")
);

const App: React.FC = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsAppReady(true), 1500); // show loading for 1.5s
    return () => clearTimeout(timer);
  }, []);

  // Once app ready, delay content reveal slightly for smoother fade
  useEffect(() => {
    if (isAppReady) {
      const timer = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isAppReady]);

  return (
    <div className="min-h-screen flex flex-col text-neutral-100 font-sans bg-transparent overflow-hidden">
      {/* AnimatePresence enables exit animations */}
      <AnimatePresence mode="wait">
        {!showContent && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* App content fades in */}
      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {showContent && (
          <>
            <CursorFlashlight />
            <Navbar />
            <main className="relative flex flex-col">
              <Hero />
              <Suspense
                fallback={
                  <div className="h-screen flex items-center justify-center text-neutral-400">
                    Loading section...
                  </div>
                }
              >
                <About />
                <Experience />
                <Contact />
              </Suspense>
            </main>
            <Footer />
          </>
        )}
      </motion.div>
    </div>
  );
};

export default React.memo(App);
