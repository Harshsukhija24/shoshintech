import React from "react";

const Activity = () => {
  return (
    <div className="w-[350px] h-[220px] bg-[#161E54] rounded-lg shadow-md absolute right-24 top-32">
      <div className="bg-[#1B204A] w-full h-[40px] p-2 pl-4 rounded-t-lg flex items-center text-white">
        <h3 className="text-base font-semibold">Recent Activity</h3>
      </div>
      <div className="p-3">
        <h6 className="text-xs text-gray-400 mb-1">
          10:40 AM, Fri 10 Sept 2021
        </h6>
        <h2 className="text-lg text-white font-semibold mb-1">
          You Posted a New Job
        </h2>
        <h4 className="text-sm text-gray-300">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </h4>
      </div>
      <div className="flex justify-between items-center p-3 border-t border-gray-700">
        <h2 className="text-sm font-semibold text-white">
          Today you makes 12 Activity
        </h2>
        <button className="px-3 py-1 bg-[#FF5151] text-white rounded-lg font-semibold text-sm">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default Activity;
