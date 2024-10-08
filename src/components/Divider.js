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
        <h3 className="text-center text-3xl md:text-5xl font-bold text-con w-full py-2">
          {title}
        </h3>
        {note && (
          <p
            className={`text-center md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 text-base italic transition-opacity duration-300 mt-2 md:mt-0 ${
              isVisible ? "md:opacity-100" : "md:opacity-0"
            }`}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  );
};

export default Divider;
