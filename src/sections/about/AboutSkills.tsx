import React, { type ReactNode } from "react";
import Marquee from "../../components/ui/Marquee";
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
  { name: "React", icon: <FaReact className="text-[#61DAFB] w-5 h-5" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] w-5 h-5" />,
  },
  { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20] w-5 h-5" /> },
  { name: "PHP", icon: <FaPhp className="text-[#777BB4] w-5 h-5" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1] w-5 h-5" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4] w-5 h-5" />,
  },
  {
    name: "UI/UX",
    icon: <MdOutlineDesignServices className="text-purple-400 w-5 h-5" />,
  },
  { name: "REST APIs", icon: <TbApi className="text-green-400 w-5 h-5" /> },
];

const AboutSkills: React.FC = () => {
  return (
    <div
      className="mt-8 block w-full max-w-screen overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* The Magic UI Marquee */}
      <Marquee
        pauseOnHover
        style={{ "--duration": "25s" } as React.CSSProperties}
        className="py-2"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2 mx-1.5 md:px-5 md:py-2.5 md:mx-2 rounded-xl bg-[#161b22]/80 backdrop-blur-sm border border-neutral-800/80 text-neutral-300 font-medium transition-colors hover:border-primary-500/50 hover:text-white cursor-default shadow-sm"
          >
            {skill.icon}
            <span className="text-sm whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AboutSkills;
