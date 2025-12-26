import React from "react";

const Women = ({ gender, setGender }) => {
  return (
    <div className="women flex items-center gap-3">
      <input
        type="radio"
        id="female"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onChange={() => setGender("Female")}
        className="h-4 w-4 text-pink-600 focus:ring-pink-500 cursor-pointer"
      />
      <label
        htmlFor="female"
        className="text-gray-700 font-medium cursor-pointer"
      >
        Female
      </label>
    </div>
  );
};

export default Women;
