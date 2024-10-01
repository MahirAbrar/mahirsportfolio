import React, { useState, useEffect, useRef } from "react";

const Divider = ({ title, note }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dividerRef = useRef(null);
  const timerRef = useRef(null);

  const showNote = () => {
    setIsVisible(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showNote();
        }
      },
      { threshold: 0.1 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      showNote();
    }
  }, [isHovered]);

  return (
    <div
      className="w-screen mx-auto my-8 bg-none"
      ref={dividerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="border-black border-y-2 pb-2 relative">
        <h3 className="text-center text-5xl font-bold text-con w-full">
          {title}
        </h3>
        {note && (
          <span
            className={`absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 italic transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {note}
          </span>
        )}
      </div>
    </div>
  );
};

export default Divider;
