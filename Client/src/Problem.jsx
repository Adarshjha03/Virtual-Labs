import React from "react";

const ProblemPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Problem Name</h1>
        <div>
          <input
            type="text"
            placeholder="Your answer..."
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Problem Statement</h2>
          <p>Problem statement goes here...</p>
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Problem Constraints</h2>
          <p>Constraints go here...</p>
        </div>
      </div>
      <div className="mb-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Download Solution
        </button>
      </div>
      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Open the Virtual Lab</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Start Virtual Lab
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
