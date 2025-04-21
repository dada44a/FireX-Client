import React from "react";
import CastAvatar from "./CastAvatar";

const Info = () => {
  return (
    <div className="flex gap-2 flex-col">
      <p className="text-2xl font-semibold">Synopsis</p>
      <p className="text-gray-400">
        A thief who steals corporate secrets through the use of dream-sharing
        technology is given the inverse task of planting an idea into the mind
        of a C.E.O
      </p>
      <p className="text-2xl font-semibold mt-3">Cast & Crew</p>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-5 gap-5 pt-5">
        <CastAvatar/>
        <CastAvatar/>
        <CastAvatar/>
        <CastAvatar/>
        <CastAvatar/>
      </div>
    </div>
  );
};

export default Info;
