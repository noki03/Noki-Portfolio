// src/sections/experience/ExperienceList.tsx
import FadeInSection from "../../components/motion/FadeInSection";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Web Developer",
    company: "DecoArts Marketing Inc.",
    period: "Jan 2024 – Present",
    description:
      "Developing and enhancing enterprise web systems, including CMS, Promotion, and Physical Count platforms. Focused on improving workflows, UI/UX, and backend logic using React, Laravel, and MySQL/Oracle. Implemented automation for reporting, SSO authentication with Keycloak, and offline-first functionality with IndexedDB to optimize performance and reliability.",
  },
  {
    role: "Web Developer Intern",
    company: "University of Southeastern Philippines - CIC Department",
    period: "Jul 2022 – Jan 2023",
    description:
      "Served as part of the core development team for a Web-Based Pre-Enrollment System. Designed and developed student interfaces for course browsing, selection, and enrollment, as well as data management tools for advisors and administrators. Contributed to testing, debugging, and feature enhancements to ensure a smooth and efficient enrollment experience.",
  },
];

const ExperienceList: React.FC = () => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, i) => (
        <FadeInSection
          key={i}
          delay={i * 0.3}
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
