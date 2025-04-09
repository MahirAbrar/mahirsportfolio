import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const AnimatedButton = ({ 
  text = "HOVER ME", 
  onClick, 
  icon, 
  className = "",
  width = 180,
  height = 60
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

  const styles = {
    container: {
      width: `${width}px`,
      height: `${height}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    center: {
      width: `${width}px`,
      height: `${height}px`,
      position: 'relative'
    },
    button: {
      width: `${width}px`,
      height: `${height}px`,
      cursor: 'pointer',
      background: '#100357',
      border: '1px solid #91C9FF',
      outline: 'none',
      transition: '1s ease-in-out',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      overflow: 'hidden',
      letterSpacing: '1px',
      fontSize: `${height * 0.3}px`
    },
    border: {
      position: 'absolute',
      left: 0,
      top: 0,
      fill: 'none',
      stroke: '#fff',
      strokeDasharray: `${width + height} ${width * 2 + height * 2}`,
      strokeDashoffset: width + height,
      transition: '1s ease-in-out'
    },
    borderHover: {
      strokeDashoffset: -(width * 2 + height * 2)
    },
    span: {
      color: 'white',
      fontSize: `${height * 0.3}px`,
      fontWeight: 100,
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  };

  return (
    <div className={`animated-button-container ${className}`} style={styles.container}>
      <div className="animated-button-center" style={styles.center}>
        <motion.button
          ref={buttonRef}
          className="animated-button"
          style={styles.button}
          onClick={onClick}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            width={width} 
            height={height} 
            viewBox={`0 0 ${width} ${height}`} 
            className="border" 
            style={{
              ...styles.border,
              ...(hovering ? styles.borderHover : {})
            }}
          >
            <polyline points={`${width-1},1 ${width-1},${height-1} 1,${height-1} 1,1 ${width-1},1`} className="bg-line" />
            <polyline points={`${width-1},1 ${width-1},${height-1} 1,${height-1} 1,1 ${width-1},1`} className="hl-line" />
          </svg>
          <span style={styles.span}>
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
    </div>
  );
};

export default AnimatedButton; 