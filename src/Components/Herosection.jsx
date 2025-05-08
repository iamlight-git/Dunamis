import React from "react";
import { FiSearch } from "react-icons/fi";

const Herosection = () => {
  return (
    <div className="relative w-full h-[400px] flex flex-col items-center overflow-hidden gap-4">
      {/* Search input box fixed at the top */}
      <div className="w-full max-w-[400px] z-20 mb-4 mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 border border-gray-200 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
            <FiSearch size={20} />
          </span>
        </div>
      </div>

      {/* SVG background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="/Vector 9.svg"
          alt="Blob Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered content over SVG */}
      <div className=" flex items-center justify-center z-10 gap-2">
        <div className="text-center">
          <p className="text-2xl font-bold mb-2 text-gray-500">Teaching the Word</p>
          <p className="text-2xl font-bold mb-2">Reaching the Unreached</p>
          <p className="text-2xl font-bold mb-4 text-gray-400">Awakening the Nations</p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold relative top-25 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
