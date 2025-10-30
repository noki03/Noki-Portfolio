import React from "react";
import FloatingDots from "../../components/util/FloatingDots";
import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";
import ProjectsCTA from "./ProjectsCTA";
import ProjectsBackground from "./ProjectsBackground";
import { projects } from "./projectsData";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center md:justify-start pt-24 text-neutral-100 px-6 md:px-12 overflow-hidden"
    >
      {/* Backgrounds */}
      <ProjectsBackground />

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
