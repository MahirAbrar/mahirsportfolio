// GlowingButton.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const GlowingButton = ({ 
  onClick, 
  children,
  width = "auto",
  height = "auto",
  borderRadius = "full",
  bgColor = "bg-primary",
  textColor = "text-white",
  glowColor = "rgba(255, 255, 255, 1)"
}) => {
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
      className={`px-6 py-2 ${bgColor} ${textColor} rounded-${borderRadius} shadow-lg hover:shadow-xl transition-all duration-300 transform relative overflow-hidden`}
      style={{ width, height }}
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
            boxShadow: `0 0 30px 0.7rem ${glowColor}`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GlowingButton;
