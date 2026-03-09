import React, { type ReactNode } from "react";
import FadeInSection from "../../components/motion/FadeInSection";
import ExperienceCard from "./ExperienceCard";

import { FaReact, FaPhp } from "react-icons/fa";
import { SiLaravel, SiMysql, SiKeycloak, SiBootstrap } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { BsDatabase, BsDatabaseFillGear } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa6";

export interface SkillBadge {
  name: string;
  icon: ReactNode;
}

export interface ExperienceData {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: SkillBadge[];
}

const experiences: ExperienceData[] = [
  {
    role: "Web Developer",
    company: "DecoArts Marketing Inc.",
    period: "Jan 2024 – Present",
    description:
      "Developing and enhancing enterprise web systems, including CMS, Promotion, and Physical Count platforms. Focused on improving workflows, UI/UX, and backend logic. Implemented automation for reporting, SSO authentication with Keycloak, and offline-first functionality with IndexedDB to optimize performance and reliability.",
    skills: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "Oracle", icon: <BsDatabase className="text-[#F80000]" /> },
      { name: "Keycloak", icon: <SiKeycloak className="text-[#2CA0C7]" /> },
      {
        name: "IndexedDB",
        icon: <BsDatabaseFillGear className="text-neutral-400" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiBootstrap className="text-[#7952B3]" />,
      },
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    ],
  },
  {
    role: "Web Developer Intern",
    company: "University of Southeastern Philippines - CIC",
    period: "Jul 2022 – Jan 2023",
    description:
      "Served as part of the core development team for a Web-Based Pre-Enrollment System. Designed and developed student interfaces for course browsing, selection, and enrollment, as well as data management tools for advisors and administrators. Contributed to testing, debugging, and feature enhancements to ensure a smooth and efficient enrollment experience.",
    skills: [
      { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
      {
        name: "JavaScript",
        icon: <TbBrandJavascript className="text-[#F7DF1E]" />,
      },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
    ],
  },
];

const ExperienceList: React.FC = () => {
  return (
    // Centered layout with spacing between the glowing cards
    <div className="flex flex-col items-center space-y-10 md:space-y-14 mt-8 w-full">
      {experiences.map((exp, i) => (
        <FadeInSection
          key={i}
          delay={i * 0.2}
          retrigger
          direction="up"
          className="w-full"
        >
          <ExperienceCard {...exp} />
        </FadeInSection>
      ))}
    </div>
  );
};

export default ExperienceList;
