import React from "react";
import FloatingDots from "../../components/util/FloatingDots";
import ContactHeader from "./ContactHeader";
import ContactLinks from "./ContactLinks";
import ContactOutro from "./ContactOutro";
import ContactBackground from "./ContactBackground";
import ContactBadge from "./ContactBadge";
import FadeInSection from "../../components/motion/FadeInSection";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center md:justify-start pt-40 text-neutral-100 px-6 md:px-12 overflow-hidden"
    >
      {/* Section Background */}
      <ContactBackground />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-6 ">
        <FadeInSection retrigger direction="down" delay={0.1}>
          <ContactBadge />
        </FadeInSection>

        <FadeInSection retrigger delay={0.2}>
          <ContactHeader />
        </FadeInSection>

        <FadeInSection retrigger delay={0.3}>
          <ContactLinks />
        </FadeInSection>

        <FadeInSection retrigger delay={0.4} direction="up">
          <ContactOutro />
        </FadeInSection>
      </div>

      {/* Floating Dots */}
      <FloatingDots />
    </section>
  );
};

export default Contact;
