import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const AnimatedButton = ({ text = "HOVER ME", onClick, icon, className = "" }) => {
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
    <div className={`animated-button-container ${className}`}>
      <div className="animated-button-center">
        <motion.button
          ref={buttonRef}
          className="animated-button"
          onClick={onClick}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          <span>
            {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
            {text}
          </span>
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
        </motion.button>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Lato:100&display=swap');
        
        .animated-button-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .animated-button-center {
          width: 180px;
          height: 60px;
          position: relative;
        }
        
        .animated-button {
          width: 180px;
          height: 60px;
          cursor: pointer;
          background: #100357;
          border: 1px solid #91C9FF;
          outline: none;
          transition: 1s ease-in-out;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          overflow: hidden;
          letter-spacing: 1px;
          font-size: 14px;
        }
        
        .animated-button .border {
          position: absolute;
          left: 0;
          top: 0;
          fill: none;
          stroke: #fff;
          stroke-dasharray: 150 480;
          stroke-dashoffset: 150;
          transition: 1s ease-in-out;
        }
        
        .animated-button:hover {
          transition: 1s ease-in-out;
          background: #100357;
        }
        
        .animated-button:hover .border {
          stroke-dashoffset: -480;
        }
        
        .animated-button span {
          color: white;
          font-size: 20px;
          font-weight: 100;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default AnimatedButton; 