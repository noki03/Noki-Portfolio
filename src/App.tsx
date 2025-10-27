// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    // Set the main app background here (e.g., bg-bg or bg-neutral-950 for pure black)
    <div className="min-h-screen flex flex-col  text-neutral-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="grow ">
        <section id="hero">
          <Hero />
        </section>

        {/* 👇 REMOVE bg-surface/bg-bg from sections */}
        <section id="about" className="border-t border-neutral-800">
          <About />
        </section>

        <section id="projects" className="border-t border-neutral-800">
          <Projects />
        </section>

        <section id="contact" className="border-t border-neutral-800">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
