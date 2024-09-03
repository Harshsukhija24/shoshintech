import React from "react";

const Announcement = () => {
  return (
    <div className="w-full max-w-[480px] h-auto bg-white p-4 shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">Announcement</p>
        <div className="flex items-center gap-2 bg-[#EFEFEF] p-1 rounded">
          <p className="text-sm text-gray-500">Today, 13 Sep 2021</p>
          <img src="./Vector.png" alt="icon" className="w-3 h-2" />
        </div>
      </div>

      {/* Announcement Items */}
      {[
        { text: "Outing schedule for every department", time: "5 Minutes ago" },
        {
          text: "Outing schedule for every department",
          time: "Yesterday, 12:30 PM",
        },
        {
          text: "Outing schedule for every department",
          time: "Yesterday, 09:15 AM",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-2 mb-2 rounded-lg border border-gray-300"
        >
          <div className="flex justify-between items-center">
            <p className="text-md font-medium flex-1">{item.text}</p>
            <div className="flex p-1 gap-1">
              <img src="./bipin.png" alt="icon" className="w-5 h-5" />
              <img src="./carbon.png" alt="icon" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-2 mt-1">
            <p className="text-sm text-gray-400">{item.time}</p>
          </div>
        </div>
      ))}

      {/* See All Announcements */}
      <div className="flex justify-center mt-4 pt-2 border-t border-gray-300">
        <p className="text-[#FF5151]">See All Announcements</p>
      </div>
    </div>
  );
};

export default Announcement;
