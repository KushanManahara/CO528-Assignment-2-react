import React, { useState } from "react";

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const updateAngle = (value) => {
    value = ((value % 360) + 360) % 360; // Ensure value is between 0 and 359
    setAngle(value);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mt-12">
      <h1 className="text-5xl font-bold mb-8 text-center text-slate-700">
        Angle Selector
      </h1>

      <div className="flex flex-col items-center gap-8 mb-8">
        <div className="text-6xl font-extrabold text-indigo-400 mb-3">
          {angle}°
        </div>
        <input
          type="number"
          value={angle}
          onChange={(e) => updateAngle(Number(e.target.value))}
          className="w-1/2 text-center text-lg p-3 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          min="0"
          max="360"
        />
      </div>

      <div className="w-full mb-8 flex justify-center">
        <input
          type="range"
          value={angle}
          onChange={(e) => updateAngle(Number(e.target.value))}
          className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-indigo-400"
          min="0"
          max="360"
        />
      </div>

      <div className="flex justify-center flex-wrap gap-4">
        {[0, 45, 60, 90, 180].map((value) => (
          <label
            key={value}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="radio"
              value={value}
              checked={angle === value}
              onChange={() => updateAngle(value)}
              className="form-radio text-indigo-500 h-5 w-5"
            />
            <span className="text-xl">{value}°</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;
