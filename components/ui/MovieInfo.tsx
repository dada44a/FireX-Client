import React from "react";
import Info from "./MovieInfo/Info";
import Booking from "./MovieInfo/Booking";

const MovieInfo = () => {
  return (
    <div className="p-[50px]">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Info"
          defaultChecked
        />
        <div className="tab-content p-5">
          <Info/>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Shows"
          
        />
        <div className="tab-content p-5">
          <Booking/>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
