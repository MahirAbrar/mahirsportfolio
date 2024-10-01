import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimatedTitle = ({ strings }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <div className="h-[60px] overflow-hidden">
      <h1 className="text-5xl font-bold">
        <span ref={el} />
      </h1>
    </div>
  );
};

export default AnimatedTitle;
