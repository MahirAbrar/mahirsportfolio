import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto rounded-lg shadow-md p-6"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4">
        <ContactItem
          icon={
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="lg" />
          }
          title="LinkedIn"
          content="hamid-abrar-mahir"
          link="https://www.linkedin.com/in/hamid-abrar-mahir"
        />
        <ContactItem
          icon={<Mail className="mr-2" size={24} />}
          title="Email"
          content="hamid.mahir2597@yahoo.com"
          link="mailto:hamid.mahir2597@yahoo.com"
        />
        <ContactItem
          icon={<Phone className="mr-2" size={24} />}
          title="Phone"
          content="+61 493 403 978"
          link="tel:+61493403978"
        />
        <ContactItem
          icon={<MapPin className="mr-2" size={24} />}
          title="Location"
          content="Melbourne, Victoria"
        />
      </div>
    </motion.div>
  );
};

const ContactItem = ({ icon, title, content, link }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="mb-4 sm:mb-0">
    <div className="flex items-center mb-2">
      {icon}
      <span className="text-lg">{title}</span>
    </div>
    {link ? (
      <a href={link} className="text-blue-600 hover:underline">
        {content}
      </a>
    ) : (
      <span>{content}</span>
    )}
  </motion.div>
);

export default ContactMe;
