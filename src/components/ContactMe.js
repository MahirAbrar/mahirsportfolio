import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYahoo } from "@fortawesome/free-brands-svg-icons";
// import {
//   faEnvelope,
//   faLocationDot,
//   faPaperPlane,
// } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto  rounded-lg shadow-md p-6"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          <span>LinkedIn</span>
        </div>
        <a
          href="https://www.linkedin.com/in/hamid-abrar-mahir"
          className="text-blue-600 hover:underline"
        >
          hamid-abrar-mahir
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
        <div className="flex items-center mb-2">
          {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> */}
          <span>Email</span>
        </div>
        <a
          href="mailto:hamid.mahir2597@yahoo.com"
          className="text-blue-600 hover:underline"
        >
          hamid.mahir2597@yahoo.com
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
        <div className="flex items-center mb-2">
          {/* <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> */}
          <span>Location</span>
        </div>
        <span>Melbourne, Victoria</span>
      </motion.div>
      <form onSubmit={handleSubmit}>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          placeholder="johndoe@xyz.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded h-32"
          required
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center"
        >
          {/* <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> */}
          Submit Form
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactMe;
