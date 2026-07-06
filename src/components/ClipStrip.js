import { useCallback, useEffect, useRef, useState } from "react";
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
  const scrollRef = useRef(null);
  const clipRefs = useRef([]);
  const [zoomed, setZoomed] = useState(null);
  const [current, setCurrent] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(clips.length > 1);

  const total = clips.length;
  const multi = total > 1;
  const behavior = reduceMotion ? "auto" : "smooth";

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    const elLeft = el.getBoundingClientRect().left;
    let best = 0;
    let bestDist = Infinity;
    clipRefs.current.forEach((c, i) => {
      if (!c) return;
      const d = Math.abs(c.getBoundingClientRect().left - elLeft);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setCurrent(best);
  }, []);

  // reset when the case closes; recompute affordances when it opens
  useEffect(() => {
    if (!active) {
      setZoomed(null);
      setCurrent(0);
      if (scrollRef.current) scrollRef.current.scrollLeft = 0;
      return;
    }
    const timers = [0, 300, 560].map((t) => setTimeout(updateState, t));
    return () => timers.forEach(clearTimeout);
  }, [active, updateState]);

  useEffect(() => {
    window.addEventListener("resize", updateState);
    return () => window.removeEventListener("resize", updateState);
  }, [updateState]);

  const scrollToIndex = (i) => {
    const el = scrollRef.current;
    const target = clipRefs.current[i];
    if (!el || !target) return;
    const delta =
      target.getBoundingClientRect().left - el.getBoundingClientRect().left;
    el.scrollBy({ left: delta, behavior });
  };

  const go = (dir) => {
    const next = Math.max(0, Math.min(total - 1, current + dir));
    scrollToIndex(next);
  };

  const arrowBase =
    "flex-none flex items-center justify-center rounded-full bg-panel2 border text-[18px] leading-none transition-colors duration-150";

  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center gap-3 mb-3.5">
        <span className="font-sans font-semibold text-[13px] leading-[1.3] text-body">
          See it in action{" "}
          <span className="text-mut font-normal">
            — {total} short clip{multi ? "s" : ""}
          </span>
        </span>
        {multi && (
          <span className="flex-none font-mono text-[11px] leading-none text-mut">
            {current + 1} / {total}
          </span>
        )}
      </div>

      {/* strip row */}
      <div className="flex items-center gap-3">
        {multi && (
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={!canLeft}
            aria-label="Previous clips"
            className={`hidden dt:flex w-[42px] h-[42px] ${arrowBase} ${
              canLeft
                ? "border-green text-green cursor-pointer"
                : "border-line2 text-mut opacity-50 cursor-default"
            }`}
          >
            ‹
          </button>
        )}

        <div className="relative flex-1 min-w-0">
          <div
            ref={scrollRef}
            onScroll={updateState}
            className="flex gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar pb-1"
          >
            {clips.map(({ src, caption, alt }, i) => {
              const isZoomed = zoomed === i;
              const ease = reduceMotion
                ? "none"
                : "0.45s cubic-bezier(0.4, 0, 0.2, 1)";
              return (
                <button
                  type="button"
                  key={src}
                  ref={(el) => (clipRefs.current[i] = el)}
                  onClick={() => setZoomed(isZoomed ? null : i)}
                  aria-label={
                    isZoomed
                      ? `Close enlarged clip ${i + 1} of ${total}`
                      : `Enlarge clip ${i + 1} of ${total}`
                  }
                  style={{
                    width: isZoomed ? zoomW : baseW,
                    maxWidth: "82vw",
                    transition: reduceMotion ? "none" : `width ${ease}`,
                  }}
                  className={`flex-none block text-left snap-start bg-transparent border-0 p-0 ${
                    isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                >
                  <div
                    style={{
                      height: isZoomed ? zoomH : baseH,
                      transition: reduceMotion ? "none" : `height ${ease}`,
                    }}
                    className="relative rounded-[9px] border border-line bg-panel2 overflow-hidden"
                  >
                    <Media
                      src={src}
                      alt={alt || caption}
                      className="w-full h-full object-cover object-top"
                    />
                    <span
                      style={{ background: "var(--pillBg)" }}
                      className="absolute bottom-2 right-2 inline-flex items-center justify-center gap-1.5 rounded-2xl border border-green text-green font-mono font-semibold text-[11px] leading-none px-[13px] py-[11px] min-h-[44px] dt:px-3 dt:py-2 dt:min-h-0"
                    >
                      {isZoomed ? (
                        "✕ Close"
                      ) : (
                        <>
                          <span className="dt:hidden">⤢ Tap to enlarge</span>
                          <span className="hidden dt:inline">⤢ Enlarge</span>
                        </>
                      )}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] leading-none text-mut mt-1.5">
                    {String(i + 1).padStart(2, "0")} · {caption}
                  </div>
                </button>
              );
            })}
          </div>

          {/* right-edge peek fade */}
          {multi && canRight && (
            <div
              aria-hidden="true"
              style={{
                height: baseH,
                width: 44,
                background: "linear-gradient(to left, var(--panel), transparent)",
              }}
              className="pointer-events-none absolute top-0 right-0"
            />
          )}

          {/* mobile overlay arrows */}
          {multi && (
            <>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next clips"
                style={{ top: baseH / 2 - 22, background: "var(--arrowBg)" }}
                className={`dt:hidden absolute right-1.5 w-11 h-11 rounded-full border border-green text-green text-[19px] leading-none flex items-center justify-center ${
                  reduceMotion ? "" : "transition-opacity duration-150"
                } ${canRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                ›
              </button>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous clips"
                style={{ top: baseH / 2 - 22, background: "var(--arrowBg)" }}
                className={`dt:hidden absolute left-1.5 w-11 h-11 rounded-full border border-green text-green text-[19px] leading-none flex items-center justify-center ${
                  reduceMotion ? "" : "transition-opacity duration-150"
                } ${canLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                ‹
              </button>
            </>
          )}
        </div>

        {multi && (
          <button
            type="button"
            onClick={() => go(1)}
            disabled={!canRight}
            aria-label="Next clips"
            className={`hidden dt:flex w-[42px] h-[42px] ${arrowBase} ${
              canRight
                ? "border-green text-green cursor-pointer"
                : "border-line2 text-mut opacity-50 cursor-default"
            }`}
          >
            ›
          </button>
        )}
      </div>

      {/* dots */}
      {multi && (
        <div className="flex justify-center items-center gap-2 mt-3.5">
          {clips.map(({ src }, i) => (
            <button
              type="button"
              key={src}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to clip ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-150 ${
                i === current ? "bg-green" : "bg-line2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClipStrip;
