import React from "react";

const Divider = ({ title }) => {
  return (
    <div className="w-screen mx-auto my-8 bg-none">
      <div className="border-black border-y-2 pb-2">
        <h3 className="text-center text-5xl  font-bold text-base-content w-full ">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Divider;
