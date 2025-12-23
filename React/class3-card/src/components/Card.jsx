import React from 'react'

const Card = ({ user }) => {
  return (
    <div className="bg-white w-64 m-4 rounded-xl shadow-lg overflow-hidden">

      {/* Profile Image */}
      <div className="flex justify-center mt-4">
        <img
          src={user.profile}
          alt="profile"
          className="w-20 h-20 rounded-full border-4 border-emerald-500"
        />
      </div>

      {/* Name & Title */}
      <div className="text-center mt-3 px-4">
        <h1 className="text-lg font-semibold">{user.fullName}</h1>
        <p className="text-sm text-gray-500">{user.title}</p>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-center mt-4 px-4 text-sm">
        <div>
          <p className="font-semibold">{user.postCount}</p>
          <p className="text-gray-500">Posts</p>
        </div>
        <div>
          <p className="font-semibold">{user.likeCount}</p>
          <p className="text-gray-500">Likes</p>
        </div>
        <div>
          <p className="font-semibold">{user.followedCount}</p>
          <p className="text-gray-500">Followers</p>
        </div>
      </div>

      {/* Button */}
      <div className="p-4">
        <button className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600">
          Follow
        </button>
      </div>

    </div>
  )
}

export default Card
