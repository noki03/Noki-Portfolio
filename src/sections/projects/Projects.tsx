import React from "react";
import FloatingDots from "../../components/util/FloatingDots";
import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";
import ProjectsCTA from "./ProjectsCTA";
import { projects } from "./projectsData";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-bg text-neutral-200 py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-linear-to-br from-bg via-card to-bg transition-all duration-1000" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,19,16,0.8)_0%,rgba(10,19,16,0.4)_40%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <ProjectsHeader />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        <ProjectsCTA />
      </div>

      <FloatingDots />
    </section>
  );
};

export default Projects;
