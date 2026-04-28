import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 mt-16 px-4 sm:px-6 lg:px-8 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <span>© {year} Hamid Abrar Mahir.</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            Melbourne, Australia
          </span>
        </div>
        <nav aria-label="Social profiles" className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/hamid-abrar-mahir/"
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="Hamid Abrar Mahir on LinkedIn"
            className="hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/MahirAbrar"
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="Hamid Abrar Mahir on GitHub"
            className="hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://x.com/CodingLifts"
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="Hamid Abrar Mahir on X"
            className="hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a
            href="mailto:hamid.mahir2597@yahoo.com"
            aria-label="Email Hamid Abrar Mahir"
            className="hover:text-blue-500 transition-colors flex items-center"
          >
            <Mail size={20} />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
