import React from "react";

const skills = [
  "React",
  "TypeScript",
  "Laravel",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "UI/UX Design",
  "API Integration",
];

const AboutSkills: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {skills.map((skill, index) => (
        <span
          key={skill}
          className="px-4 py-2 rounded-lg bg-card border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-primary-500/30 hover:text-primary-300 transition-all duration-300 cursor-default"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default AboutSkills;
