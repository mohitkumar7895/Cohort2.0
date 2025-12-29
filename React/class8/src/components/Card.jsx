import React from "react";

const Card = () => {
  return (
    <div className="w-[300px] bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
      
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        alt="profile"
        className="w-24 h-24 rounded-full object-cover"
      />

      <h2 className="mt-3 text-xl font-bold text-gray-800">
        Sarthak Sharma
      </h2>

      <h4 className="text-blue-500 font-semibold mt-1">
        Frontend Developer
      </h4>

      <p className="text-sm text-gray-600 text-center mt-2">
        I am a frontend developer who loves building clean and modern user
        interfaces using React and Tailwind CSS.
      </p>

      <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 active:scale-95">
        Follow
      </button>
    </div>
  );
};

export default Card;
