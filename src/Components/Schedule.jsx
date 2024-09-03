import React from "react";

const Schedule = () => {
  return (
    <div className="w-[350px] h-auto border rounded-md p-3 absolute right-24 top-96 bg-white">
      {/* Upcoming Schedule and Date in one line */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-[16px] font-medium leading-[24px] text-left">
          Upcoming Schedule
        </p>
        <p className="text-[12px] text-gray-500">Today, 13 Sep 2021</p>
      </div>

      {/* H6 Priority Label */}
      <div className="relative mb-4">
        <p className="absolute top-[-14px] left-0 text-xs font-semibold text-gray-400">
          Priority
        </p>
        <div className="border bg-[#FAFAFA] rounded-md p-3">
          <p className="font-medium text-sm mb-1">
            Review candidate applications
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-500">Today - 11:30 AM</p>
            <img src="./menu.png" alt="icon" className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* H6 Other Label */}
      <div className="relative mb-4">
        <p className="absolute top-[-14px] left-0 text-xs font-semibold text-gray-400">
          Other
        </p>
        <div className="border bg-[#FAFAFA] rounded-md p-3">
          <p className="font-medium text-sm mb-1">Interview with candidates</p>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-500">Today - 10:30 AM</p>
            <img src="./menu.png" alt="icon" className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Third schedule item */}
      <div className="border bg-[#FAFAFA] rounded-md p-3 mb-4">
        <p className="font-medium text-sm mb-1">
          Short meeting with product designer from IT Department
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">Today - 09:15 AM</p>
          <img src="./menu.png" alt="icon" className="w-4 h-4" />
        </div>
      </div>

      {/* Create a New Schedule */}
      <div className="w-full h-[32px] flex items-center justify-center border-t border-gray-300 rounded-b-md bg-white">
        <p className="text-center text-[#FF5151]">Create a New Schedule</p>
      </div>
    </div>
  );
};

export default Schedule;
