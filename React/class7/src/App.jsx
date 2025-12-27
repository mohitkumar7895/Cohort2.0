import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [profileURL, setProfileURL] = useState("");
  const [userDescription, setDescription] = useState("");

  const [allUser, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUser = [...allUser];
    oldUser.push({ userName, userRole, userDescription, profileURL });

    setAllUsers(oldUser);

    setUserName("");
    setUserRole("");
    setProfileURL("");
    setDescription("");
  };

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap p-2"
      >
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter your Name"
        />

        <input
          value={profileURL}
          onChange={(e) => {
            setProfileURL(e.target.value);
          }}
          className="border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Profile URl"
        />
        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter role"
        />
        <input
          value={userDescription}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className="px-5 py-2 bg-emerald-700 rounded m-2 w-[45%]">
          {" "}
          Create User
        </button>
      </form>
      <div className="px-3 py-10 flex flex-wrap justify-center">
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

         




      </div>

    </div>
  );
};

export default App;
