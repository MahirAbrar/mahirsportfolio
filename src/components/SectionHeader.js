import React from "react";

const SectionHeader = ({ num, title, comment, sub }) => (
  <>
    <div className="flex items-baseline gap-3.5 flex-wrap mb-2.5">
      <span className="font-mono font-medium text-xs text-green">§ {num}</span>
      <h2 className="font-serif font-normal text-[32px] sm:text-4xl leading-none text-strong m-0">
        {title}
      </h2>
      {comment && (
        <span className="ml-auto font-mono text-xs text-mut hidden sm:inline">
          {comment}
        </span>
      )}
    </div>
    {sub && (
      <p className="text-sm leading-relaxed text-dim max-w-[560px] mt-0 mb-7">
        {sub}
      </p>
    )}
  </>
);

export default SectionHeader;
