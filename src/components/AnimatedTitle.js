import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimatedTitle = ({ strings }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      loopCount: 1,
      cursorChar: "|",
      onComplete: (self) => {
        self.cursor.remove();
      },
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <div className="h-[60px] overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        <span ref={el} />
      </h1>
    </div>
  );
};

export default AnimatedTitle;
