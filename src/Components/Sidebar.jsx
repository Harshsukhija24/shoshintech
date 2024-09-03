import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed w-[220px] h-[100vh] bg-gray-50 p-4 flex flex-col gap-8">
      {/* Brand Section */}
      <div className="flex items-center left-10 gap-2">
        <img src="./logo.png" alt="logo" />
        <p className="text-lg font-bold">Vasitum</p>
      </div>

      {/* Main Menu Section */}
      <div className="flex flex-col gap-5">
        <p className="text-xs font-semibold text-gray-500">MAIN MENU</p>

        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg">
          <img src="./dashboard.png" alt="Dashboard Icon" className="w-5 h-5" />
          <p className="text-md font-medium">Dashboard</p>
        </div>

        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg">
          <img
            src="./recruitment.png"
            alt="Recruitment Icon"
            className="w-5 h-5"
          />
          <p className="text-md font-medium">Recruitment</p>
        </div>

        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg">
          <img src="./calendar.png" alt="Schedule Icon" className="w-5 h-5" />
          <p className="text-md font-medium">Schedule</p>
        </div>

        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg">
          <img src="./employee.png" alt="Employee Icon" className="w-5 h-5" />
          <p className="text-md font-medium">Employee</p>
        </div>

        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg">
          <img
            src="./department.png"
            alt="Department Icon"
            className="w-5 h-5"
          />
          <p className="text-md font-medium">Department</p>
        </div>
      </div>

      {/* Other Section */}
      <div className="flex flex-col gap-5">
        <p className="text-xs font-semibold text-gray-500 pl-4">OTHER</p>

        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg">
          <img src="./support.png" alt="Support Icon" className="w-5 h-5" />
          <p className="text-md font-medium">Support</p>
        </div>

        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg">
          <img src="./settings.png" alt="Settings Icon" className="w-5 h-5" />
          <p className="text-md font-medium">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
