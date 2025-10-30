import React from "react";
import FloatingDots from "../../components/util/FloatingDots";
import ContactHeader from "./ContactHeader";
import ContactLinks from "./ContactLinks";
import ContactOutro from "./ContactOutro";
import ContactBackground from "./ContactBackground";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center text-neutral-100 py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Section Background */}
      <ContactBackground />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <ContactHeader />
        <ContactLinks />
        <ContactOutro />
      </div>

      {/* Floating Dots */}
      <FloatingDots />
    </section>
  );
};

export default Contact;
