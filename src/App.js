import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Annoucement from "./Components/Annoucement";
import Activity from "./Components/Activity";
import Schedule from "./Components/Schedule";

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 ml-[250px] flex flex-col h-screen">
        {/* Navbar */}
        <div className="p-4">
          <Navbar />
        </div>

        <main className="flex-1 flex flex-col p-4 ">
          {/* Centered Content */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>

            {/* Dashboard Cards */}
            <div className="flex gap-4 mb-4">
              <div className="w-[150px] h-[100px] p-3 bg-[#FFEFE7] rounded-lg shadow-md flex flex-col justify-between">
                <h3 className=" text-sm font-semibold">Available Position</h3>
                <h1 className="text-xl font-bold">24</h1>
                <h5 className="text-xs text-gray-500">4 urgently needed</h5>
              </div>
              <div className="w-[150px] h-[100px] p-3 bg-[#E8F0FB] rounded-lg shadow-md flex flex-col justify-between">
                <h3 className="text-sm font-semibold">Job Open</h3>
                <h1 className="text-xl font-bold">10</h1>
                <h5 className="text-xs text-gray-500">4 active hiring</h5>
              </div>
              <div className="w-[150px] h-[100px] p-3 bg-[#FDEBF9] rounded-lg shadow-md flex flex-col justify-between">
                <h3 className="text-sm font-semibold">New Employees</h3>
                <h1 className="text-xl font-bold">24</h1>
                <h5 className="text-xs text-gray-500">4 Department</h5>
              </div>
            </div>

            {/* Additional Cards */}
            <div className="flex gap-4 mb-4">
              <div className="w-[250px] h-[140px] p-4 bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold">Total Employees</h3>
                  <h1 className="text-xl font-bold">216</h1>
                  <h6 className="text-xs text-gray-500">120 Men</h6>
                  <h6 className="text-xs text-gray-500">96 Women</h6>
                </div>
                <div>
                  <img
                    src="./frame.png"
                    alt="Total Employees"
                    className="w-16 h-14"
                  />
                </div>
              </div>
              <div className="w-[250px] h-[140px] p-4 bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold">Talent Request</h3>
                  <h1 className="text-xl font-bold">16</h1>
                  <h6 className="text-xs text-gray-500">6 Men</h6>
                  <h6 className="text-xs text-gray-500">10 Women</h6>
                </div>
                <div>
                  <img
                    src="./frame1.png"
                    alt="Talent Request"
                    className="w-16 h-14"
                  />
                </div>
              </div>
            </div>

            {/* Annoucement */}
            <Annoucement />
          </div>

          {/* Right Side (Activity and Schedule) */}
          <div className="w-[300px] flex flex-col gap-4">
            {/* Activity */}
            <Activity />
            <Schedule />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
