import React from "react";

const CastAvatar = () => {
  return (
    <div>
      <div className="images border border-red-300 h-[250px] rounded-full"></div>
      <div className="flex flex-col justify-center items-center mt-5">
        <p className="text-lg font-semibold">Actor Name</p>
        <p className="text-gray-500">Character</p>
      </div>
    </div>
  );
};

export default CastAvatar;
