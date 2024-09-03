import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed w-full sm:w-[220px] h-[100vh] bg-gray-50 p-4 flex flex-col gap-8">
      {/* Brand Section */}
      <div className="flex items-center gap-2">
        <img src="./logo.png" alt="logo" className="w-8 h-8" />
        <p className="text-lg font-bold">Vasitum</p>
      </div>

      {/* Main Menu Section */}
      <div className="flex flex-col gap-5">
        <p className="text-xs font-semibold text-gray-500">MAIN MENU</p>

        {[
          { text: "Dashboard", imgSrc: "./dashboard.png" },
          { text: "Recruitment", imgSrc: "./recruitment.png" },
          { text: "Schedule", imgSrc: "./calendar.png" },
          { text: "Employee", imgSrc: "./employee.png" },
          { text: "Department", imgSrc: "./department.png" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg"
          >
            <img
              src={item.imgSrc}
              alt={`${item.text} Icon`}
              className="w-5 h-5"
            />
            <p className="text-md font-medium">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Other Section */}
      <div className="flex flex-col gap-5">
        <p className="text-xs font-semibold text-gray-500 pl-4">OTHER</p>

        {[
          { text: "Support", imgSrc: "./support.png" },
          { text: "Settings", imgSrc: "./settings.png" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-gray-100 rounded-lg"
          >
            <img
              src={item.imgSrc}
              alt={`${item.text} Icon`}
              className="w-5 h-5"
            />
            <p className="text-md font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
