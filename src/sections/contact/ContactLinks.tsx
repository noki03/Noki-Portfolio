import React from "react";
import { contactLinks, type ContactLink } from "./contactLinksData";

const ContactLinks: React.FC = () => {
  // 1. The function that decodes and fires the mailto link
  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    encodedEmail?: string,
  ) => {
    if (encodedEmail) {
      e.preventDefault(); // Stop the default "#" anchor behavior
      const decodedEmail = atob(encodedEmail); // Decrypt base64 to plain text
      window.location.href = `mailto:${decodedEmail}?subject=Contact from Portfolio`;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-16">
      {contactLinks.map((link: ContactLink, i) => (
        <a
          key={i}
          // If it's the email, use a dummy link. Otherwise, use the real URL.
          href={link.isEmail ? "#" : link.href}
          // If it's the email, fire the decode function. Otherwise, do nothing.
          onClick={(e) =>
            link.isEmail ? handleEmailClick(e, link.encodedEmail) : undefined
          }
          // Only open in a new tab if it's NOT an email AND it starts with http
          target={
            !link.isEmail && link.href?.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel="noopener noreferrer"
          className={`group px-8 py-4 rounded-xl ${
            link.filled
              ? "bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 border border-primary-500/30"
              : "border border-neutral-600 text-neutral-100 hover:bg-card/50 backdrop-blur-sm hover:border-primary-500/30"
          } transition-all duration-300 font-semibold hover:scale-105 flex items-center gap-3`}
        >
          {link.icon}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
