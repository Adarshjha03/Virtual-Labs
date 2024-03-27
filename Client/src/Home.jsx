import React, { useState } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  // Sample topics
  const topics = [
    "Topic 1",
    "Topic 2",
    "Topic 3",
    "Topic 4",
    "Topic 5",
    "Topic 6",
    "Topic 7",
    "Topic 8",
    "Topic 9",
    "Topic 10",
    "Topic 11",
    "Topic 12",
    "Topic 13",
    "Topic 14",
    "Topic 15",
  ];

  // Sample problems
  const problems = [
    { id: 1, name: "Problem 1" },
    { id: 2, name: "Problem 2" },
    { id: 3, name: "Problem 3" },
    { id: 4, name: "Problem 4" },
    { id: 5, name: "Problem 5" },
    { id: 6, name: "Problem 6" },
    { id: 7, name: "Problem 7" },
    { id: 8, name: "Problem 8" },
    { id: 9, name: "Problem 9" },
  ];

  // State to manage mobile menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left column */}
      <div
        className={`w-1/3 h-full overflow-y-auto border-r bg-gray-100 ${
          showMenu ? "block" : "hidden"
        } sm:block`}
      >
        {/* Scrollable content */}
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Scroll Down Column</h1>
          {/* Displaying topics */}
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="border border-gray-300 p-2 rounded-md font-bold hover:bg-gray-200 transition duration-300"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1">
        {/* Top navigation bar */}
        <div className="flex justify-between items-center bg-gray-200 p-4">
          <div className="text-xl font-bold">Navigation</div>
          <div className="flex items-center">
          <Link to="/Profile" >
          <FaUser className="text-2xl text-gray-600 cursor-pointer" /></Link>
          </div>
        </div>

        {/* Card section */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Problems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="border border-gray-300 p-4 rounded-md"
              >
                <h3 className="text-lg font-semibold mb-2">{problem.name}</h3>
               
                <Link to="/Problem" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">View</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hamburger icon for small screens */}
      <FaBars
        className="sm:hidden absolute top-4 left-4 text-2xl text-gray-600 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
    </div>
  );
};

export default HomePage;
