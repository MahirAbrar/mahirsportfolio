// GlowingButton.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const GlowingButton = ({ onClick, children }) => {
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {hovering && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: "2px",
            height: "2px",
            background: "rgba(255, 255, 255, 0.55)",
            boxShadow: "0 0 30px 0.7rem rgba(255, 255, 255, 1)",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GlowingButton;