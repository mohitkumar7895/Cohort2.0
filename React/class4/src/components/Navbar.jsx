import React from 'react'

const Navbar = (props) => {
  return (
    <div className="bg-emerald-500 text-white px-6 py-3 flex justify-between items-center">
      
      {/* Logo / Title */}
      <h1 className="text-xl font-semibold">
        MyWebsite
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 text-sm">
        <li className="cursor-pointer hover:text-gray-200">Home</li>
        <li className="cursor-pointer hover:text-gray-200">About</li>
        <li className="cursor-pointer hover:text-gray-200">Contact</li>
      </ul>

    </div>
  )
}

export default Navbar
