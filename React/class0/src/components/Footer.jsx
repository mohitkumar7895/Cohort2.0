import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Kanban App. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
