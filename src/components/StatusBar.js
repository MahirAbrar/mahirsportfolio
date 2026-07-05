import React, { useEffect, useState } from "react";

const STATUS_FLAG = "● building retentive ios";

const formatTime = () =>
  new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  }).format(new Date());

const StatusBar = () => {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="sticky bottom-0 flex justify-between gap-4 px-[22px] py-[9px] bg-green text-greenink font-mono font-semibold text-[11px] leading-none rounded-b-[13px]">
      <span>● main · mahirabrar.net</span>
      <span>
        Melbourne {time}
        {STATUS_FLAG && ` · ${STATUS_FLAG}`}
      </span>
    </div>
  );
};

export default StatusBar;
