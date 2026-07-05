import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Media from "./Media";

const ClipStrip = ({
  clips,
  active = true,
  baseW = 300,
  baseH = 170,
  zoomW = 620,
  zoomH = 350,
}) => {
  const reduceMotion = useReducedMotion();
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    if (!active) setZoomed(null);
  }, [active]);

  const ease = "0.45s cubic-bezier(0.4, 0, 0.2, 1)";

  return (
    <>
      <div className="flex items-start gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-1">
        {clips.map(({ src, caption, alt }, i) => {
          const isZoomed = zoomed === i;
          return (
            <div
              key={src}
              onClick={() => setZoomed(isZoomed ? null : i)}
              style={{
                width: isZoomed ? zoomW : baseW,
                maxWidth: "82vw",
                transition: reduceMotion ? "none" : `width ${ease}`,
              }}
              className={`flex-none snap-start ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
            >
              <div
                style={{
                  height: isZoomed ? zoomH : baseH,
                  transition: reduceMotion ? "none" : `height ${ease}`,
                }}
                className="rounded-[9px] border border-line bg-panel2 overflow-hidden"
              >
                <Media
                  src={src}
                  alt={alt || caption}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="font-mono text-[10px] leading-none text-mut mt-1.5">
                {String(i + 1).padStart(2, "0")} · {caption}
                {isZoomed && " · click to shrink"}
              </div>
            </div>
          );
        })}
      </div>
      <div className="font-mono text-[10px] leading-none text-mut mt-2.5">
        — {clips.length > 1 ? "drag to scrub · " : ""}click a clip to zoom ·{" "}
        {clips.length} {clips.length === 1 ? "clip" : "clips"} —
      </div>
    </>
  );
};

export default ClipStrip;
