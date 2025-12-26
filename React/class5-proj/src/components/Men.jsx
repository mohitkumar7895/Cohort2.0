import React from "react";

const Men = ({ gender, setGender }) => {
  return (
    <div className="men flex items-center gap-3">
      <input
        type="radio"
        id="male"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={() => setGender("Male")}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
      />
      <label
        htmlFor="male"
        className="text-gray-700 font-medium cursor-pointer"
      >
        Male
      </label>
    </div>
  );
};

export default Men;
