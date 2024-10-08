import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[40px] flex items-center justify-between px-4 sm:px-8 bg-white shadow-md">
      {/* Search Bar */}
      <div className="flex-grow flex items-center">
        <div className="w-full sm:w-[300px] h-[40px] flex items-center border border-gray-300 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full px-4 py-2 focus:outline-none"
          />
          <img src="./search.png" alt="Search Icon" className="w-6 h-6 mr-2" />
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4">
        <img
          src="./roundnotifications.png"
          alt="Notification Icon"
          className="w-6 h-6"
        />
        <img src="./chat.png" alt="Message Icon" className="w-6 h-6" />
        <img
          src="./unsplash.png"
          alt="Profile"
          className="w-7 h-7 rounded-full"
        />
        <p className="text-base font-medium">Admirra John</p>
        <img src="./Vector.png" alt="Profile" className="w-5 h-3" />
      </div>
    </nav>
  );
};

export default Navbar;
