"use client";
import React from "react";

const Booking = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [selectedShow, setSelectedShow] = React.useState(0);

  return (
    <div>
      {/* name of each tab group should be unique */}
      {/* name of each tab group should be unique */}
      <div role="tablist" className="tabs tabs-border">
        <a
          role="tab"
          className={selectedTab === 0 ? "tab tab-active" : "tab"}
          onClick={() => setSelectedTab(0)}
        >
          19 May
        </a>
        <a
          role="tab"
          className={selectedTab === 1 ? "tab tab-active" : "tab"}
          onClick={() => setSelectedTab(1)}
        >
          20 May
        </a>
        <a
          role="tab"
          className={selectedTab === 2 ? "tab tab-active" : "tab"}
          onClick={() => setSelectedTab(2)}
        >
          21 May
        </a>
      </div>

      <div
        className={
          selectedTab === 0
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5"
            : "hidden"
        }
      >
 {Array.from({ length: 5 }).map((_, i) => (
          <div
            onClick={() => setSelectedShow(i)}
            key={i}
            className={
              selectedShow === i
                ? "bg-error h-[120px] rounded-2xl flex flex-col items-center justify-center gap-1 p-2"
                : "h-[120px] rounded-2xl bg-base-200 flex flex-col items-center justify-center gap-1 hover:border border-warning p-2"
            }
          >
            <p className="text-lg font-bold">12:00</p>
            <p className={selectedShow==i?"text-white text-[14px]":"text-gray-400"}>Cube 3</p>
            <p className={selectedShow==i?"text-white text-[14px]":"text-gray-500"}>$13</p>
          </div>
        ))}
      </div>

      <div
        className={
          selectedTab === 1
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5"
            : "hidden"
        }
      >
       {Array.from({ length: 3 }).map((_, i) => (
          <div
            onClick={() => setSelectedShow(i)}
            key={i}
            className={
              selectedShow === i
                ? "bg-error h-[120px] rounded-2xl flex flex-col items-center justify-center gap-1 p-2"
                : "h-[120px] rounded-2xl bg-base-200 flex flex-col items-center justify-center gap-1 hover:border border-warning p-2"
            }
          >
            <p className="text-lg font-bold">12:00</p>
            <p className={selectedShow==i?"text-white text-[14px]":"text-gray-400"}>Cube 3</p>
            <p className={selectedShow==i?"text-white text-[14px]":"text-gray-500"}>$13</p>
          </div>
        ))}
      </div>

      <div
        className={
          selectedTab === 2
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5"
            : "hidden"
        }
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            onClick={() => setSelectedShow(i)}
            key={i}
            className={
              selectedShow === i
                ? "bg-error h-[120px] rounded-2xl flex flex-col items-center justify-center gap-1 p-2"
                : "h-[120px] rounded-2xl bg-base-200 flex flex-col items-center justify-center gap-1 hover:border border-warning p-2"
            }
          >
            <p className="text-lg font-bold">12:00</p>
            <p className={selectedShow==i?"text-white text-[14px]":"text-gray-400"}>Cube 3</p>
            <p className={selectedShow==i?"text-white text-[14px]":"text-gray-500"}>$13</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
