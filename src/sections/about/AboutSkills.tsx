import React, { type ReactNode } from "react";
// Import official brand icons from Simple Icons (si) and FontAwesome (fa)
import {
  SiTypescript,
  SiLaravel,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaPhp } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbApi } from "react-icons/tb";

interface Skill {
  name: string;
  icon: ReactNode;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: (
      <FaReact className="w-5 h-5 text-[#61DAFB] group-hover:rotate-180 transition-transform duration-700" />
    ),
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="w-4 h-4 text-[#FF2D20]" />,
  },
  {
    name: "PHP",
    icon: <FaPhp className="w-5 h-5 text-[#777BB4]" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-5 h-5 text-[#4479A1]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
  },
  {
    name: "UI/UX Design",
    icon: <MdOutlineDesignServices className="w-4 h-4 text-purple-400" />,
  },
  {
    name: "API Integration",
    icon: <TbApi className="w-5 h-5 text-green-400" />,
  },
];

const AboutSkills: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {skills.map((skill, index) => (
        <span
          key={skill.name}
          className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161b22]/80 backdrop-blur-sm border border-neutral-800/80 text-neutral-300 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20 hover:text-white cursor-default"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {skill.icon}
          <span>{skill.name}</span>
        </span>
      ))}
    </div>
  );
};

export default AboutSkills;
