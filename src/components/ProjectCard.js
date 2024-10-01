import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Dialog } from "@headlessui/react";
import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({
  title,
  baseImage,
  baseDescription,
  tools,
  dialectDescription,
  dialectImages,
  githubLink,
  liveLink,
  moreInformation,
  allTools,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col md:flex-row bg-base-100 rounded-lg shadow-lg overflow-hidden w-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full md:w-1/2 h-64 md:h-96">
          <img
            src={baseImage}
            alt={`${title} Project`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{baseDescription}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-semibold mb-2">Tools Used:</h3>
              <ul className="list-disc list-inside">
                {tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4 items-end">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubLink, "_blank");
                }}
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                GitHub
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(liveLink, "_blank");
                }}
              >
                Live Website
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
              <Dialog.Panel
                as={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-4xl rounded bg-white p-6 w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2">
                  <Dialog.Title className="text-2xl font-bold">
                    {title}
                  </Dialog.Title>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XIcon size={24} />
                  </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full md:w-1/2 space-y-4"
                  >
                    {dialectImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${title} screenshot ${index + 1}`}
                        className="w-full rounded-lg shadow-md"
                      />
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full md:w-1/2 space-y-4"
                  >
                    <h3 className="text-xl font-semibold">Project Overview</h3>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="space-y-2"
                    >
                      {dialectDescription}
                    </motion.div>
                    <h3 className="text-xl font-semibold">Tools Used</h3>
                    <motion.ul
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="list-disc list-inside"
                    >
                      {allTools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </motion.ul>
                    <h3 className="text-xl font-semibold">More Information</h3>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="space-y-2"
                    >
                      {moreInformation}
                    </motion.div>
                  </motion.div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
