// MagneticElement Component
//
// Props:
// - children: ReactNode - The content to be rendered inside the magnetic element.
// - magneticStrength: number (default: 0.3) - Determines the strength of the magnetic pull effect. Higher values increase the pull strength.
// - nearAreaSize: number (default: 100) - Defines the radius around the element within which the magnetic effect is active. Larger values increase the area of effect.
// - scaleOnHover: boolean (default: false) - If true, the element will scale up slightly when hovered over, adding a visual emphasis.
// - className: string (default: "") - Additional CSS classes to apply to the element for custom styling.

import React, { useRef, useEffect, useState, useCallback } from "react";

const MagneticElement = ({ 
  children, 
  magneticStrength = 0.3, 
  nearAreaSize = 100,
  scaleOnHover = false,
  className = ""
}) => {
  const elementRef = useRef(null);
  const [isNear, setIsNear] = useState(false);

  const getElementCenter = useCallback(() => {
    const element = elementRef.current;
    if (!element) return { x: 0, y: 0 };
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }, []);

  const updateElementPosition = useCallback((e) => {
    const element = elementRef.current;
    if (!element) return;
    const elementCenter = getElementCenter();
    const distanceX = e.clientX - elementCenter.x;
    const distanceY = e.clientY - elementCenter.y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (distance < nearAreaSize) {
      setIsNear(true);
      const pull = (nearAreaSize - distance) / nearAreaSize;
      const currentTransform = window.getComputedStyle(element).transform;
      const isIdentityMatrix = currentTransform === 'none' || currentTransform === 'matrix(1, 0, 0, 1, 0, 0)';
      element.style.transition = "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      if (isIdentityMatrix) {
        element.style.transform = `translate(${distanceX * magneticStrength * pull}px, ${distanceY * magneticStrength * pull}px)`;
      } else {
        element.style.transform += ` translate(${distanceX * magneticStrength * pull}px, ${distanceY * magneticStrength * pull}px)`;
      }
    } else if (isNear) {
      element.style.transition = "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
      const originalTransform = element.getAttribute('data-original-transform') || '';
      element.style.transform = originalTransform;
      setIsNear(false);
    }
  }, [getElementCenter, isNear, magneticStrength, nearAreaSize]);

  const handleMouseEnter = useCallback(() => {
    const element = elementRef.current;
    if (scaleOnHover && element) {
      element.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      element.style.transform = `${element.style.transform || ''} scale(1.05)`;
    }
  }, [scaleOnHover]);

  const handleMouseLeave = useCallback(() => {
    const element = elementRef.current;
    if (scaleOnHover && element) {
      element.style.backgroundColor = "";
      const originalTransform = element.getAttribute('data-original-transform') || '';
      element.style.transform = originalTransform;
    }
    element.style.transition = "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
    if (!scaleOnHover) {
      const originalTransform = element.getAttribute('data-original-transform') || '';
      element.style.transform = originalTransform;
    }
    setIsNear(false);
  }, [scaleOnHover]);

  useEffect(() => {
    const element = elementRef.current;
    if (element && element.style.transform) {
      element.setAttribute('data-original-transform', element.style.transform);
    }
    document.addEventListener("mousemove", updateElementPosition);
    if (scaleOnHover) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      document.removeEventListener("mousemove", updateElementPosition);
      if (scaleOnHover) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [updateElementPosition, handleMouseEnter, handleMouseLeave, scaleOnHover]);

  return (
    <div ref={elementRef} className={className} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
};

export default MagneticElement; 