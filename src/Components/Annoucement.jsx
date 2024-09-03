import React from "react";

const Announcement = () => {
  return (
    <div className="w-[480px] h-[340px] bg-white p-4 shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">Announcement</p>
        <div className="flex border-1 bg-[#EFEFEF] p-1 items-center gap-2">
          <p className="text-sm  text-gray-500">Today, 13 Sep 2021</p>
          <img src="./Vector.png" alt="icon" className="w-3 h-2" />
        </div>
      </div>

      {/* Announcement Items */}
      <div className="bg-gray-100 p-2 mb-2 rounded-lg border border-gray-300">
        <div className="flex justify-between items-center">
          <p className="text-md font-medium flex-1">
            Outing schedule for every department
          </p>
          <div className="flex p-1 gap-1">
            <img src="./bipin.png" alt="icon" className="w-5 h-5" />
            <img src="./carbon.png" alt="icon" className="w-5 h-5" />
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          <p className="text-sm text-gray-400">5 Minutes ago</p>
        </div>
      </div>

      <div className="bg-gray-100 p-2 mb-2 rounded-lg border border-gray-300">
        <div className="flex justify-between items-center">
          <p className="text-md font-medium flex-1">
            Outing schedule for every department
          </p>

          <div className="flex p-1 gap-1">
            <img src="./bipin.png" alt="icon" className="w-5 h-5" />
            <img src="./carbon.png" alt="icon" className="w-5 h-5" />
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          <p className="text-sm text-gray-400">Yesterday, 12:30 PM</p>
        </div>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg border border-gray-300">
        <div className="flex justify-between items-center">
          <p className="text-md font-medium flex-1">
            Outing schedule for every department
          </p>

          <div className="flex p-1 gap-1">
            <img src="./bipin.png" alt="icon" className="w-5 h-5" />
            <img src="./carbon.png" alt="icon" className="w-5 h-5" />
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          <p className="text-sm text-gray-400">Yesterday, 09:15 AM</p>
        </div>
      </div>

      {/* See All Announcements */}
      <div className="flex justify-center mt-4 pt-2 border-t border-gray-300">
        <p className="text-[#FF5151]">See All Announcements</p>
      </div>
    </div>
  );
};

export default Announcement;
