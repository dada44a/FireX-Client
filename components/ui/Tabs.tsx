"use client";
import React, { useState } from "react";
import ShowManagement from "./Admin/ShowManagement";
import MovieManagement from "./Admin/MovieManagement";
import TicketBookings from "./Admin/TicketBookings";

const Tabs = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <>
      <div className="tabs tabs-box mt-6">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Show Management"
          defaultChecked
          onClick={() => setTabs(0)}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Movie Management"
          onClick={() => setTabs(1)}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab "
          aria-label="Bookings"
          onClick={() => setTabs(2)}
        />
      </div>

      <div id="content" className="mt-3 p-4">
        <div className={tabs!=0?"hidden":""}><ShowManagement/></div>
        <div className={tabs!=1?"hidden":""}><MovieManagement/> </div>
        <div className={tabs!=2?"hidden":""}><TicketBookings/></div>
      </div>
    </>
  );
};

export default Tabs;
