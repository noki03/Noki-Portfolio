// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
// import Projects from "./sections/projects/Projects";
import Footer from "./components/Footer";
import Contact from "./sections/contact/Contact";
import CursorFlashlight from "./components/motion/CursorFlashlight";
import Experience from "./sections/experience/Experience";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-neutral-100 font-sans bg-transparent">
      <CursorFlashlight />
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}

      <main className="relative flex flex-col">
        <Hero key="hero" />
        <About key="about" />
        <Experience key="experience" />
        {/* <Projects key="projects" /> */}
        <Contact key="contact" />
      </main>
      <div className="hidden">
        bg-primary-100 bg-primary-200 bg-primary-300 bg-primary-400
        bg-primary-500 bg-primary-600 bg-secondary-100 bg-secondary-200
        bg-secondary-300 bg-secondary-400 bg-secondary-500 bg-secondary-600
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
