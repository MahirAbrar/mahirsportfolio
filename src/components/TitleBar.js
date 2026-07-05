import React from "react";

const TitleBar = () => (
  <div className="flex items-center gap-2 px-4 py-3 bg-panel border-b border-line rounded-t-[14px]">
    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
    <span className="ml-2 font-mono text-xs leading-none text-mut">
      mahir@melbourne : ~/portfolio — zsh
    </span>
  </div>
);

export default TitleBar;
