import React from "react";

const Nav = () => {
  return (
    <nav className="bg-emerald-600 px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-white text-xl font-bold">
          Kanban App
        </h1>

        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li className="cursor-pointer hover:text-emerald-200 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-emerald-200 transition-colors">Tasks</li>
          <li className="cursor-pointer hover:text-emerald-200 transition-colors">About</li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
